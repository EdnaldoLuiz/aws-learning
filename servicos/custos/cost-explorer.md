# AWS Cost Explorer

Estado do material: **em revisao**. Origem: anotações anteriores e reconstrução editorial.
Revisão técnica nas fontes: pendente; acesso oficial bloqueado em 2026-10-30.

![Cost Explorer](../../assets/aws-services/financial/cost-explorer.png)

## Finalidade

Cost Explorer explora custos e uso AWS ao longo do tempo por gráficos, filtros e agrupamentos. Ajuda a responder onde a despesa cresceu, quais serviços/contas contribuíram e como o padrão mudou. Não é ferramenta de postura de segurança; a cópia anterior de Security Hub foi substituída.

## Filtros, agrupamentos e tags

Escolha período e granularidade; filtre dimensões como serviço, região, conta vinculada, tipo de uso, opção de compra e tags disponíveis. Agrupe para comparar componentes da despesa. Não some quantidades de uso de unidades incompatíveis: GB, horas e requisições não são a mesma medida.

Tags de alocação de custos precisam ser ativadas no contexto de faturamento adequado e estar disponíveis nos dados. Uma tag em um recurso não aparece necessariamente de imediato ou retroativamente em todo relatório. Defina uma convenção como projeto, ambiente e responsável; confira suporte e limitações do serviço.

## Qual métrica de custo?

| Métrica | Interpretação e cuidado |
| --- | --- |
| Unblended | Usa as taxas de cada linha de uso; útil para analisar a cobrança sem média consolidada |
| Blended | Usa taxas médias aplicáveis à organização; pode esconder diferenças entre contas |
| Amortized | Distribui encargos de compromissos como RI/Savings Plans ao longo do período de benefício |
| Net unblended / Net amortized | Considera descontos líquidos aplicáveis; disponibilidade depende da conta e dos dados |
| Usage quantity | Quantidade consumida, não despesa; filtre tipos com unidade compatível |

Créditos, reembolsos, impostos e taxas de compromisso alteram a leitura. Compare períodos com a **mesma métrica** e os mesmos filtros antes de atribuir uma variação à aplicação.

## Atualização e previsão

Dados de faturamento têm atraso. A referência usual é atualização ao menos diária, mas parte dos dados pode chegar depois; o mês aberto continua sujeito a ajustes. Cost Explorer não é monitoramento de custo em tempo real.

Forecast é uma **estimativa** baseada em histórico e modelo, com incerteza e requisitos de dados suficientes. Não é promessa do valor final nem limite de cobrança. Mudança de arquitetura ou campanha nova pode invalidar a extrapolação.

## Comparação com outras ferramentas

| Ferramenta | Uso principal |
| --- | --- |
| Cost Explorer | Investigar custo/uso observado e tendências |
| AWS Budgets | Acompanhar orçamento e alertas de limiar ou previsão; ações exigem configuração específica |
| AWS Pricing Calculator | Estimar um desenho antes da execução; depende das premissas informadas |
| Cost and Usage Reports / AWS Data Exports | Dados detalhados para processamento e alocação próprios, com formatos e opções a conferir |

Um alerta de Budget não é um bloqueio automático de toda despesa. Relatórios detalhados e serviços usados para consultá-los podem custar armazenamento e processamento.

## Permissões, segurança e custos

Ative acesso ao faturamento conforme o modelo de conta/organização e conceda apenas as ações de leitura necessárias. O usuário precisa de permissões de Billing/Cost Management apropriadas; a conta de gerenciamento e contas-membro podem ter visibilidade diferente. Dados financeiros e tags podem ser sensíveis.

A interface de consulta básica e a API têm condições de cobrança diferentes. Chamadas da API Cost Explorer podem ser cobradas; granularidades e recursos adicionais podem ter tarifas. Confira preços vigentes, filtros de acesso e acesso entre contas antes de automatizar consultas em volume. Nenhum valor monetário foi confirmado online nesta reconstrução.

## Cenário: a despesa aumentou

1. Compare dois períodos de duração equivalente usando a mesma métrica.
2. Agrupe por serviço e conta; localize a contribuição à diferença.
3. Filtre o serviço e detalhe região e tipo de uso: computação, EBS, IPv4, NAT ou transferência, por exemplo.
4. Use tags ativas para buscar projeto/responsável; investigue recursos reais e mudanças com os registros de operação.
5. Confira se há compra/expiração de compromisso, crédito ou ajuste, em vez de aumento de consumo.
6. Registre hipótese, evidência e ação. Use Budgets para acompanhar a tendência após a mudança; espere a atualização dos dados para comparar.

Este cenário é conceitual: nenhuma conta foi consultada e nenhum recurso foi excluído.

## Perguntas e respostas

1. O gráfico de hoje é definitivo? Não: há atraso e ajustes no período aberto.
2. Forecast impede ultrapassar orçamento? Não: é estimativa; alertas e ações são mecanismos distintos.
3. Amortized e unblended devem ter o mesmo valor mensal? Não necessariamente: distribuem encargos de compromissos de maneiras diferentes.
4. Criar uma tag já resolve todo rateio? Não: é necessário ativá-la para alocação, esperar disponibilidade e avaliar itens sem suporte/tag.

## Fontes oficiais a conferir

- [O que é Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html)
- [Análise com Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-exploring-data.html)
- [Tags de alocação](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html)
- [Preços Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/pricing/)
- [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)
- [Pricing Calculator](https://calculator.aws/)

[Voltar ao índice](README.md)
