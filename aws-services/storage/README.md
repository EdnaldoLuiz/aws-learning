

<h1 align="center"> AWS Storage — Guia Prático </h1>

<div align="center">
  <img width="220" src="./../../assets/aws-services/storage/s3.png" alt="AWS Storage">
</div>

---

## Índice

1. [Visão Geral & Boas Práticas](#visao-geral)
2. [Tabela de Serviços](#tabela-servicos)
3. [Amazon S3 (Objeto)](#s3)
4. [Amazon S3 Glacier (Arquivo/Arquivamento)](#glacier)
5. [Amazon EBS (Bloco)](#ebs)
6. [Amazon EFS (Arquivo NFS gerenciado)](#efs)
7. [Amazon FSx (Arquivo otimizado)](#fsx)
8. [AWS Backup (Backups centralizados)](#backup)
9. [S3 on Outposts (Residência local)](#s3-on-outposts)
10. [EC2 Instance Store (Efêmero)](#instance-store)
11. [Escolha Rápida](#escolha-rapida)

---

## 1) Visão Geral & Boas Práticas <a id="visao-geral"></a>

**Família de storage da AWS**

* **Objeto**: **S3** (dado imutável/endereçável por chave, URL único, metadados ricos).
* **Bloco**: **EBS** (volumes “disco” para EC2; persistente). **Instance Store** (efêmero, muito rápido).
* **Arquivo**: **EFS** (NFS gerenciado, elástico, multi-AZ), **FSx** (Windows/Lustre/ONTAP/OpenZFS).
* **Arquivamento**: **S3 Glacier** (Instant/Flexible/Deep Archive).
* **Backups**: **AWS Backup** (políticas e cofres centralizados).

**Boas práticas essenciais**

* **Classifique** os dados (sensibilidade, retenção, RTO/RPO) e escolha o serviço/classe certo.
* **Criptografe** em **repouso** (SSE-S3/SSE-KMS/EFS/EBS Encryption) e **trânsito** (TLS).
* **Acesso mínimo necessário** (IAM + bucket/file/volume policies, S3 Block Public Access, Access Points, VPC Endpoints).
* **Backups & testes** regulares (restore drills) e **monitoramento/auditoria** (CloudWatch, CloudTrail, S3 Access Logs, AWS Config).

---

## 2) Tabela de Serviços <a id="tabela-servicos"></a>

<table align="center">
    <thead>
        <tr>
            <th>Serviço</th>
            <th width="200px">Nome</th>
            <th>Descrição</th>
        </tr>
    </thead>
    <tbody>
        <tr align="center">
            <td colspan="3"><strong>Armazenamento de Objetos</strong></td>
        </tr>
        <tr align="center">
            <td>
                <img width="150px" src="./../../assets/aws-services/storage/s3.png" alt="Amazon S3">
            </td>
            <td>
                <a href="#s3">Amazon S3</a>
            </td>
            <td>
                <p>Armazenamento de objetos altamente escalável e durável. Ideal para data lakes, sites estáticos, backups, logs e integrações serverless. Várias classes para otimizar custo vs. acesso.</p>
            </td>
        </tr>
        <tr align="center">
            <td colspan="3"><strong>Armazenamento de Bloco</strong></td>
        </tr>
        <tr align="center">
            <td>
                <img width="150px" src="./../../assets/aws-services/storage/ebs.png" alt="Amazon EBS">
            </td>
            <td>
                <a href="#ebs">Amazon EBS</a>
            </td>
            <td>
                <p>Volumes de bloco persistentes para EC2 (gp3/io2/st1/sc1). Suporta snapshots, criptografia e alteração de performance/tamanho sem downtime.</p>
            </td>
        </tr>
        <tr align="center">
            <td colspan="3"><strong>Armazenamento de Arquivo</strong></td>
        </tr>
        <tr align="center">
            <td>
                <img width="150px" src="./../../assets/aws-services/storage/efs.png" alt="Amazon EFS">
            </td>
            <td>
                <a href="#efs">Amazon EFS</a>
            </td>
            <td>
                <p>Sistema de arquivos NFS gerenciado, elástico e regional (multi-AZ). Múltiplos clientes simultâneos, EFS-IA para economia e replicação cross-Region.</p>
            </td>
        </tr>
        <tr align="center">
            <td>
                <img width="150px" src="./../../assets/aws-services/storage/fsx.png" alt="Amazon FSx">
            </td>
            <td>
                <a href="#fsx">Amazon FSx</a>
            </td>
            <td>
                <p>Serviços de arquivo otimizados: FSx for Windows File Server, FSx for Lustre (HPC), FSx for NetApp ONTAP (NFS/SMB, snapshots, flexclone), FSx for OpenZFS.</p>
            </td>
        </tr>
        <tr align="center">
            <td colspan="3"><strong>Serviços de Backup</strong></td>
        </tr>
        <tr align="center">
            <td>
                <img width="150px" src="./../../assets/aws-services/storage/backup.png" alt="AWS Backup">
            </td>
            <td>
                <a href="#backup">AWS Backup</a>
            </td>
            <td>
                <p>Orquestra backups entre serviços (EBS, EFS, RDS, DynamoDB, FSx, etc.), com políticas, cofres, agendamentos, cross-account/Region e Vault Lock (WORM).</p>
            </td>
        </tr>
        <tr align="center">
            <td colspan="3"><strong>Outros</strong></td>
        </tr>
        <tr align="center">
            <td>
                <img width="150px" src="./../../assets/aws-services/storage/glacier.png" alt="Amazon Glacier">
            </td>
            <td>
                <a href="#glacier">Amazon Glacier</a>
            </td>
            <td>
                <p>Família de classes de arquivamento do S3 (Instant, Flexible, Deep Archive) para retenções de longo prazo com custo mínimo.</p>
            </td>
        </tr>
    </tbody>
</table>

---

## 3) Amazon S3 (Objeto) <a id="s3"></a>

**O que é**
Armazenamento de objetos com **URL único por objeto** (chave), **metadados** e durabilidade projetada de **11×9’s**. “Estrutura plana” (prefixos simulam pastas).

**Pontos-chave**

* **Escala por prefixo**: distribua chaves (ex.: `cliente/ano/mes/...`) para evitar *hot partitions*.
* **Segurança**: **S3 Block Public Access**, políticas de bucket/Access Points, **SSE-S3**/**SSE-KMS**, VPC Endpoints.
* **Eventos/integrações**: S3 → **Lambda**, **SQS**, **SNS**, **Athena**, **Glue**, **CloudFront**.
* **Cobrança**: armazenamento; **requests/recuperação**; **transferência** (e **Transfer Acceleration**, se usar); **gerenciamento/analytics**; **replicação**; **S3 Object Lambda**.

**Classes de Armazenamento (atajo)**

* **Standard** (multi-AZ, sem fee de leitura), **Standard-IA** (multi-AZ, 30d, retrieval fee), **One Zone-IA** (1 AZ, 30d),
* **Intelligent-Tiering** (auto-tiering, taxa de monitoração),
* **Glacier Instant Retrieval** (90d, acesso imediato), **Glacier Flexible Retrieval** (minutos–horas), **Glacier Deep Archive** (horas, 180d).
* **Express One Zone** (1 AZ, ultra-baixa latência e RPS muito alto).
* **RRS (Reduced Redundancy Storage)**: **legado/obsoleto** – substituído por **One Zone-IA**.

**S3 on Outposts**: veja [S3 on Outposts](#s3-on-outposts).

---

## 4) Amazon S3 Glacier (Arquivamento) <a id="glacier"></a>

* **Instant Retrieval**: arquivamento com **leitura imediata** (ms).
* **Flexible Retrieval**: opções de recuperação **Expedited/Standard/Bulk** (minutos a horas).
* **Deep Archive**: **menor custo**, recuperação em **horas**, retenção longa (compliance).

> Atenção aos **mínimos de permanência** (90/180 dias) e **retrieval fees**.

---

## 5) Amazon EBS (Bloco) <a id="ebs"></a>

Volumes de bloco **persistentes** para EC2.
**Tipos**:

* **gp3** (geral, custo/GB baixo; IOPS/throughput provisionáveis),
* **io1/io2** (IOPS altos e consistentes),
* **st1** (HDD throughput), **sc1** (HDD cold).

**Recursos**: snapshots (incrementais), criptografia nativa, expansão “a quente”, Multi-Attach (io1/io2), integração com **AWS Backup**.
**Use quando**: precisa de **sistema de arquivos local**, banco relacional/NoSQL em EC2, baixa latência de bloco.

---

## 6) Amazon EFS (Arquivo NFS gerenciado) <a id="efs"></a>

Sistema de arquivos **NFSv4** regional (multi-AZ), **elástico** (cresce/encolhe).
**Performance modes**: *General Purpose* | *Max I/O*.
**Throughput modes**: *Bursting* | *Provisioned*.
**Camadas**: **EFS Standard** e **EFS-IA** (Lifecycle move automático).
**Recursos**: **Replication cross-Region**, Backup via **AWS Backup**.
**Use quando**: múltiplos clientes/serviços acessam os **mesmos arquivos** simultaneamente.

---

## 7) Amazon FSx (Arquivo otimizado) <a id="fsx"></a>

* **FSx for Windows File Server**: SMB/AD, ACLs NTFS, DFS, Shadow Copies – lift-and-shift de workloads Windows.
* **FSx for Lustre**: **HPC/Analytics** de alta performance; pode “linkar” datasets no S3.
* **FSx for NetApp ONTAP**: NFS/SMB/iSCSI, snapshots, clones, tiering para S3 – compatível com ecossistema NetApp.
* **FSx for OpenZFS**: latência baixa, snapshots/clones leves, NFS.

---

## 8) AWS Backup <a id="backup"></a>

Políticas centralizadas, **cofres** (com **Vault Lock/WORM**), agendamentos, tags, **cross-account/Region**, auditoria.
Suporta EBS, EFS, RDS/Aurora, DynamoDB, FSx, EFS, EBS, etc. Facilita conformidade e *restore drills*.

---

## 9) S3 on Outposts <a id="s3-on-outposts"></a>

Entrega **S3** no seu **AWS Outposts on-prem** (classe **OUTPOSTS**).
Ideal para **residência local de dados** e **latência** junto às aplicações on-prem, usando APIs S3 familiares (controle de acesso, tags, relatórios).

---

## 10) EC2 Instance Store (Efêmero) <a id="instance-store"></a>

Armazenamento **temporário** acoplado ao host da instância. **Apaga** ao parar/terminar a EC2.
Use para **cache/scratch/temp** e workloads que reconstroem dados. Para persistência, use **EBS**.

---

## 11) Escolha Rápida <a id="escolha-rapida"></a>

* **Objeto / data lake / site estático / logs?** → **S3**

  * Acesso imprevisível? → **S3 Intelligent-Tiering**
  * Frio mas imediato? → **Standard-IA** / **Glacier Instant Retrieval**
  * Arquivo mesmo (minutos–horas)? → **Glacier Flexible/Deep Archive**
  * Ultra-baixa latência em 1 AZ? → **S3 Express One Zone**
* **Bloco para EC2 / DB em VM?** → **EBS (gp3/io2/…)**
* **Vários clientes lendo/escrevendo os MESMOS arquivos?** → **EFS**
* **Windows SMB / HPC Lustre / NetApp / ZFS?** → **FSx** correspondente
* **Residência local (on-prem Outposts)?** → **S3 on Outposts**
* **Backups centralizados e conformidade (WORM)?** → **AWS Backup**
* **Temp/scratch super-rápido e descartável?** → **Instance Store**

---

se quiser, eu também monto versões separadas (`/storage/s3.md`, `/storage/ebs.md` etc.) e ligo tudo pelo índice — ou adiciono diagramas de Lifecycle do S3.
