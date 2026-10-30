# AWS Learning

Repositório de anotações para estudar, consultar, praticar e revisar AWS. As explicações principais ficam em fundamentos e serviços; cursos preservam a origem do aprendizado e certificações conectam objetivos, revisão e dúvidas.

![AWS](assets/aws.png)

## Comece aqui

1. Abra o [roadmap de estudo](ROADMAP.md) e escolha uma etapa compatível com seu conhecimento.
2. Leia a referência principal e tente explicá-la sem consultar.
3. Resolva [perguntas fundamentais](certificacoes/perguntas-fundamentais.md) e [cenários conceituais](laboratorios/cenarios-fundamentais/README.md).
4. Registre dúvidas e planeje uma revisão na [trilha de certificação escolhida](certificacoes/README.md), sem marcar progresso antes da sessão real.

## Mapa do acervo

| Área | Ponto de entrada |
| --- | --- |
| [Fundamentos](fundamentos/README.md) | Conceitos de nuvem, infraestrutura, responsabilidades e arquitetura |
| [Serviços](servicos/README.md) | Referências principais por categoria |
| [Cursos](cursos/README.md) | Educate, Skill Builder e Partner, com contexto do aprendizado |
| [Certificações](certificacoes/README.md) | Mapas iniciais, anotações, revisão e registro de erros |
| [Laboratórios](laboratorios/README.md) | Cenários conceituais e roteiro SSH ainda não executado |

A organização e suas decisões estão no [plano](PLANO-DE-ORGANIZACAO.md); origem, destinos e limites estão no [registro da migração](MIGRACAO.md).

## Áreas de apoio

| Área | Finalidade |
| --- | --- |
| [Assets](assets/README.md) | Imagens preservadas e navegação por assunto |
| [Templates](templates/README.md) | Modelos de nota de serviço e roteiro de laboratório |
| [Scripts](scripts/README.md) | Verificador de links, testes e instruções de validação |
| [.github](.github/README.md) | Automação das verificações em push e pull request |

## Estado do material e progresso pessoal

- **rascunho:** conteúdo em construção, com lacunas identificadas.
- **em revisao:** conteúdo organizado, com revisão técnica ou confirmação de fontes ainda pendente.
- **revisado:** conferido no escopo declarado, com fontes e data da revisão; não significa que nunca mudará.

Esses estados descrevem a qualidade do texto. **Estudado, praticado e revisado** no roadmap descrevem sessões pessoais e ficam pendentes até registro real. Notas, imagens de badge e roteiros não comprovam curso concluído, certificação obtida ou laboratório executado.

Esta reconstrução corrige problemas identificados e valida arquivos locais; não é uma auditoria técnica integral. Fontes AWS bloquearam acesso em 2026-10-30. Preços, quotas, ofertas, ciclo de serviços e códigos/guias vigentes dos exames exigem consulta antes de uso.

## Como contribuir com as notas

Use nomes novos em minúsculas, sem acentos e com hífens; mantenha nomes oficiais no texto. `README.md`, `ROADMAP.md`, `PLANO-DE-ORGANIZACAO.md` e `MIGRACAO.md` são exceções convencionais. Caminhos legados das imagens foram preservados quando útil.

Mantenha uma explicação principal por assunto, estado do material, contexto de origem e fontes. Use links relativos entre arquivos e evite URLs GitHub fixadas em `main`. Tópicos só planejados pertencem ao roadmap, sem arquivos vazios. Ao consolidar, preserve conteúdo exclusivo.

Toda nova pasta do projeto deve receber **README com finalidade, conteúdo, ponto de entrada e navegação de volta**, exceto `.git`, `node_modules` e outros diretórios gerados. Uma nota simples pode ser arquivo; laboratório com arquivos auxiliares deve ter pasta própria.

Não versione credenciais, `.pem` ou `.env`. Roteiros devem informar custos, autorização, resultado verificável e limpeza seletiva, distinguindo exemplo de execução real.

## Validação local

Requisito: Node.js 20 ou superior; esta reconstrução e o workflow usam Node.js 24.

```bash
npm ci --ignore-scripts
npm test
npm run check
```

O check executa lint Markdown e validação de links locais, incluindo HTML, imagens e âncoras. Não consulta fontes externas nem comprova atualização técnica ou execução remota do GitHub Actions. Veja [como interpretar os resultados](scripts/README.md).
