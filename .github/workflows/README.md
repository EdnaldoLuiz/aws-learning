# Workflows

[docs.yml](docs.yml) valida os materiais em push e pull request usando ubuntu-latest, checkout@v4 e setup-node@v4 com Node.js 24 e cache npm. Comece pelo arquivo para ver os comandos exatos; a execução tem `permissions: contents: read`.

Na raiz do checkout, reproduza:

```bash
npm ci --ignore-scripts
npm test
npm run check
```

As etapas validam testes do verificador e documentação local. Não executam laboratórios AWS nem consultam links externos. A execução remota permanece sem comprovação até verificar um run real no GitHub.

[Voltar à automação](../README.md)
