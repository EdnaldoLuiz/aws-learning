import { readdir, readFile, stat, realpath } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';
import { Parser } from 'htmlparser2';
import GithubSlugger from 'github-slugger';

const markdown = new MarkdownIt({ html: true });
const ignoredDirectories = new Set(['.git', 'node_modules']);

// Rendering first resolves Markdown references and leaves fenced examples escaped.
// Parsing the result also covers raw HTML and decodes HTML entities in attributes.
export function parseDocument(source) {
  const anchors = new Set();
  const references = [];
  const slugger = new GithubSlugger();
  let heading = null;
  let preDepth = 0;
  let codeDepth = 0;
  const parser = new Parser({
    onopentag(name, attrs) {
      if (name === 'pre') preDepth++;
      if (name === 'code') codeDepth++;
      if (!preDepth && !codeDepth) {
        if (attrs.id) anchors.add(attrs.id);
        if (name === 'a' && attrs.name) anchors.add(attrs.name);
        for (const attribute of ['href', 'src']) {
          if (Object.hasOwn(attrs, attribute)) references.push({ value: attrs[attribute], attribute });
        }
        if (name === 'img' && !Object.hasOwn(attrs, 'src')) references.push({ value: '', attribute: 'src' });
      }
      if (/^h[1-6]$/.test(name) && !preDepth) heading = { name, text: '' };
      if (heading && name === 'img') heading.text += attrs.alt ?? '';
    },
    ontext(text) {
      if (heading) heading.text += text;
    },
    onclosetag(name) {
      if (heading?.name === name) {
        anchors.add(slugger.slug(heading.text));
        heading = null;
      }
      if (name === 'pre') preDepth = Math.max(0, preDepth - 1);
      if (name === 'code') codeDepth = Math.max(0, codeDepth - 1);
    },
  }, { decodeEntities: true });
  parser.end(markdown.render(source));
  return { anchors, references };
}

export async function collectMarkdownFiles(root) {
  const files = [];
  async function visit(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    entries.sort((a, b) => a.name.localeCompare(b.name));
    for (const entry of entries) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory() && !ignoredDirectories.has(entry.name)) await visit(filename);
      else if (entry.isFile() && /\.md$/i.test(entry.name)) files.push(filename);
    }
  }
  await visit(root);
  return files;
}

function isWithin(root, target) {
  const relative = path.relative(root, target);
  return relative !== '..' && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}

export function isOwnGithubLink(value, repository = 'EdnaldoLuiz/aws-learning') {
  try {
    const url = new URL(value.startsWith('//') ? `https:${value}` : value);
    return /^(www\.)?github\.com$/i.test(url.hostname)
      && decodeURIComponent(url.pathname).toLowerCase().startsWith(`/${repository.toLowerCase()}/`)
      && ['blob', 'tree'].includes(decodeURIComponent(url.pathname).split('/')[3]?.toLowerCase());
  } catch {
    return false;
  }
}

export function isExternal(value) {
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(value);
}

export async function resolveLocalReference(root, sourceFile, value) {
  const hash = value.indexOf('#');
  const beforeHash = hash < 0 ? value : value.slice(0, hash);
  const encodedFragment = hash < 0 ? '' : value.slice(hash + 1);
  const encodedPath = beforeHash.split('?')[0];
  let localPath, fragment;
  try {
    localPath = decodeURIComponent(encodedPath).replaceAll('\\', '/');
    fragment = decodeURIComponent(encodedFragment);
  } catch {
    throw new Error('percent-encoding inválido');
  }
  if (localPath.includes('\0') || fragment.includes('\0')) throw new Error('caractere nulo no destino');
  let target = localPath === '' ? sourceFile
    : localPath.startsWith('/') ? path.resolve(root, `.${localPath}`)
      : path.resolve(path.dirname(sourceFile), localPath);
  if (!isWithin(root, target)) throw new Error('caminho fora do repositório');
  let metadata;
  try {
    metadata = await stat(target);
  } catch (error) {
    if (['ENOENT', 'ENOTDIR'].includes(error.code)) throw new Error('arquivo ou diretório ausente');
    throw error;
  }
  if (!isWithin(root, await realpath(target))) throw new Error('link simbólico fora do repositório');
  if (metadata.isDirectory()) {
    target = path.join(target, 'README.md');
    try {
      if (!(await stat(target)).isFile()) throw new Error('README não é arquivo');
    } catch {
      throw new Error('diretório sem README.md');
    }
    if (!isWithin(root, await realpath(target))) throw new Error('link simbólico fora do repositório');
  } else if (!metadata.isFile()) throw new Error('destino não é arquivo');
  return { target, fragment };
}

export async function checkRepository(directory, { repository = 'EdnaldoLuiz/aws-learning' } = {}) {
  const root = await realpath(directory);
  const files = await collectMarkdownFiles(root);
  const cache = new Map();
  const errors = [];
  let localReferences = 0;
  async function document(filename) {
    if (!cache.has(filename)) cache.set(filename, parseDocument(await readFile(filename, 'utf8')));
    return cache.get(filename);
  }
  for (const filename of files) {
    const source = await document(filename);
    for (const reference of source.references) {
      const value = reference.value.trim();
      const report = reason => errors.push({ file: path.relative(root, filename), reference: reference.value, reason });
      if (isOwnGithubLink(value, repository)) {
        report('link blob/tree do próprio repositório: use caminho relativo');
        continue;
      }
      if (isExternal(value)) continue;
      localReferences++;
      if (!value) {
        report('destino vazio');
        continue;
      }
      try {
        const { target, fragment } = await resolveLocalReference(root, filename, value);
        if (fragment && /\.md$/i.test(target) && !(await document(target)).anchors.has(fragment)) {
          report(`âncora ausente: #${fragment} em ${path.relative(root, target)}`);
        }
      } catch (error) {
        report(error.message);
      }
    }
  }
  return { markdownFiles: files.length, localReferences, errors };
}

export async function main(args = process.argv.slice(2)) {
  const root = args[0] ?? path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  try {
    const result = await checkRepository(root);
    for (const error of result.errors) console.error(`${error.file}: ${JSON.stringify(error.reference)} — ${error.reason}`);
    console.log(`${result.markdownFiles} Markdown; ${result.localReferences} referências locais; ${result.errors.length} erros.`);
    return result.errors.length ? 1 : 0;
  } catch (error) {
    console.error(`Falha ao verificar documentação: ${error.message}`);
    return 1;
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.exitCode = await main();
}
