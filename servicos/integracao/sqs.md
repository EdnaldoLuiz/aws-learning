# Amazon Simple Queue Service (SQS)

Estado do material: **em revisao**. Origem: anotações anteriores migradas; conferência online das fontes pendente (rede bloqueada).

<div align="center">
    <img width="250px" src="../../assets/aws-services/app-integration/sqs.png" alt="Material de apoio da nota">
</div>

---

## O que é?

O **Amazon Simple Queue Service (SQS)** é um serviço de **mensageria totalmente gerenciado** que permite desacoplar e escalar aplicações distribuídas.
Ele fornece **filas de mensagens duráveis e seguras** para comunicação assíncrona entre componentes, com durabilidade e mecanismos de entrega sujeitos a retenção, confirmação e configuração do consumidor.

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

* **Entrega pelo menos uma vez (at-least-once)**
* Pode haver mensagens duplicadas
* Ordem **não garantida** (best-effort ordering)
* **Alto throughput**, sujeito às quotas e à carga
* Ideal para workloads que toleram duplicação ou ordem não estrita

### 📑 **FIFO Queue**

* **Deduplicação de envio e ordem por grupo**; efeitos no consumidor exigem idempotência
* Ordem **garantida** por `MessageGroupId`
* Deduplicação por conteúdo ou `MessageDeduplicationId`
* Throughput **300 msg/s** (ou **3.000 msg/s** com batching e *high throughput mode*)
* Ideal para workloads que exigem **consistência e unicidade** (financeiro, formulários, transações)

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
  * **SNS → SQS** (fan-out para múltiplas filas)
  * **EventBridge → SQS** (roteamento de eventos)
  * **Step Functions → SQS** (integração em workflows)
  * **CloudWatch** para monitoramento de filas.

---

## Padrões de Mensageria Suportados

| Tipo de Fila | Entrega | Ordem | Throughput | Casos de Uso |
|--------------|---------|-------|------------|--------------|
| **Standard** | Pelo menos uma vez | Melhor esforço | Conforme quotas | Log de eventos, tarefas paralelas, ETL |
| **FIFO**     | Deduplicação; consumidor idempotente | Garantida       | 300 msg/s (3k c/ batching) | Transações financeiras, processamento de formulários |

---

## Pontos Chave

* **Idempotência é essencial**: mesmo em FIFO, o consumidor deve ser capaz de lidar com reentregas ocasionais (boas práticas).
* **MessageGroupId**: define partições de ordem em filas FIFO (ordem dentro do grupo, paralelismo entre grupos).
* **Visibility Timeout**: ajuste com base no tempo médio de processamento do worker.
* **DLQ**: sempre configure para mensagens problemáticas.
* **Custo-benefício**: Standard é mais barato em alta escala; FIFO deve ser usado quando ordem/exactly-once são obrigatórios.

## Processamento, segurança e custos

Após processar com sucesso, o consumidor exclui a mensagem. Se o visibility timeout expira antes disso, ela pode reaparecer; deduplicação FIFO não oferece transação atômica com o banco de dados do consumidor. Meça duração e use idempotência. DLQ precisa de redrive policy, retenção e rotina de diagnóstico; não basta criá-la.

Os valores 300/3.000 da nota são referências históricas simplificadas; quotas FIFO variam por região, modo, API e batching, e high throughput tem condições próprias. Não use esses números como limite vigente universal.

Use IAM, política da fila e criptografia apropriada; some requisições (inclusive polling), KMS e transferência quando aplicável. Long polling e batching ajudam em cenários adequados.

* [SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)
* [Quotas](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-quotas.html)
* [Filas FIFO](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html)

[Voltar ao índice](README.md)
