<h1 align=center> Solutions Architect (SAA-C03) </h1>

<div align=center>
    <img width=250px src="./../../assets/aws-exam/saa.png">
</div>

---

## Índice
1. [Introdução](#1-introdução)  
2. [Escopo e Fundamentos da Certificação](#2-escopo-e-fundamentos-da-certificação)  
3. [Principais Serviços AWS para SAA-C03](#3-principais-serviços-aws-para-saa-c03)  
   - [3.1 Computação](#31-computação)  
   - [3.2 Armazenamento](#32-armazenamento)  
   - [3.3 Bancos de Dados](#33-bancos-de-dados)  
   - [3.4 Rede e Entrega de Conteúdo](#34-rede-e-entrega-de-conteúdo)  
   - [3.5 Segurança e Identidade](#35-segurança-e-identidade)  
   - [3.6 Monitoramento e Operações](#36-monitoramento-e-operações)  

---

## 1. Introdução

A certificação **AWS Certified Solutions Architect – Associate (SAA-C03)** é destinada a profissionais que desejam validar suas habilidades em projetar soluções distribuídas e escaláveis na AWS. Ela comprova o conhecimento em **arquitetar sistemas seguros, de alta disponibilidade, tolerantes a falhas e com custo otimizado**, usando os serviços e melhores práticas recomendados pela AWS.  
O foco do exame está em **analisar requisitos**, **selecionar os serviços adequados** e **projetar arquiteturas que atendam às necessidades de negócios**, equilibrando desempenho, segurança e custo.

Essa certificação é ideal para profissionais que atuam como **arquitetos de soluções**, **engenheiros de nuvem** ou desenvolvedores experientes que querem ampliar suas competências em design de arquiteturas AWS.

---

## 2. Escopo e Fundamentos da Certificação

A **AWS Certified Solutions Architect – Associate (SAA-C03)** avalia a capacidade de projetar soluções robustas na AWS, abrangendo:

* **Princípios de Arquitetura AWS**
  - Alta disponibilidade, escalabilidade, elasticidade e tolerância a falhas.
  - Escolha de regiões e zonas de disponibilidade.
  - Arquiteturas multi-tier e desacoplamento de componentes.

* **Serviços Essenciais**
  - **Computação**: EC2, Lambda, ECS/Fargate, Elastic Beanstalk.
  - **Armazenamento**: S3, EBS, EFS, FSx.
  - **Bancos de dados**: RDS, DynamoDB, Aurora, ElastiCache.
  - **Rede**: VPC, subnets, Route 53, ELB, CloudFront.

* **Segurança**
  - IAM (usuários, roles, políticas).
  - Criptografia (KMS, ACM).
  - Segurança de rede (Security Groups, NACLs).

* **Otimização de Custos**
  - Escolha adequada de tipos de instância.
  - Armazenamento de baixo custo.
  - Uso eficiente de serviços gerenciados.

* **Monitoramento e Operações**
  - CloudWatch, CloudTrail, AWS Config.
  - Estratégias de backup e recuperação.

---

## 3. Principais Serviços AWS para SAA-C03

A prova do SAA-C03 é bem distribuída entre várias áreas, mas alguns serviços e conceitos aparecem com frequência muito alta e são cruciais para resolver cenários do exame.

---

### 3.1 Computação
- **Amazon EC2** → Tipos de instância, auto scaling, placement groups, spot e reserved instances.  
- **AWS Lambda** → Execução serverless, integrações com eventos, limites e camadas.  
- **Amazon ECS / Fargate** → Containers com e sem gerenciamento de servidores.  
- **AWS Elastic Beanstalk** → Deploy simplificado sem gerenciar infraestrutura.

---

### 3.2 Armazenamento
- **Amazon S3** → Classes de armazenamento, políticas, versionamento, replicação e eventos.  
- **Amazon EBS** → Tipos de volumes, snapshots e performance.  
- **Amazon EFS** → Sistema de arquivos elástico e compartilhado.  
- **Amazon FSx** → Sistemas de arquivos especializados (Windows, Lustre).

---

### 3.3 Bancos de Dados
- **Amazon RDS / Aurora** → Bancos relacionais gerenciados, replicação e failover.  
- **Amazon DynamoDB** → NoSQL gerenciado, índices, throughput e TTL.  
- **Amazon ElastiCache** → Redis e Memcached para cache de baixa latência.

---

### 3.4 Rede e Entrega de Conteúdo
- **Amazon VPC** → Subnets públicas/privadas, peering, endpoints, NAT Gateway.  
- **Elastic Load Balancing (ELB)** → ALB, NLB e GLB.  
- **Amazon Route 53** → DNS, roteamento geográfico e failover.  
- **Amazon CloudFront** → CDN, distribuição global e integração com S3.

---

### 3.5 Segurança e Identidade
- **AWS IAM** → Políticas, roles, grupos e melhores práticas de acesso.  
- **AWS KMS** → Criptografia e gerenciamento de chaves.  
- **AWS ACM** → Certificados SSL/TLS gerenciados.  
- **Security Groups / NACLs** → Controle de tráfego em nível de instância e subnet.

---

### 3.6 Monitoramento e Operações
- **Amazon CloudWatch** → Logs, métricas, alarmes e dashboards.  
- **AWS CloudTrail** → Auditoria de chamadas de API.  
- **AWS Config** → Conformidade e histórico de configurações.  

---
