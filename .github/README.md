# Automação do repositório

A pasta [workflows](workflows/README.md) contém a validação de documentação [docs.yml](workflows/docs.yml). Comece pelo README de workflows para entender gatilhos e execução. O workflow testa o verificador e roda lint/links em push e pull request, com permissão somente de leitura do conteúdo.

Para reproduzir da raiz: `npm ci --ignore-scripts`, `npm test` e `npm run check`, usando Node.js 24. Sucesso local não comprova que uma execução ocorreu no GitHub; confira a aba Actions após um envio remoto confirmado.

[Voltar ao mapa principal](../README.md)
