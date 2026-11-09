# Gestão e operações

A nota disponível trata da administração de nós e automações com Systems Manager. Comece pelos pré-requisitos de agente, registro, IAM e conectividade; CloudWatch, CloudTrail e Config têm aprofundamento no roadmap e observações no curso Operations. Estado do material: **em revisao**.

| Material | Como usar |
| --- | --- |
| [Systems Manager](systems-manager.md) | Session Manager, comandos, patches, inventário e configuração |

## Qual serviço responde à pergunta?

| Pergunta operacional | Serviço a investigar primeiro | O que ele oferece |
| --- | --- | --- |
| **Quem alterou uma regra de security group e quando?** | **AWS CloudTrail** | Eventos de API, como `AuthorizeSecurityGroupIngress`, com contexto do principal, horário e operação |
| Como variam CPU, latência e outras métricas? | **Amazon CloudWatch Metrics** | Métricas, dashboards e alarmes; CloudWatch Logs pode receber logs de várias origens |
| Quais conexões IP foram aceitas ou rejeitadas em interfaces da VPC? | **VPC Flow Logs** | Metadados de tráfego de rede; não atribui por si só uma alteração de configuração a um IAM principal |
| Existem vulnerabilidades ou exposições em workloads compatíveis? | **Amazon Inspector** | Descoberta de vulnerabilidades e achados de segurança |

Uma mudança de security group é tipicamente um **management event** do CloudTrail. Para auditoria contínua, planeje trilhas/event data stores, armazenamento, retenção e controles de acesso; não presuma que observabilidade substitui auditoria. Esses serviços podem se complementar.

- [AWS CloudTrail — conceitos e eventos](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html)
- [VPC Flow Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html)
- [Amazon Inspector](https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html)

[Voltar ao índice superior](../README.md)
