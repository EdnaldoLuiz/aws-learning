# Arquivos compartilhados na AWS — EFS e FSx

Estado: **em revisao**. Nota conceitual consolidada a partir da Operação SAA, Semana 1, Dia 1 (novembro de 2026). Exemplos são ilustrativos; não houve implantação ou teste de falha nesta sessão.

## Comece pelo requisito, não pelo nome

| Requisito | Serviço a considerar | Razão |
| --- | --- | --- |
| Linux, POSIX, NFS e acesso compartilhado entre EC2/ECS | **Amazon EFS** | Sistema de arquivos NFS gerenciado e elástico |
| Windows, SMB, NTFS, ACLs e Microsoft Active Directory | **Amazon FSx for Windows File Server** | Compatibilidade nativa com o ecossistema Windows |
| Clientes Linux e Windows, NFS e SMB, protocolos empresariais | **Amazon FSx for NetApp ONTAP** | Família FSx com protocolos múltiplos |
| HPC, analytics e grandes conjuntos de dados | **Amazon FSx for Lustre** | Sistema de arquivos de alta performance |
| Workloads NFS que dependem de recursos do OpenZFS | **Amazon FSx for OpenZFS** | Semântica e recursos específicos de ZFS |
| Imagens, PDFs e outros objetos acessados por API | [**Amazon S3**](s3.md) | Armazenamento de objetos, não um compartilhamento SMB/NFS nativo |
| Disco persistente conectado a EC2 | [**Amazon EBS**](ebs.md) | Armazenamento de blocos; volume vinculado a uma AZ |

**FSx é uma família de serviços**, não apenas a versão Windows do EFS. Compare protocolos, compatibilidade, latência, operações e modalidade de disponibilidade da *engine* escolhida.

## EFS: Regional versus One Zone

- **Regional:** armazenamento de dados redundante em múltiplas AZs da mesma Região. É o modo adequado quando a aplicação exige resiliência à perda de uma AZ; os clientes utilizam *mount targets* e NFS para acessar os arquivos.
- **One Zone:** dados armazenados em uma única AZ; só permite um *mount target* na AZ do sistema de arquivos. É necessário aceitar o risco de indisponibilidade/perda associado àquela zona.
- Para aplicações em várias AZs, planeje *mount targets* em cada AZ de uso e configure subnets, resolução de nomes, regras de rede (NFS/TCP 2049) e permissões. Redundância de armazenamento não substitui redundância das instâncias consumidoras.
- **Não há promoção de servidor Windows standby** como no FSx for Windows Multi-AZ. A disponibilidade no EFS Regional vem da arquitetura de armazenamento regional distribuído.

**Lembrete de nomes:** o EFS denomina seus modos de armazenamento **Regional** e **One Zone**; não se seleciona uma opção com o nome `EFS Multi-AZ` nesse menu.

## FSx for Windows: Single-AZ versus Multi-AZ

- **Single-AZ:** implantação concentrada em uma AZ, sem o mesmo par de file servers distribuído entre AZs.
- **Multi-AZ:** file server ativo e standby pré-provisionado em AZs distintas, com replicação síncrona e failover gerenciado pela AWS. Durante o failover podem ocorrer pausas de I/O e reconexões SMB; não confundir com zero downtime.
- SMB, permissões Windows (NTFS/ACLs) e integração com Active Directory são requisitos típicos para escolhê-lo.
- É preciso **selecionar o tipo de implantação Multi-AZ** e configurar rede, subnets, acesso e Active Directory. Ser gerenciado não significa que toda opção de alta disponibilidade esteja ativada automaticamente.

**Importante:** ambos os serviços pertencem a Regiões da AWS. O nome **Regional** no EFS descreve a distribuição do armazenamento; **Multi-AZ** no FSx for Windows descreve a implantação redundante com failover. Não são rótulos intercambiáveis e outras modalidades de FSx têm características próprias.

## NFS, SMB, POSIX e acesso concorrente

- **NFS:** protocolo de compartilhamento usado com frequência por Linux/Unix; no EFS, várias instâncias podem montar o mesmo sistema de arquivos e trabalhar com semântica POSIX.
- **SMB:** protocolo comum em compartilhamentos Windows; FSx for Windows oferece permissões NTFS e integração com Active Directory.
- **Concorrência:** um sistema de arquivos compartilhado permite acesso de múltiplos clientes, mas o software precisa coordenar atualizações concorrentes quando necessário.
- **EBS snapshots:** são pontos de recuperação, não um mecanismo para várias EC2 acessarem o mesmo volume através de AZs.

## Relação com Static Stability

O **FSx for Windows Multi-AZ** mantém o standby disponível **antes da falha**. Ele pode ser promovido sem provisionar um novo servidor do zero, embora a troca leve tempo.

O **EFS Regional** já distribui o armazenamento por AZs; uma aplicação executada em AZs sobreviventes pode continuar montando o sistema de arquivos se o acesso de rede estiver saudável. Os dois são exemplos distintos de resiliência, não arquiteturas idênticas. Veja [estabilidade estática](../../fundamentos/well-architected.md).

## Verifique antes de escolher

1. Protocolo: NFS, SMB, acesso por API ou blocos?
2. Sistema operacional, autenticação, permissões e semântica de arquivos?
3. Clientes concorrentes, perfil de IOPS/throughput e latência?
4. Recuperação exigida: tolerar falha de instância, de AZ ou de Região?
5. Montagem, segurança de rede, backup, custo e teste de recuperação?

## Fontes oficiais

- [Amazon EFS — conceito e recursos](https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html)
- [Amazon EFS — mount targets e AZs](https://docs.aws.amazon.com/efs/latest/ug/accessing-fs.html)
- [Amazon FSx for Windows — Single-AZ e Multi-AZ](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html)
- [Família Amazon FSx](https://aws.amazon.com/fsx/)

[Voltar a armazenamento](README.md) · [Operação SAA](../../certificacoes/saa-c03/operacao-saa.md)
