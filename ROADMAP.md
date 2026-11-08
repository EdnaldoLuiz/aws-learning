# Roadmap de estudo

Este é um ponto de partida ajustável, sem datas ou progresso pessoal inventados. Escolha uma etapa e uma sessão curta. Estado do texto é separado das colunas de progresso; só marque estudado, praticado ou revisado depois da atividade correspondente.

## Sequência inicial

| Etapa | Pré-requisito | Material principal | Prática ou revisão relacionada | Estudado | Praticado | Revisado | Próxima revisão |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1. Conceitos de nuvem | Nenhum | [Nuvem](fundamentos/computacao-em-nuvem.md) | [Cloud 101](cursos/aws-educate/cloud-101.md); explicar IaaS/PaaS/SaaS sem consulta | Pendente | Pendente | Pendente | A definir após sessão |
| 2. Infraestrutura global | Etapa 1 | [Infraestrutura](fundamentos/infraestrutura-global.md) | Comparar falha de instância, AZ e região | Pendente | Pendente | Pendente | A definir após sessão |
| 3. Responsabilidade e identidades | Etapas 1–2 | [Responsabilidade](fundamentos/responsabilidade-compartilhada.md), [IAM](servicos/seguranca-identidade/iam.md), [Identity Center](servicos/seguranca-identidade/identity-center.md) | [Perguntas IAM](certificacoes/perguntas-fundamentais.md#iam), [cenário IAM](laboratorios/cenarios-fundamentais/README.md#1-iam-aplicação-ec2-lendo-s3) | Pendente | Pendente | Pendente | A definir após sessão |
| 4. Redes | Etapas 2–3 | [Redes](servicos/redes/README.md) | [Perguntas VPC](certificacoes/perguntas-fundamentais.md#vpc), [cenário VPC](laboratorios/cenarios-fundamentais/README.md#2-vpc-instância-sem-rota-pública) | Pendente | Pendente | Pendente | A definir após sessão |
| 5. Computação | Etapas 3–4 | [EC2 e ECS](servicos/computacao/README.md) | [Perguntas EC2](certificacoes/perguntas-fundamentais.md#ec2); [roteiro SSH](laboratorios/ec2-ssh/README.md) só em sessão autorizada | Pendente | Pendente | Pendente | A definir após sessão |
| 6. Armazenamento | Etapas 3–5 | [S3 e EBS](servicos/armazenamento/README.md) | [Perguntas S3](certificacoes/perguntas-fundamentais.md#s3), [cenário S3](laboratorios/cenarios-fundamentais/README.md#4-s3-acesso-raro-e-imediato) | Pendente | Pendente | Pendente | A definir após sessão |
| 7. Bancos de dados | Etapas 4–6 | [Bancos](servicos/bancos-de-dados/README.md) | Comparar RDS/Aurora/DynamoDB por padrão de acesso e disponibilidade | Pendente | Pendente | Pendente | A definir após sessão |
| 8. Operações e custos | Etapas 3–7 | [Systems Manager](servicos/gestao-operacoes/systems-manager.md), [Cost Explorer](servicos/custos/cost-explorer.md) | Diagnóstico de nó; [cenário de despesas EC2](laboratorios/cenarios-fundamentais/README.md#3-ec2-parar-não-é-zerar-a-fatura) | Pendente | Pendente | Pendente | A definir após sessão |
| 9. Arquitetura | Etapas 1–8 | [Well-Architected](fundamentos/well-architected.md) | Mini-quiz, trade-offs e [curso de origem](cursos/aws-skill-builder/well-architected-foundations.md) | Pendente | Pendente | Pendente | A definir após sessão |
| 10. Certificação escolhida | Fundamentos relevantes e guia oficial conferido | [Trilhas](certificacoes/README.md) | Anotações, recuperação ativa, cenários e registro de erros da trilha | Pendente | Pendente | Pendente | A definir após sessão |

## Recuperação ativa e revisões

Explique um conceito sem consulta, resolva um cenário e só depois confira referência e fonte. Registre raciocínio, correção e motivo. Intervalos como **1, 7 e 30 dias** podem orientar revisão espaçada, ajustados à disponibilidade e às dificuldades. Preencha datas depois de uma sessão real; não há calendário automático nem histórico pessoal nesta reconstrução.

Uma sessão conceitual pode contar como prática conceitual se for assim registrada; ela não demonstra execução de laboratório na AWS. Registre o tipo de atividade e o resultado observado.

## Backlog

### Arquitetura e resiliência — aprofundamento futuro

- [ ] **High Availability:** objetivos de disponibilidade, redundância, dependências, SLO/SLA e Multi-AZ.
- [ ] **Fault Tolerance:** escopo de falhas toleradas, degradação controlada, failover e limites de recuperação.
- [ ] **Auto Scaling:** escalabilidade versus elasticidade, métricas, políticas, tempo de inicialização e recuperação.
- [ ] **Static Stability:** padrões ativo-ativo/standby, capacidade de reserva em duas ou três AZs, dependências de control plane e testes de falha. [Resumo já estudado](fundamentos/well-architected.md).

A tabela comparativa inicial está em [Well-Architected](fundamentos/well-architected.md). Aprofundar em sessões futuras, sem criar arquivos vazios ou registrar laboratórios não executados.

Os tópicos abaixo não geram arquivos vazios. Criar nota somente com conteúdo útil, origem, fontes e ligação na navegação.

- [ ] Amazon EKS: conceitos, alternativas e operação de Kubernetes.
- [ ] Aprofundar Outposts, modalidades, capacidade e conectividade; [imagem preservada](assets/aws-services/infra/outposts.jpg).
- [ ] ElastiCache e MemoryDB: cache versus banco durável e engines atuais.
- [ ] DocumentDB, Keyspaces, Neptune e Timestream; distinguir modalidades e elegibilidade de novos clientes.
- [ ] Redshift: OLAP, modos de execução e relação com S3/analytics.
- [ ] QLDB: ciclo de vida/encerramento e relevância histórica de ledger, com alternativas e migração; sem recomendação automática para novos projetos.
- [ ] EFS e FSx: protocolos, modalidades de disponibilidade, throughput e custos.
- [ ] Serviços sem notas no [catálogo de analytics](servicos/analytics/README.md); revisar legados/restritos e nomes como Data Firehose/Managed Service for Apache Flink.
- [ ] Serviços sem notas no [catálogo de migração](servicos/migracao/README.md); revisar SMS, Discovery, Migration Hub e modalidades Mainframe.
- [ ] CloudWatch, CloudTrail, Config e Budgets: capítulos próprios com escopo claro.
- [ ] Lambda, API Gateway, SNS, EventBridge e Step Functions; integrar com [SQS](servicos/integracao/sqs.md).
- [ ] Concluir o rascunho [Educate Security](cursos/aws-educate/security.md).
- [ ] Conferir códigos, guias e objetivos vigentes das certificações, incluindo nomes antigos citados nos cursos.
- [ ] Conferir fontes oficiais de Cost Explorer, Systems Manager, Well-Architected, IAM, VPC, EC2 e S3; revisar preços, limites e ofertas legadas.
- [ ] Realizar e registrar sessões de estudo/revisão e, se autorizado, execução futura do roteiro SSH.
- [ ] Observar execução do workflow no GitHub; sucesso local não comprova execução remota.

[Voltar ao mapa principal](README.md)
