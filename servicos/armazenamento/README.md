# Armazenamento

Aqui ficam as referências principais de [S3](s3.md) e [EBS](ebs.md), além de comparações com serviços ainda sem capítulo próprio. Comece pelo tipo de acesso (objeto, bloco ou arquivo), depois escolha redundância, latência, retenção e recuperação. Conteúdo em revisão; preços, limites e ofertas precisam de consulta atual.

| Serviço | Modelo e recursos | Quando considerar |
| --- | --- | --- |
| [Amazon S3](s3.md) | Objetos, classes, versionamento, lifecycle, políticas e criptografia | Assets, data lakes, backup e integração com eventos |
| [Amazon EBS](ebs.md) | Bloco persistente zonal, snapshots incrementais, criptografia; gp2/gp3, io1/io2, st1/sc1 conforme requisitos | Disco de EC2 e banco em VM; Multi-Attach só nas condições suportadas |
| Amazon EFS | NFS gerenciado, compartilhamento entre clientes, lifecycle e integração com Backup | Mesmos arquivos acessados por múltiplas instâncias/serviços |
| Amazon FSx | Arquivos especializados por engine | Compatibilidade e requisitos do sistema de arquivos |
| AWS Backup | Políticas, cofres, agendamentos e cópias entre contas/regiões em recursos suportados | Governança centralizada de backups e testes de restauração |
| Classes S3 Glacier | Instant, Flexible e Deep Archive; veja a [comparação principal](s3.md#comparação-das-classes) | Arquivamento conforme espera tolerável e custo total |
| S3 on Outposts | Armazenamento local em Outposts com APIs S3 suportadas | Residência e processamento local |
| EC2 Instance Store | Armazenamento temporário ligado ao host; não persiste em parada/terminação ou falha relevante | Cache/scratch e dados reconstituíveis |

## Arquivos: EFS e FSx

EFS tem opções regionais e de uma AZ; não assuma que todo EFS seja multi-AZ. Modos de performance/throughput incluem combinações e condições a conferir (General Purpose/Max I/O, Elastic, Provisioned, Bursting). Camadas de acesso infrequente/arquivo e replicação têm regras próprias. Use NFS, permissões, criptografia e controle de rede adequados.

- **FSx for Windows File Server:** SMB, integração AD, ACLs NTFS e recursos como Shadow Copies conforme configuração; migração de workloads Windows.
- **FSx for Lustre:** HPC/analytics e integração com datasets em S3.
- **FSx for NetApp ONTAP:** NFS/SMB/iSCSI, snapshots, clones e tiering conforme suporte.
- **FSx for OpenZFS:** NFS, snapshots/clones e baixa latência, conforme implantação.

Escolha a engine por protocolo e compatibilidade, não apenas por preço/GB. Confira versões, regiões e opções de disponibilidade antes do projeto. EFS e FSx estão no [roadmap](../../ROADMAP.md#backlog), sem arquivos vazios.

## Backup e boas práticas

AWS Backup pode centralizar proteção de serviços como EBS, EFS, RDS/Aurora, DynamoDB e FSx nas modalidades suportadas. Vault Lock impõe retenção/WORM com consequências operacionais; confira modos, prazos e capacidade de recuperação antes de aplicar. Uma política de backup sem restore drill não demonstra recuperabilidade.

Classifique sensibilidade, RTO/RPO e retenção; criptografe em repouso e trânsito; use menor privilégio e endpoints quando apropriado. Monitore/audite com CloudWatch, CloudTrail, logs S3 e Config conforme a necessidade. RRS e S3 Object Lambda aparecem em material histórico: confirme elegibilidade/ciclo de vida e alternativas antes de uso novo.

## Fontes

- [Armazenamento AWS](https://aws.amazon.com/products/storage/)
- [EFS](https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html)
- [FSx](https://aws.amazon.com/fsx/)
- [AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html)

[Voltar a serviços](../README.md)
