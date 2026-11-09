# Operação SAA — acompanhamento de estudo

Registro pessoal de sessões reais e dúvidas técnicas. **Não** é resultado de prova oficial, certificação obtida nem evidência de laboratórios executados. Correções de inglês ficam fora deste repositório.

## Linha de base — diagnóstico inicial

- **Novembro de 2026:** diagnóstico autoral de 10 questões, **9/10**.
- Lacuna identificada: diferenciar **CloudFront, Global Accelerator e Route 53**, especialmente tráfego UDP e IPs estáticos.
- Próxima ação: revisar o requisito decisivo e refazer um cenário sem consultar as notas.

## Semana 1 — Dia 1: fundamentos e decisões arquiteturais

**Sessão concluída em novembro de 2026.** Dez questões autorais discutidas individualmente; **10/10 alternativas corretas**. O resultado indica acerto de alternativas, **não** domínio uniforme de todos os conceitos.

| Questão | Tema | Seleção | Observação técnica |
| --- | --- | --- | --- |
| Q1 | Shared Responsibility: EC2 versus RDS | Correta | Distinguiu SO convidado e SO gerenciado |
| Q2 | Alta disponibilidade: RDS Multi-AZ e failover | Correta | Resposta inicialmente chutada; reforçar justificativa |
| Q3 | Recuperação: backups RDS e PITR | Correta | Resposta inicialmente chutada; explicar RPO/RTO e restauração |
| Q4 | CloudTrail para alterações de security group | Correta | Identificou auditoria de chamadas da API |
| Q5 | EC2 Auto Scaling + ALB | Correta | Relacionou elasticidade, custo e distribuição de tráfego |
| Q6 | Static Stability e capacidade Multi-AZ | Correta | Resposta inicialmente chutada; conceito explicado depois com palavras próprias |
| Q7 | Snapshots EBS e recuperação em outra AZ | Correta | Relacionou backups e tempo de recuperação aceitável |
| Q8 | EFS Regional para arquivos compartilhados | Correta | Confusão parcial entre EFS e família FSx, posteriormente explorada |
| Q9 | FSx for Windows, SMB e AD | Correta | Identificou protocolo e autenticação necessários |
| Q10 | S3 Versioning + Cross-Region Replication | Correta | Entendeu o objetivo; solicitou reforço sobre origem/destino e Regiões |

**Três questões inicialmente chutadas:** Q2, Q3 e Q6. Em Q8, houve equívoco na justificativa apesar da alternativa correta. Em Q10, persistiu dúvida sobre os pré-requisitos e o funcionamento da replicação.

### Pontos esclarecidos durante a sessão

- [**Static Stability**](../../fundamentos/well-architected.md): não significa que cada instância deva suportar tudo; componentes remanescentes podem dividir a carga, ou um standby já preparado pode assumir. A explicação com palavras próprias foi demonstrada depois da Q6.
- [**EFS vs. FSx**](../../servicos/armazenamento/arquivos-compartilhados.md): EFS Regional/One Zone e FSx for Windows Multi-AZ/Single-AZ usam nomes e arquiteturas distintos. FSx também tem opções não Windows.
- [**Acesso público no S3**](../../servicos/armazenamento/s3.md): retirar Block Public Access não cria uma permissão `Allow`; preferir CloudFront com OAC e bucket privado para assets públicos.
- [**S3 CRR**](../../servicos/armazenamento/s3.md): buckets de origem e destino são distintos e ficam em Regiões diferentes; ambos requerem Versioning.

### Revisão ativa recomendada

1. **RDS:** explicar sem consulta Multi-AZ DB instance, read replica, automated backup e PITR; diferenciar recuperação de continuidade operacional.
2. **Armazenamento:** escolher EBS, EFS, FSx ou S3 a partir de requisitos inéditos, explicando protocolos e escopo de AZ/Região.
3. **S3:** descrever versionamento, marcadores de exclusão, SRR/CRR e permissões de replicação em novos cenários.
4. **Static Stability:** comparar com Auto Scaling, High Availability e Fault Tolerance e analisar custo de reserva de capacidade.
5. **Auditoria:** diferenciar CloudTrail, CloudWatch, VPC Flow Logs e Inspector.

**Próxima etapa planejada:** Semana 1, Dia 2 — fundamentos de VPC, subnets, rotas, gateways e controles de rede. Não registrar o Dia 2 como iniciado ou laboratórios como executados.

## Referências internas

- [Fundamentos de arquitetura](../../fundamentos/well-architected.md)
- [Armazenamento](../../servicos/armazenamento/README.md)
- [Bancos de dados](../../servicos/bancos-de-dados/README.md)
- [Revisão por recuperação ativa](revisao.md)
- [Erros e dúvidas](erros.md)
- [Roadmap de estudo](../../ROADMAP.md)

[Voltar à trilha SAA](README.md)
