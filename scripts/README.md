# Ferramentas de documentação

Comece por instalar as dependências com o lockfile. [check-links.mjs](check-links.mjs) exporta funções de parsing/checagem e oferece uma CLI; [check-links.test.mjs](check-links.test.mjs) exercita casos válidos e falhas em diretórios temporários, incluindo status da CLI e proteção contra escape por links simbólicos.

## Comandos

Node.js 20 ou superior é necessário; Node.js 24 foi usado nesta reconstrução e no workflow.

```bash
npm ci --ignore-scripts
npm test
npm run check
npm run lint:markdown
npm run check:links
```

Execute da raiz do repositório. A CLI também aceita um diretório como primeiro argumento e usa a raiz do próprio repositório por padrão. O verificador ignora `.git` e `node_modules` e não percorre diretórios simbólicos. As três dependências de parsing são MarkdownIt, htmlparser2 e github-slugger; o lint usa markdownlint-cli2.

## Interpretar erros

A CLI mostra arquivo de origem, referência e motivo, por exemplo arquivo ausente, destino vazio, âncora inexistente, diretório sem README ou caminho que sai da raiz. Corrija o destino e execute novamente; ela informa quantidades de Markdown, referências locais e erros e retorna status diferente de zero se algo falhar. Erros de acesso à raiz também falham.

Exemplos dentro de código são ignorados. Markdown e HTML são interpretados, títulos repetidos/acentuados recebem slugs compatíveis com GitHub, IDs/âncoras explícitos são coletados, percent-encoding é decodificado e query string não participa da procura do arquivo. Diretórios exigem README.md; imagens e arquivos de apoio existentes podem ser destinos.

Links blob/tree de `EdnaldoLuiz/aws-learning` são rejeitados em favor de caminhos relativos. Não há requisições externas: passar no check não comprova que fontes oficiais estão acessíveis, atualizadas ou tecnicamente corretas. A navegação global, preservação de conteúdo e existência de README em todas as pastas também exigem conferência editorial/inventário; não são substituídas pelo lint.

## Markdownlint

A [configuração](../.markdownlint-cli2.jsonc) mantém as regras padrão, exceto linhas extensas (MD013), repetição de títulos em contextos distintos (MD024 com siblings_only) e HTML (MD033). Não amplie exceções para esconder problemas.

[Voltar ao mapa principal](../README.md)
