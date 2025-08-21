<h1 align=center> Amazon DynamoDB </h1>

<div align=center>
    <img width=250px src="../../../assets/aws-services/database/dynamodb.png" alt="Amazon DynamoDB">
</div>

---

## O que é?

O **Amazon DynamoDB** é um **banco NoSQL totalmente gerenciado** (chave-valor e documento) projetado para **latência de milissegundos em escala**, com **alta disponibilidade** e **segurança** nativas.
Por ser serverless, elimina tarefas de operação (provisionamento, patching, replicação, clusterização) e escala automaticamente de poucas **RPS** a **milhões de requisições por segundo**.

---

## Casos de uso comuns

* **Carrinho de compras / sessões** (acessos intensos com baixa latência).
* **Leaderboards e jogos online** (buscar Top-N e atualizar pontuações).
* **Catálogos / perfis / metadata** (acessos por chave e consultas por atributos).
* **IoT / eventos** (ingestão massiva e leitura recente).
* **Recomendações e analytics near-real-time** (com Kinesis, EMR, S3).

---

## Conceitos essenciais

* **Tabela → Itens → Atributos**: unidade lógica de dados.
* **Chave primária**

  * **Simples**: `partition key` (hash).
  * **Composta**: `partition key` + `sort key` (ordena e permite range queries).
* **Particionamento**: valores da *partition key* distribuem a carga. Evite “hot keys”.
* **Índices**

  * **LSI (Local Secondary Index)**: mesmo `partition key`, outra `sort key`.
  * **GSI (Global Secondary Index)**: outras chaves (nova `partition/sort key`), para novos padrões de acesso.
* **TTL**: expira itens automaticamente (limpeza de dados efêmeros).

---

## Modos de capacidade & cobrança

DynamoDB cobra por **leituras, escritas, armazenamento** e recursos opcionais. Há **dois modos**:

### 1) **On-Demand (pague por requisição)**

* Sem planejamento de capacidade. Escala instantaneamente picos.
* Ideal para **workloads novas**, **tráfego imprevisível** e para “pagar só o que usar”.
* **Unidades**:

  * **RRU (Read Request Unit)**: leitura eventual de até **4 KB**.

    * **Forte consistência** ≈ **2 RRUs**; **transacional** ≈ **4 RRUs** (mesmo tamanho).
  * **WRU (Write Request Unit)**: escrita de até **1 KB**.

    * **Transacional** ≈ **2 WRUs**.

### 2) **Provisioned (RCU/WCU)**

* Você define **leituras e escritas por segundo** (com **Auto Scaling** para ajustar).
* Indicado para **tráfego previsível** ou **rampas graduais** e **controle fino de custo**.
* **Unidades**:

  * **RCU (Read Capacity Unit)**: **1 leitura/seg** forte de até **4 KB**
    (leitura eventual consome **1/2 RCU**; transacional ≈ **2 RCUs**).
  * **WCU (Write Capacity Unit)**: **1 escrita/seg** de até **1 KB**
    (transacional ≈ **2 WCUs**).

> Regras de tamanho (ambos os modos): leituras contam por **múltiplos de 4 KB**; escritas por **múltiplos de 1 KB**.

---

## Modelos de consistência

* **Eventual** (padrão, menor custo).
* **Forte** (na mesma região, custo/leitura maior).
* **Transações** (ACID em múltiplos itens; custo 2× em unidades).

---

## Backup e Restauração

* **On-demand full backup**: instantâneo, sem impacto no desempenho; retido até exclusão.
* **PITR (Point-in-Time Recovery)**: backups incrementais **contínuos por 35 dias**; restaura qualquer segundo nesse período para **uma nova tabela** (mantendo GSIs/LSIs e criptografia).

---

## DynamoDB Streams (eventos)

Fluxo ordenado de **mudanças na tabela** (inserir/atualizar/deletar), com registros organizados em **shards** (retenção típica de **24h**).
Integra nativamente com **AWS Lambda** (polling automático) para **arquiteturas event-driven**, replicação lógica, auditoria, etc.
Pode capturar **imagens “antes/depois”** dos itens.

---

## Global Tables (multi-Region, multi-active)

Replicação **gerenciada** entre regiões: você escolhe as regiões e o DynamoDB cria/propaga alterações automaticamente.
Benefícios: **baixa latência local**, **resiliência a falha regional** e **sem código de replicação**.

---

## DAX — DynamoDB Accelerator (cache em memória)

**Write-through cache** totalmente gerenciado, com **sub-milissegundo** para leituras **eventualmente consistentes**.

* **Quando usar**: leituras intensas/rápidas, repetidas por chave (ex.: perfis, catálogos, páginas muito acessadas).
* **Arquitetura**: cluster (nó primário + réplicas), com **item cache** (por chave primária) e **query cache** (resultados de Query/Scan).
* **Cobrança**: por **nó-hora** (tipo de instância EC2); **sem custo de transferência** entre **EC2↔DAX na mesma AZ**; cobrança padrão entre AZs.

---

## Segurança

* **Criptografia em repouso** (KMS) e **em trânsito** (TLS).
* **IAM** com políticas granulares por item/atributo; **Condition Keys** (ex.: `dynamodb:LeadingKeys`).
* **VPC endpoints (PrivateLink)** para acesso privado sem Internet.
* **Backup/PITR** e **CloudWatch Alarms** para governança.

---

## Boas práticas de modelagem & performance

* **Modele pelos padrões de acesso** (e não por entidades).
* Escolha **partition keys** com **alta cardinalidade** para distribuir carga.
* Prefira **Query** (chave) a **Scan** (varre a tabela).
* **Evite “hot partitions”**: distribua updates/leituras; use `sort key` e **sharding lógico** quando necessário.
* **Itens pequenos** (custos e throughput melhores).
* Use **GSI/LSI** para consultas alternativas; **TTL** para dados efêmeros.
* **Auto Scaling** no modo Provisioned e **backoff exponencial** em retries.

---

## Exemplos rápidos (dos cenários clássicos)

* **Leaderboard (jogos)**:

  * Tabela por jogo: `PK = GameTitle`, `SK = -TopScore` (valor invertido para ordenar do maior pro menor).
  * GSI por usuário: `PK = UserId` para ver histórico/pontuações do jogador.

* **Carrinho de compras**:

  * `PK = UserId`, `SK = ItemId` (ou `timestamp` para ordem de adição).
  * TTL nos itens “abandonados”; Streams + Lambda para acionar atualizações/estoque.

* **Pipeline de recomendações**:

  * **Kinesis** ingest → pré-processa → grava em **DynamoDB** (estado/feature store) e **S3** (histórico).
  * **EMR**/Spark treina modelos; app lê recomendações da tabela; **Route 53/ELB** na frente das instâncias/app.

---

## Quando escolher cada modo

* **On-Demand** → tráfego imprevisível, picos agressivos (lançamentos/marketing), simplicidade de custo por requisição.
* **Provisioned (com Auto Scaling)** → previsibilidade, orçamento estável e controle fino de RCU/WCU.

---

## Pontos-chave para a prova (e vida real)

* **Leitura 4 KB / Escrita 1 KB** definem as **unidades** (RCU/WCU ou RRU/WRU).
* **Streams + Lambda** para reações a mudanças (ETL, fan-out, auditoria).
* **Global Tables** para **multi-Region ativo-ativo**.
* **DAX** acelera **leituras** (eventual), não melhora escritas/forte consistência.
* **PITR 35 dias** e **backup on-demand** sem impacto.
* **Modelagem por acesso** e **partition key** bem distribuída são críticas para escalar.

---
