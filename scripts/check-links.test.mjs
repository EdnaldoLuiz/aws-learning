import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { checkRepository, parseDocument } from './check-links.mjs';

async function fixture(t, files) {
  const root = await mkdtemp(path.join(tmpdir(), 'aws-docs-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const [filename, content] of Object.entries(files)) {
    await mkdir(path.dirname(path.join(root, filename)), { recursive: true });
    await writeFile(path.join(root, filename), content);
  }
  return root;
}

test('Markdown, reference-style, HTML, imagens com espaços e arquivos de apoio', async t => {
  const root = await fixture(t, {
    'README.md': '# Início\n[nota][n]\n\n[n]: guia/README.md#ação\n\n![imagem](<imagens/foto um.png>)\n<img src="imagens/foto%20um.png" />\n<a href="guia/?view=1#ação">HTML</a>\n[script](a.mjs) [json](a.json) [yaml](a.yml)',
    'guia/README.md': '# Ação\n', 'imagens/foto um.png': 'image', 'a.mjs': '', 'a.json': '{}', 'a.yml': 'name: test',
  });
  const result = await checkRepository(root);
  assert.equal(result.markdownFiles, 2);
  assert.equal(result.localReferences, 7);
  assert.deepEqual(result.errors, []);
});

test('acentos, títulos repetidos, inline code e âncoras HTML explícitas', async t => {
  const root = await fixture(t, {
    'README.md': '# Ação\n# Ação\n# Ação-1\n# Ação\n## `Código` e **ênfase**\n<a id="especial"></a><a name="legado"></a>\n[1](#ação) [2](#ação-1) [3](#ação-1-1) [4](#ação-2) [5](#código-e-ênfase) [6](#especial) [7](#legado) [8](#a%C3%A7%C3%A3o)',
  });
  assert.deepEqual((await checkRepository(root)).errors, []);
});

test('links externos não geram requisições nem validação de destino', async t => {
  const root = await fixture(t, { 'README.md': '[web](https://invalid.example/nope) [mail](mailto:a@example.com) ![img](//example.com/no.png) [outro](https://github.com/outra/pasta/blob/main/x.md)' });
  const result = await checkRepository(root);
  assert.equal(result.localReferences, 0);
  assert.deepEqual(result.errors, []);
});

test('exemplos de código Markdown, HTML e diretórios ignorados', async t => {
  const root = await fixture(t, {
    'README.md': '# Teste\n```md\n[ausente](nao.md)\n<img src="">\n```\n\n    [outro](nada.md)\n\n`[inline](nada.md)`\n<pre><code><a href="invalido.md">x</a></code></pre>',
    '.git/ignorado.md': '[falha]()', 'node_modules/ignorado.md': '[falha]()',
  });
  const result = await checkRepository(root);
  assert.equal(result.markdownFiles, 1);
  assert.equal(result.localReferences, 0);
  assert.deepEqual(result.errors, []);
});

const failures = [
  ['arquivo ausente', '[x](nao-existe.md)', /ausente/],
  ['âncora ausente', '[x](README.md#nao-existe)', /âncora ausente/],
  ['destino Markdown vazio', '[x]()', /destino vazio/],
  ['destino de imagem vazio', '![x]()', /destino vazio/],
  ['destino HTML vazio', '<a href=" ">x</a>', /destino vazio/],
  ['imagem HTML sem src', '<img alt="x">', /destino vazio/],
  ['fora do repositório', '[x](../fora.md)', /fora do repositório/],
  ['travessia codificada', '[x](%2e%2e/fora.md)', /fora do repositório/],
  ['percent-encoding malformado', '<a href="a%ZZ.md">x</a>', /percent-encoding/],
  ['GitHub blob na branch', '[x](https://github.com/EdnaldoLuiz/aws-learning/blob/main/README.md)', /caminho relativo/],
  ['GitHub tree em outra ref', '<a href="https://github.com/ednaldoluiz/aws-learning/tree/59c39aa/servicos">x</a>', /caminho relativo/],
];

for (const [name, link, reason] of failures) {
  test(name, async t => {
    const root = await fixture(t, { 'README.md': `# Início\n${link}\n` });
    const result = await checkRepository(root);
    assert.equal(result.errors.length, 1);
    assert.equal(result.errors[0].file, 'README.md');
    assert.ok(result.errors[0].reference !== undefined);
    assert.match(result.errors[0].reason, reason);
  });
}

test('diretório exige README e links simbólicos não escapam da raiz', async t => {
  const root = await fixture(t, { 'README.md': '[vazio](vazio/) [externo](atalho/existe.md)', 'vazio/outro.json': '{}' });
  const outside = await fixture(t, { 'existe.md': '# Fora' });
  await symlink(outside, path.join(root, 'atalho'), 'dir');
  const result = await checkRepository(root);
  assert.equal(result.errors.length, 2);
  assert.match(result.errors[0].reason, /sem README/);
  assert.match(result.errors[1].reason, /simbólico fora/);
});

test('query é descartada; percent-encoding e caminho relativo à raiz são aceitos', async t => {
  const root = await fixture(t, {
    'README.md': '[x](notas/a%20b.md?raw=1#vis%C3%A3o) [raiz](/README.md#início)\n# Início',
    'notas/a b.md': '# Visão',
  });
  assert.deepEqual((await checkRepository(root)).errors, []);
});

test('CLI informa quantidades e falha com status não zero', async t => {
  const root = await fixture(t, { 'README.md': '# Teste\n[x](falta.md)' });
  const cli = fileURLToPath(new URL('./check-links.mjs', import.meta.url));
  let result = spawnSync(process.execPath, [cli, root], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  assert.match(result.stdout, /1 Markdown; 1 referências locais; 1 erros/);
  assert.match(result.stderr, /README.md.*falta.md.*ausente/);
  await writeFile(path.join(root, 'falta.md'), '# Existe');
  result = spawnSync(process.execPath, [cli, root], { encoding: 'utf8' });
  assert.equal(result.status, 0);
  assert.match(result.stdout, /2 Markdown; 1 referências locais; 0 erros/);
});

test('slugger reinicia por documento e HTML entities são decodificadas', () => {
  for (let i = 0; i < 2; i++) {
    const doc = parseDocument('# Café & chá\n<a href="a.md?x=1&amp;y=2">x</a>');
    assert.ok(doc.anchors.has('café--chá'));
    assert.equal(doc.references[0].value, 'a.md?x=1&y=2');
  }
});
