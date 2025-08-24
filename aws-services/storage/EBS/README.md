<h1 align=center> Amazon Elastic Block Store (EBS) </h1>

<div align=center>
    <img width=250px src="../../../assets/aws-services/storage/ebs.png">
</div>

---

## O que é?

O **Amazon Elastic Block Store (EBS)** é um serviço de **armazenamento em blocos persistente** para instâncias **Amazon EC2**.
Ele funciona como um **disco virtual** anexado às instâncias, oferecendo alta disponibilidade, baixa latência e diferentes opções de performance e custo.

Volumes EBS são **persistentes**: seus dados permanecem mesmo após parar ou reiniciar a instância.
Eles são altamente integrados com o ecossistema da AWS e podem ser **redimensionados, replicados e encriptados** com facilidade.

---

## Características Principais

* **Persistência** → dados sobrevivem a reboots e stop/start de instâncias EC2.
* **Alto desempenho** → ideal para workloads que exigem baixa latência.
* **Tipos de volumes** → otimizados para diferentes cenários: SSDs (latência/IOPS) e HDDs (throughput e custo).
* **Snapshots** → backup incremental automatizado, integrado ao Amazon S3.
* **Criptografia nativa** → em repouso e em trânsito, integrada ao **KMS**.
* **Alta disponibilidade** → replicação automática dentro da mesma AZ.

---

## Casos de Uso

* **Sistemas de arquivos de EC2** (root volumes, partições de SO).
* **Bancos de dados relacionais e NoSQL** que exigem alta performance de IOPS.
* **Data warehouses e Big Data** quando throughput sequencial é crítico.
* **Workloads de baixa frequência** que priorizam custo.
* **Ambientes críticos de produção** que precisam de consistência e durabilidade.

---

## Tipos de Volumes EBS

Os volumes EBS são divididos em **duas famílias principais**: **SSD** (foco em IOPS) e **HDD** (foco em throughput/custo).

### 📊 Comparativo Rápido

| Tipo                       | Categoria | Performance                   | Durabilidade | Casos de uso                               |
| -------------------------- | --------- | ----------------------------- | ------------ | ------------------------------------------ |
| **gp3** (General Purpose)  | SSD       | Até 16k IOPS / 1.000 MB/s     | 99,8–99,9%   | Padrão recomendado para a maioria dos apps |
| **gp2** (General Purpose)  | SSD       | 3 IOPS/GB (até 16k)           | 99,8–99,9%   | Versão legada, substituída pelo gp3        |
| **io1** (Provisioned IOPS) | SSD       | Até 64k IOPS                  | 99,8–99,9%   | Bancos críticos, SAP HANA, Oracle          |
| **io2** (Provisioned IOPS) | SSD       | Até 256k IOPS (Block Express) | 99,999%      | Missão crítica, cargas altíssimas          |
| **st1** (Throughput HDD)   | HDD       | Até 500 MB/s                  | 99,8–99,9%   | Big Data, ETL, streaming logs              |
| **sc1** (Cold HDD)         | HDD       | Até 250 MB/s                  | 99,8–99,9%   | Dados frios e raramente acessados          |
| **Magnetic (standard)**    | HDD       | Baixa                         | 99,8–99,9%   | Legado, raramente usado                    |

---

### 🔹 SSDs – Baixa latência e alto IOPS

#### **gp3 (General Purpose SSD – recomendado)**

* Melhor custo-benefício (até 20% mais barato que gp2).
* Permite **definir IOPS e throughput independentemente do tamanho**.
* Casos: aplicações web, sistemas operacionais, bancos de dados médios.

#### **gp2 (General Purpose SSD – legado)**

* Performance ligada ao tamanho do volume (**3 IOPS/GB**).
* Pequenos volumes usam burst credits para picos.
* Casos: mesmos do gp3, mas hoje é preferível migrar para gp3.

#### **io1 (Provisioned IOPS SSD)**

* Performance configurável: até **64.000 IOPS**.
* Suporte a **Multi-Attach** (vários EC2s acessando o mesmo volume).
* Casos: bancos transacionais de alta criticidade (Oracle, SQL Server).

#### **io2 (Provisioned IOPS SSD – melhorado)**

* Até **256.000 IOPS** (com Block Express).
* Durabilidade altíssima: **99,999%**.
* Casos: workloads de missão crítica, SAP HANA, bancos corporativos.

---

### 🔹 HDDs – Alto throughput e baixo custo

#### **st1 (Throughput Optimized HDD)**

* Focado em **leitura/gravação sequencial** (não em IOPS).
* Casos: Big Data, ETL, data lakes, log streaming massivo.

#### **sc1 (Cold HDD)**

* Volume **mais barato** do EBS.
* Baixa performance, ideal para **dados raramente acessados**.
* Casos: backups históricos, arquivos frios.

#### **Magnetic (Standard)**

* Modelo legado baseado em discos magnéticos.
* Baixa performance → usado apenas em ambientes antigos.

---

## Pontos Chave

* Sempre prefira **gp3** para workloads gerais.
* Use **io1/io2** apenas quando precisar de **IOPS consistentes e altíssimos**.
* **st1/sc1** só fazem sentido em workloads de throughput ou dados frios.
* O EBS é sempre **regional por AZ** → volumes não são multi-AZ (diferente do S3).
* Para alta disponibilidade, combine **EBS + Snapshots + Multi-AZ (RDS/EC2 strategies)**.