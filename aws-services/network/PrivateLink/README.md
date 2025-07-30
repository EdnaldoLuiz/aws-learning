<h1 align="center">AWS PrivateLink (VPC Endpoint Interface)</h1>

<div align="center">
    <img width="250px" src="private-link.png" alt="AWS PrivateLink Diagram">
</div>

---

## **Índice**

1. [Introdução](#introdução)
2. [Como Funciona o PrivateLink](#como-funciona-o-privatelink)
3. [Tipos de VPC Endpoints](#tipos-de-vpc-endpoints)
4. [Casos de Uso Reais](#casos-de-uso-reais)
5. [Exemplo Prático com SNS](#exemplo-prático-com-sns)
6. [Vantagens do PrivateLink](#vantagens-do-privatelink)
7. [Boas Práticas](#boas-práticas)
8. [Recursos Adicionais](#recursos-adicionais)

---

## 🧠 **Introdução**

O **AWS PrivateLink** permite que você acesse serviços da AWS e serviços de terceiros **de forma privada**, sem passar pela internet pública.  
Ele cria um **VPC Endpoint Interface**, que é uma **interface de rede (ENI)** dentro da sua VPC, associada a um serviço.

> 📍 Imagine que você quer usar o Amazon SNS, mas está numa subnet privada e **não pode (ou não quer) sair pra internet**. O PrivateLink resolve isso.

---

## ⚙️ **Como Funciona o PrivateLink**

- Você cria um **VPC Endpoint Interface** para um serviço como SNS, SQS, KMS, Secrets Manager etc.
- A AWS **cria uma ENI na sua VPC**, com IP privado, e **liga direto no serviço AWS**.
- O tráfego sai da sua EC2 → vai pra ENI → chega ao serviço **sem sair da VPC** e **sem internet**.

📌 A ENI criada se comporta como qualquer outro recurso da sua VPC — com **Security Groups**, **monitoramento**, **controle total**.

---

## 🔌 **Tipos de VPC Endpoints**

| Tipo               | Descrição                                                             |
|--------------------|----------------------------------------------------------------------|
| **Interface Endpoint** | Usa ENI e conecta a **serviços baseados em PrivateLink** (ex: SNS, SQS, KMS) |
| **Gateway Endpoint**   | Só funciona com **S3 e DynamoDB**, usa a tabela de rotas          |

---

## 🧰 **Casos de Uso Reais**

1. **Subnets privadas acessando SNS/SQS/Secrets Manager sem NAT Gateway**
2. **Ambientes com dados sensíveis (PII, compliance, LGPD, HIPAA)**
3. **Infra segura sem exposure externa (zero trust)**
4. **Conectar-se a serviços de parceiros SaaS que usam PrivateLink**
5. **Acesso entre contas diferentes (Cross-account) com segurança máxima**

---

## 📦 **Exemplo Prático com SNS**

### 🛠️ Cenário:
- Sua aplicação está numa subnet **privada**
- Precisa enviar eventos para o **Amazon SNS**
- Sem NAT Gateway ou internet

### ✅ Solução com PrivateLink:
1. Criar VPC Endpoint Interface para SNS:
```bash
aws ec2 create-vpc-endpoint \
  --vpc-id vpc-abc123 \
  --service-name com.amazonaws.us-east-1.sns \
  --subnet-ids subnet-xyz456 \
  --security-group-ids sg-789xyz \
  --vpc-endpoint-type Interface
