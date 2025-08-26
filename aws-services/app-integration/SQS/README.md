<h1 align="center"> Amazon Simple Queue Service (SQS) </h1>

<div align="center">
    <img width="250px" src="../../../assets/aws-services/app-integration/sqs.png">
</div>

---

## O que é?

O **Amazon Simple Queue Service (SQS)** é um serviço de **mensageria totalmente gerenciado** que permite desacoplar e escalar aplicações distribuídas.  
Ele fornece **filas de mensagens duráveis e seguras** para comunicação assíncrona entre componentes, garantindo que nenhuma mensagem seja perdida.

---

## Características Principais

* **Gerenciado e escalável** → suporta milhões de mensagens por segundo.
* **Desacoplamento** → remove dependências rígidas entre microserviços.
* **Durabilidade** → mensagens replicadas em múltiplas zonas de disponibilidade.
* **Controle de visibilidade** → evita que várias instâncias processem a mesma mensagem ao mesmo tempo.
* **Dead Letter Queues (DLQ)** → armazena mensagens que falharam repetidamente.
* **Pay-per-use** → paga apenas por requisições e transferência.

---

## Tipos de Filas

### 🔄 **Standard Queue**
- **Entrega pelo menos uma vez (at-least-once)**  
- Pode haver mensagens duplicadas  
- Ordem **não garantida** (best-effort ordering)  
- **Maior throughput (ilimitado)**  
- Ideal para workloads que toleram duplicação ou ordem não estrita  

### 📑 **FIFO Queue**
- **Entrega exatamente uma vez (exactly-once processing)**  
- Ordem **garantida** por `MessageGroupId`  
- Deduplicação por conteúdo ou `MessageDeduplicationId`  
- Throughput **300 msg/s** (ou **3.000 msg/s** com batching e *high throughput mode*)  
- Ideal para workloads que exigem **consistência e unicidade** (financeiro, formulários, transações)  

---

## Casos de Uso

* **Processamento assíncrono** → formulários, pedidos de e-commerce, uploads.
* **Buffer de workloads** → desacoplar front-end de back-end.
* **Escalabilidade elástica** → múltiplos consumidores processando em paralelo.
* **Garantia de ordem** → aplicações financeiras, logs sequenciais (com FIFO).
* **Retentativa confiável** → falhas isoladas com DLQ.

---

## Integrações Importantes

* **Produtores**: aplicações web, APIs (API Gateway), microserviços, Lambda.
* **Consumidores**: EC2 workers, Lambda, ECS services.
* **Outros serviços AWS**:
  - **SNS → SQS** (fan-out para múltiplas filas)
  - **EventBridge → SQS** (roteamento de eventos)
  - **Step Functions → SQS** (integração em workflows)
  - **CloudWatch** para monitoramento de filas.

---

## Padrões de Mensageria Suportados

| Tipo de Fila | Entrega | Ordem | Throughput | Casos de Uso |
|--------------|---------|-------|------------|--------------|
| **Standard** | Pelo menos uma vez | Melhor esforço | Ilimitado | Log de eventos, tarefas paralelas, ETL |
| **FIFO**     | Exatamente uma vez | Garantida       | 300 msg/s (3k c/ batching) | Transações financeiras, processamento de formulários |

---

## Pontos Chave

* **Idempotência é essencial**: mesmo em FIFO, o consumidor deve ser capaz de lidar com reentregas ocasionais (boas práticas).
* **MessageGroupId**: define partições de ordem em filas FIFO (ordem dentro do grupo, paralelismo entre grupos).
* **Visibility Timeout**: ajuste com base no tempo médio de processamento do worker.
* **DLQ**: sempre configure para mensagens problemáticas.
* **Custo-benefício**: Standard é mais barato em alta escala; FIFO deve ser usado quando ordem/exactly-once são obrigatórios.