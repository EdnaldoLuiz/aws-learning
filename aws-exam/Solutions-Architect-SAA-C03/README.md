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
4. [Estratégias de Estudo e Preparação para o SAA-C03](#4-estratégias-de-estudo-e-preparação-para-o-saa-c03)  

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

## 4. Estratégias de Estudo e Preparação para o SAA-C03

### 4.1 Entenda o Formato do Exame
- **Número de questões**: 65 perguntas de múltipla escolha ou múltipla resposta.  
- **Tempo**: 130 minutos.  
- **Pontuação mínima para aprovação**: ~720/1000.  
- **Formato**: Cenários reais que exigem análise de requisitos e escolha da arquitetura mais adequada.  
- **Idioma**: Disponível em português e inglês (vale treinar os termos técnicos em inglês).

---

### 4.2 Roteiro de Estudo Sugerido
1. **Fundamentos de Arquitetura** – Estude os pilares do *AWS Well-Architected Framework* (Operacional, Segurança, Confiabilidade, Desempenho e Otimização de Custos).  
2. **Serviços Críticos** – Domine os tópicos do item 3, especialmente EC2, S3, RDS, VPC, CloudFront e Route 53.  
3. **Design para Alta Disponibilidade** – Pratique arquiteturas multi-AZ, multi-região, failover e escalabilidade automática.  
4. **Segurança e Identidade** – Entenda IAM, Security Groups, NACLs, KMS e práticas de criptografia ponta a ponta.  
5. **Networking** – Treine cenários com VPC, subnets, NAT, endpoints e balanceadores.  
6. **Otimização de Custos** – Saiba escolher instâncias, classes de armazenamento e estratégias de *lifecycle* no S3.  
7. **Hands-on** – Use o **AWS Free Tier** para criar ambientes completos, simulando cenários de prova.  
8. **Simulados** – Resolva *practice exams* e analise o *feedback* para reforçar pontos fracos.

---

### 4.3 Dicas de Ouro
- **Leia o enunciado até o fim** — a AWS gosta de inserir pegadinhas com requisitos implícitos.  
- **Priorize soluções gerenciadas** — na maioria dos cenários, a opção mais escalável e resiliente é a correta.  
- **Cuidado com custos** — se o enunciado citar “otimizar custos”, avalie *Reserved Instances*, *Spot Instances* e S3 IA/Glacier.  
- **Pense em segurança por padrão** — se o requisito envolver dados sensíveis, aplique criptografia e restrinja acessos.  
- **Decore limites importantes** — por exemplo, tempo de execução do Lambda, limites de VPC e instâncias suportadas por tipo.  
