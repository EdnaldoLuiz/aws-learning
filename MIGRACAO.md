# Registro da migração

Estado do material: **em revisao**. Reconstrução editorial em 2026-10-30 no checkout existente, sem recriar o ambiente antigo, sem reset e sem worktree.

## Base e recuperação

O checkout estava limpo na branch `work`, commit `59c39aaf1000d0bf9dc7c18a7e29ef991c09415e`. A consulta read-only de `origin/main` confirmou essa mesma base no início. O objeto `ac76e5cf450a71074e91b174231ac75c8d209a44` não estava disponível no Git local; nenhum SHA foi produzido artificialmente. Criou-se `main` a partir da base existente e a branch anterior foi preservada.

Antes das alterações foram gerados bundle Git verificável, arquivo da árvore base e inventário SHA-256 fora do checkout. A cópia final e o resultado real de commit/push são informados na entrega. Um bundle no mesmo ambiente não é backup externo confirmado.

## Origem e destino

Os caminhos antigos são texto de registro, não links para arquivos removidos. Destinos existentes usam navegação relativa.

| Origem | Destino |
| --- | --- |
| `aws-services/computing/EC2/README.md` | [servicos/computacao/ec2.md](servicos/computacao/ec2.md) |
| `aws-services/computing/ECS/README.md` | [servicos/computacao/ecs.md](servicos/computacao/ecs.md) |
| `aws-services/storage/S3/README.md` | [servicos/armazenamento/s3.md](servicos/armazenamento/s3.md) |
| `aws-services/storage/EBS/README.md` | [servicos/armazenamento/ebs.md](servicos/armazenamento/ebs.md) |
| `aws-services/database/sql/Aurora.md` | [servicos/bancos-de-dados/aurora.md](servicos/bancos-de-dados/aurora.md) |
| `aws-services/database/sql/RDS.md` | [servicos/bancos-de-dados/rds.md](servicos/bancos-de-dados/rds.md) |
| `aws-services/database/nosql/DynamoDB.md` | [servicos/bancos-de-dados/dynamodb.md](servicos/bancos-de-dados/dynamodb.md) |
| `aws-services/network/README.md` | [servicos/redes/interfaces-de-rede.md](servicos/redes/interfaces-de-rede.md) |
| `aws-services/network/VPC/README.md` | [servicos/redes/vpc.md](servicos/redes/vpc.md) |
| `aws-services/network/Route53/README.md` | [servicos/redes/route53.md](servicos/redes/route53.md) |
| `aws-services/network/PrivateLink/README.md` | [servicos/redes/privatelink.md](servicos/redes/privatelink.md) |
| `aws-services/governance/IAM/README.md` | [servicos/seguranca-identidade/iam.md](servicos/seguranca-identidade/iam.md) |
| `aws-services/Identity-Center/README.md` | [servicos/seguranca-identidade/identity-center.md](servicos/seguranca-identidade/identity-center.md) |
| `aws-services/security/Security-Hub/README.md` | [servicos/seguranca-identidade/security-hub.md](servicos/seguranca-identidade/security-hub.md) |
| `aws-services/financial/Cost-Explorer/README.md` | [servicos/custos/cost-explorer.md](servicos/custos/cost-explorer.md) |
| `aws-services/governance/systems-manager/README.md` | [servicos/gestao-operacoes/systems-manager.md](servicos/gestao-operacoes/systems-manager.md) |
| `aws-services/app-integration/SQS/README.md` | [servicos/integracao/sqs.md](servicos/integracao/sqs.md) |
| `aws-services/migration/data-sync/README.md` | [servicos/migracao/data-sync.md](servicos/migracao/data-sync.md) |
| `aws-services/storage/README.md` | [servicos/armazenamento/README.md](servicos/armazenamento/README.md) |
| `aws-services/computing/README.md` | [servicos/computacao/README.md](servicos/computacao/README.md) |
| `aws-services/database/README.md` | [servicos/bancos-de-dados/README.md](servicos/bancos-de-dados/README.md) |
| `aws-services/migration/README.md` | [servicos/migracao/README.md](servicos/migracao/README.md) |
| `aws-services/analytic/README.md` | [servicos/analytics/README.md](servicos/analytics/README.md) |
| `aws-partner/README.md` | [cursos/aws-partner/anotacoes.md](cursos/aws-partner/anotacoes.md) |
| `aws-skill-builder/paths/Cloud-Essentials/Job-Roles-in-the-Cloud.md` | [cursos/aws-skill-builder/job-roles-in-the-cloud.md](cursos/aws-skill-builder/job-roles-in-the-cloud.md) |
| `aws-skill-builder/paths/Well-Architected-Foundations.md` | [fundamentos/well-architected.md](fundamentos/well-architected.md) |
| `aws-exam-prep/README.md` | [certificacoes/leituras-complementares.md](certificacoes/leituras-complementares.md) |
| `summary/CLF-C02/README.md` | [certificacoes/clf-c02/revisao.md](certificacoes/clf-c02/revisao.md) |
| `aws-guide/ec2/ssh-connect-linux.md` | [laboratorios/ec2-ssh/README.md](laboratorios/ec2-ssh/README.md) |
| `aws-educate/cloud-101/README.md` | [cursos/aws-educate/cloud-101.md](cursos/aws-educate/cloud-101.md) |
| `aws-educate/cloud-operations/README.md` | [cursos/aws-educate/cloud-operations.md](cursos/aws-educate/cloud-operations.md) |
| `aws-educate/compute/README.md` | [cursos/aws-educate/compute.md](cursos/aws-educate/compute.md) |
| `aws-educate/security/README.md` | [cursos/aws-educate/security.md](cursos/aws-educate/security.md) |
| `aws-educate/storage/README.md` | [cursos/aws-educate/storage.md](cursos/aws-educate/storage.md) |
| `aws-exam/Cloud-Practitioner-CLF-C02/README.md` | [certificacoes/clf-c02/anotacoes.md](certificacoes/clf-c02/anotacoes.md) |
| `aws-exam/Solutions-Architect-SAA-C03/README.md` | [certificacoes/saa-c03/anotacoes.md](certificacoes/saa-c03/anotacoes.md) |
| `aws-exam/Developer-DVA-002/README.md` | [certificacoes/dva-c02/anotacoes.md](certificacoes/dva-c02/anotacoes.md) |
| `aws-services/governance/systems-manager/systems-manager.png` | [assets/aws-services/governance/systems-manager.png](assets/aws-services/governance/systems-manager.png) |
| `aws-services/network/PrivateLink/private-link.png` | [assets/aws-services/network/private-link.png](assets/aws-services/network/private-link.png) |
| `aws-services/network/Route53/route-53.png` | [assets/aws-services/network/route-53.png](assets/aws-services/network/route-53.png) |

## Consolidações e páginas de entrada

- `README.md` original foi dividido em [computação em nuvem](fundamentos/computacao-em-nuvem.md) e [infraestrutura global](fundamentos/infraestrutura-global.md). PAYG, Capex/Opex, exemplos e infraestrutura foram preservados com ressalvas; o exemplo Java vazio foi retirado. O novo README é o mapa de estudo.
- `aws-services/local-zone/README.md` foi incorporado à infraestrutura global. `aws-services/outpost/README.md` só tinha título/imagem: a imagem permanece em assets e a explicação inicial está nos fundamentos; aprofundamento no roadmap.
- IaaS/PaaS/SaaS e modelos de implantação de Cloud 101 e Cloud Practitioner foram consolidados em fundamentos; cursos e certificação mantêm origem e objetivos específicos. A nova nota de responsabilidade compartilhada corrige root/IAM.
- A nota extensa do Skill Builder é a referência de Well-Architected, com princípios, práticas, serviços, comparações, trade-offs, indicadores, exemplos, glossário e mini-quiz. A [entrada do curso](cursos/aws-skill-builder/well-architected-foundations.md) identifica origem, objetivos e estudo sem duplicar o capítulo.
- A tabela S3 repetida em Educate Storage ficou na referência principal de S3, preservando casos de uso, observações de disponibilidade, tamanho faturável, S3 on Outposts, segurança e custo. Tempos, tarifas e métricas antigas foram corrigidos ou identificados como históricos a conferir.
- Catálogos de armazenamento, bancos, analytics e migração preservam comparações úteis, removem links fictícios e diferenciam notas existentes, tópicos planejados e ofertas legadas/restritas. Conferência atual de disponibilidade/ciclo de vida permanece pendente.
- Novos índices de cursos, serviços, categorias e certificações explicam o conteúdo e por onde começar. Todas as pastas de projeto e acervo visual receberam visão geral e retorno.

## Vazios retirados e backlog

Os oito arquivos vazios confirmados foram retirados: `Elasticache.md`, `MemoryDB.md`, `DocumentDB.md`, `Keyspaces.md`, `Neptune.md`, `QLDB.md`, `Timestream.md` e `Redshift.md`, sob os antigos diretórios `aws-services/database/cache`, `nosql` e `sql`.

Os assuntos permanecem no [roadmap](ROADMAP.md#backlog), sem notas artificiais. EKS tinha apenas identificação/imagem externa e foi tratado como planejado; Outposts mantém imagem local e explicação introdutória consolidada. QLDB, RDS on VMware, SMS e itens legados de analytics exigem avaliação de relevância histórica e ciclo de vida; não são apresentados como oferta confirmada para uso novo.

## Triagem de `aws-exam-prep/test.txt`

Antes de remover o TXT, foram normalizados CRLF/CR para LF e comparados os corpos a partir de `## Tipos de Soluções de Armazenamento`: **conteúdo idêntico** à nota Educate Storage, inclusive a tabela HTML e os parágrafos posteriores. O corpo duplicado foi consolidado; nenhuma diferença exclusiva foi encontrada nesse trecho.

O prefixo exclusivo continha índice HTML e descrições introdutórias de Cloud 101 e Storage, aproveitadas no [índice Educate](cursos/aws-educate/README.md). A introdução de Compute era vazia; o novo índice a descreve a partir da nota existente. Havia títulos vazios e um link de Compute apontando para Storage; não foram mantidos como navegação. A remoção ocorreu somente depois da comparação, e o texto base continua recuperável no histórico/bundle.

## Correções de conteúdo e edição

- Cost Explorer: substituída a cópia integral de Security Hub por finalidade, métricas, filtros, tags, previsão, atraso, comparação de ferramentas, acesso, custos, cenário e perguntas, com a imagem correspondente.
- Systems Manager: substituídos texto/índice de ECS por nós, Session Manager, Run Command, Automation, patches, inventário, estado, parâmetros, requisitos, auditoria, custos e diagnóstico.
- Identity Center: acesso da força de trabalho, fonte de identidade, permission sets, atribuições, portal e funções IAM; retirado o foco incorreto em access keys.
- Well-Architected: seis pilares; governança preservada como gestão/controles. Retiradas inconsistências de cinco/sete pilares. CLI usa exemplos ilustrativos de leitura (`list-lenses`, `list-questions` com lente `wellarchitected`, `get-workload`); retirado `export-workload` não confirmado. Nenhum comando AWS foi executado.
- IAM: confiança versus permissões, classificação de políticas, bucket válido, funções/STS, IAM Identity Center, AD Connector e SCPs com suas exceções documentadas.
- VPC: subnets privadas e saída, requisitos combinados de IPv4/SSH, NAT, security groups/NACLs, metadados e limitações Flow Logs; destinos CloudWatch Logs/S3/Data Firehose e CIDR local coerente.
- EC2: Capacity Reservations não confundidas com compromissos de desconto, controle do SO, Auto Scaling configurável e custos persistentes após parada. ECS distingue gestão da frota, Fargate Spot e requisitos; exemplos não são resultados executados.
- S3: prefixos sem regra automática de hot partitions, durabilidade versus disponibilidade, risco de uma AZ, Intelligent-Tiering, modalidades de restauração, limites de Express e significado de SSE-C/KMS.
- Certificações: corrigido o caminho antigo `Developer-DVA-002` para DVA-C02. Os códigos do acervo não são declarados vigentes sem consulta. Trilhas têm revisão ativa, registro de erros sem resultados inventados e perguntas próprias.
- Editorial: retirados fragmentos de conversa, títulos/índices sem conteúdo, imagens sem src, links vazios e HTML malformado; corrigidas imagens IAM/DynamoDB e profundidades relativas.

Não se trata de auditoria técnica integral. Ajustes em outras notas foram pontuais; conteúdo histórico foi identificado como tal quando preços, limites ou ofertas não puderam ser confirmados.

## Validação e preservação

A validação local usa Node.js 24, dependências exatas com lockfile, markdownlint, parser Markdown/HTML e slugs GitHub. Os testes exercitam referências válidas e falhas reais, inclusive a CLI com exit status. O inventário final, testes, check, alcance das páginas, diretórios com README e hashes das **66 imagens** são conferidos antes do commit; evidências consolidadas ficam no plano e na entrega.

As três imagens que acompanhavam serviços foram movidas para assets sem alterar bytes. As outras 63 permaneceram nos caminhos originais. Arquivos de reconstrução, caches, credenciais e bundles ficam fora do commit. `node_modules` é ignorado; não há criação de recursos AWS.

## Limites e pendências reais

Em 2026-10-30, consultas HTTPS a `docs.aws.amazon.com`, `aws.amazon.com` e `d1.awsstatic.com` retornaram **CONNECT HTTP 403 pelo proxy**. A política aplicada é restrita e não inclui esses hosts. Acesso Git de leitura funcionou pelo proxy com a permissão de rede do executor; isso não comprova autorização de push. A configuração do ambiente não foi alterada ou publicada nesta reconstrução.

Permanecem em revisão: fontes oficiais de Cost Explorer/Systems Manager/Well-Architected, revisão técnica nas fontes de IAM/VPC/EC2/S3 e demais notas, códigos/guias atuais de exames, preços, quotas, ofertas e ciclo de vida dos serviços. As referências oficiais são indicações de onde conferir; não são consultas comprovadas nesta sessão.

Datas de estudo e próximas revisões pessoais ficam pendentes. Laboratórios não foram executados. O workflow foi criado, mas execução remota no GitHub não é demonstrada por testes locais. Commit, tentativa de push e bundle final devem ser avaliados pelos resultados reais informados na entrega, sem force push.

[Voltar ao mapa principal](README.md) · [Plano e evidências](PLANO-DE-ORGANIZACAO.md)
