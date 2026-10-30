# Plano de organização

O trabalho segue cinco fases. Checklists registram organização/validação do acervo, sem afirmar estudo, domínio pessoal ou auditoria técnica integral. Veja [migração](MIGRACAO.md) e [roadmap](ROADMAP.md) para rastreabilidade e sequência de estudo.

## Fase 1 — Corrigir e identificar o material existente

- [x] Inspecionar instruções aplicáveis, checkout, branch, remotes e alterações existentes.
- [x] Procurar o commit perdido e preservar a base recuperável fora do checkout.
- [x] Identificar oito notas vazias, duplicação do TXT e cópias indevidas de serviços.
- [x] Corrigir os problemas identificados e informar estados/limites de revisão.
- [ ] Conferir tecnicamente todas as notas nas fontes oficiais vigentes.

**Critério:** inventário rastreável e correções explícitas sem alegação de revisão integral. **Evidência:** origem/destino, triagem e limites em MIGRACAO.md. **Próxima ação:** retomar consulta oficial quando os hosts AWS estiverem acessíveis.

## Fase 2 — Criar navegação e caminho de estudo

- [x] Transformar README principal em mapa e ligar áreas principais/de apoio.
- [x] Criar roadmap com pré-requisitos, material, prática/revisão e campos pessoais pendentes.
- [x] Acrescentar contexto, ponto de entrada e retorno nos índices.
- [x] Criar README nas pastas do projeto e do acervo visual.

**Critério:** encontrar material a partir do README sem depender apenas de plano/migração. **Evidência:** inventário de navegação final e verificador de links locais. **Próxima ação:** usuário escolher uma sessão, sem marcar progresso antecipado.

## Fase 3 — Consolidar e padronizar a estrutura

- [x] Migrar fundamentos, serviços, cursos e certificações para nomes padronizados.
- [x] Consolidar explicações principais e preservar observações específicas úteis.
- [x] Retirar vazios, mover assuntos planejados ao roadmap e triar o TXT antes da remoção.
- [x] Preservar imagens e ajustar caminhos; manter nomes legados úteis no acervo.
- [ ] Confirmar ofertas legadas, preços, limites e códigos/guias atuais das certificações.

**Critério:** nenhuma nota vazia, links locais válidos e imagens preservadas por hash. **Evidência:** mapeamento de migração e comparação SHA-256 com a base. **Próxima ação:** conferir ciclos de vida e guias nas fontes.

## Fase 4 — Conectar teoria, prática e revisão

- [x] Criar oito perguntas próprias com respostas e quatro cenários conceituais.
- [x] Reescrever SSH com requisitos, host key, resultado verificável, custos e limpeza.
- [x] Criar revisão/erros nas três trilhas sem dados pessoais inventados.
- [x] Disponibilizar templates de serviço e laboratório.
- [ ] Realizar sessões pessoais e preencher progresso/próxima revisão.
- [ ] Executar laboratório AWS em sessão futura com autorização apropriada.

**Critério:** cada exercício tem objetivo, discussão/resultado esperado e forma de registrar dúvidas; execução real é estado separado. **Evidência:** páginas de certificações/laboratórios e roteiro marcado não executado. **Próxima ação:** resolver um cenário conceitual sem criar recursos.

## Fase 5 — Manter organização e automatizar validações

- [x] Criar ferramentas Node, lockfile, lint e verificador local com testes significativos.
- [x] Criar workflow em push/pull_request com Node.js 24 e permissão de leitura.
- [x] Concluir e registrar validação final antes do commit.
- [ ] Observar uma execução real de GitHub Actions.

**Critério:** testes efetivamente executados, lint/links passando e instruções reproduzíveis. **Evidência:** resultado da validação final abaixo e comandos documentados em scripts. **Próxima ação:** concluir check e inventário; commit/push e bundle são reportados na entrega conforme resultado real.

## Evidências da validação final

Validação local concluída em 2026-10-30 com Node.js 24.19.0 e npm 11.9.0:

- `npm ci --ignore-scripts`: instalação pelo lockfile concluída; versões declaradas preservadas.
- `npm test`: **19 testes executados e aprovados**, nenhum ignorado, incluindo falhas de destinos e status da CLI. O runner/subprocessos precisaram da permissão de execução do executor; a suíte passou sem reduzir asserções.
- `npm run check`: **94 Markdown, 618 referências locais, zero erros**; lint também sem erros.
- Inventário: **48 diretórios de projeto, todos com README**; nenhum Markdown vazio.
- Navegação: **92 páginas alcançáveis** pelo README principal sem passar pelo plano ou pela migração; as outras duas são esses registros, ligados diretamente no README.
- Preservação: **66 imagens** comparadas por SHA-256 com a base, sem diferença de bytes; **63 caminhos preservados e 3 imagens movidas** para assets.
- Triagem do TXT: corpo Storage idêntico após normalização de quebras de linha; descrições introdutórias exclusivas preservadas no índice Educate.
- Workflow YAML e lockfile conferidos localmente; não houve execução remota comprovada.
- Revisão dos arquivos a versionar: sem dependências instaladas, credenciais, chaves privadas ou arquivos temporários de reconstrução.

Fontes AWS permaneceram bloqueadas pelo proxy (CONNECT HTTP 403), sem alteração/publicação da configuração. Nenhum laboratório AWS foi executado. Sucesso local não comprova push nem execução do GitHub Actions; o resultado de envio e o bundle final são informados na entrega.

[Voltar ao mapa principal](README.md)
