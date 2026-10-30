# Amazon Elastic Container Service (ECS)

Estado do material: **em revisao**. Origem: anotações anteriores migradas; conferência online das fontes pendente (rede bloqueada).

<div align="center">
    <img width="250px" src="../../assets/aws-services/computing/ecs.png" alt="ECS">
</div>

---

## 1. Introdução

O **Amazon Elastic Container Service (ECS)** é um serviço de **orquestração de containers totalmente gerenciado** que facilita a implementação, gerenciamento e escalabilidade de aplicações em containers na AWS. Utilizando o ECS, você pode abstrair a complexidade de gerenciar a infraestrutura subjacente, permitindo que você se concentre no desenvolvimento e na implantação de suas aplicações. É uma solução ideal para quem utiliza **containers Docker** e deseja executá-los de forma eficiente e escalável na AWS.

---

## 2. Modelos de Implementação

O ECS oferece diferentes modelos de implementação para atender às variadas necessidades de gerenciamento de containers:

### 2.1 Container no EC2

No modelo **Container no EC2**, você executa seus containers em **instâncias do Amazon EC2**. O ECS agenda tarefas; no modo EC2, o cliente gerencia a frota e o SO, podendo configurar Auto Scaling/capacity providers para capacidade.

- **Características:**
  - Controle total sobre as instâncias EC2.
  - Flexibilidade para personalizar a configuração das instâncias.
  - Ideal para cargas de trabalho que exigem acesso ao nível de sistema operacional.

- **Exemplo de Uso:**
  - Hospedagem de aplicações legadas que requerem personalizações específicas no sistema operacional.

### 2.2 Container no Fargate

O modelo **Container no Fargate** elimina a necessidade de gerenciar servidores ou clusters de instâncias EC2. A AWS provisiona e gerencia toda a infraestrutura subjacente, permitindo que você execute containers de forma **serverless**.

- **Características:**
  - **Serverless:** Não há necessidade de provisionar ou gerenciar instâncias EC2.
  - **Escalabilidade:** políticas de Service Auto Scaling podem ajustar tarefas; CPU/memória são configuradas conforme a definição de tarefa.
  - **Cobrança por Uso:** Você paga apenas pelos recursos utilizados pelos containers.

- **Exemplo de Uso:**
  - Implementação de microserviços que escalam automaticamente com a demanda.

> Obs: Veja a [documentação do Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html).

### 2.3 Fargate Spot

**Fargate Spot** é uma opção de capacidade do Fargate para tarefas tolerantes a interrupção. Não significa administrar Spot Instances EC2; são modelos distintos de capacidade.

- **Características:**
  - **Custo Efetivo:** capacidade Fargate Spot pode reduzir custos, com risco de interrupção e elegibilidade a conferir.
  - **Flexibilidade:** Ideal para cargas de trabalho tolerantes a interrupções.
  - **Escalabilidade:** integra estratégias de capacidade e escala do serviço, que precisam ser configuradas.

- **Exemplo de Uso:**
  - Processamento de dados em lote ou tarefas de machine learning que podem ser interrompidas e retomadas sem impacto significativo.

### 2.4 ECS Anywhere

O **ECS Anywhere** permite que você execute e gerencie containers em **infraestrutura própria ou em outras nuvens** (on-premises, edge ou multi-cloud), mantendo a mesma experiência de orquestração do ECS.

- **Características:**
  - **Ambiente Híbrido:** Gerencie containers fora da AWS com o controle do ECS.
  - **Infraestrutura externa:** use máquinas suportadas, mantendo dependências do controle ECS e de suas integrações.
  - **Monitoramento Integrado:** Os agentes do ECS se registram diretamente no cluster ECS, permitindo visibilidade centralizada.
  - **Segurança:** Integração com IAM, CloudWatch e Secrets Manager, mesmo fora da AWS.

- **Exemplo de Uso:**
  1. Empresa com data center local roda serviços legados em bare metal e quer unificar a orquestração com workloads já em ECS.
  2. Sistema industrial em ambiente restrito (ex: fábrica) executa containers localmente, mas com observabilidade via ECS.
  3. Ambiente com aplicações sensíveis à latência (ex: IoT ou edge computing) roda containers no local, mas gerencia tudo pela AWS.

> Obs: É necessário instalar o **ECS Agent** e configurar os requisitos de autenticação IAM para registrar a máquina no cluster ECS.

---

## 3. Recursos do ECS

O Amazon ECS oferece uma série de recursos que facilitam o gerenciamento eficiente de aplicações em containers:

### 3.1 Orquestração

O ECS simplifica a **orquestração** de containers, permitindo que você gerencie grupos de containers de forma organizada e escalável.

- **Gerenciamento de Clusters:** Agrupa instâncias EC2 ou recursos Fargate em clusters para facilitar o gerenciamento.
- **Agendamento de Tarefas:** Define como e onde os containers devem ser executados dentro do cluster.
- **Escalabilidade:** configure políticas para ajustar tarefas e capacidade com base nas métricas.

**Exemplo:**

- Configurar um serviço que executa múltiplas instâncias de uma aplicação web, balanceando a carga entre elas automaticamente.

### 3.2 Segurança

O ECS integra-se com diversos serviços de segurança da AWS para proteger suas aplicações e dados.

- **IAM Roles para Tarefas:** Define permissões específicas para cada tarefa, garantindo o princípio do menor privilégio.
- **Segurança de Rede:** Utiliza **Amazon VPC** para isolar e controlar o tráfego de rede entre containers.
- **Criptografia:** Suporta encriptação de dados em trânsito e em repouso.

**Exemplo:**

- Atribuir uma role IAM específica para uma tarefa que acessa apenas determinados recursos S3, garantindo que não haja acesso não autorizado.

### 3.3 Monitoramento

O ECS integra-se com o **Amazon CloudWatch** para fornecer monitoramento abrangente das suas aplicações.

- **Métricas de Performance:** Monitora métricas como CPU, memória e I/O dos containers.
- **Logs Centralizados:** Utiliza o **Amazon CloudWatch Logs** para coletar e armazenar logs de aplicações.
- **Alarmes e Notificações:** Configura alarmes para eventos críticos, como uso excessivo de recursos ou falhas de containers.

**Exemplo:**

- Configurar um alarme no CloudWatch para notificar quando a utilização de CPU de um serviço ultrapassar 80%, permitindo ações proativas de escalabilidade.

---

## 4. Vantagens do ECS

O Amazon ECS oferece diversas vantagens que o tornam uma escolha poderosa para orquestração de containers na AWS:

- **Simplicidade na Implantação:** Facilita a implementação de aplicações em containers com configurações mínimas.
- **Integração com o Ecossistema AWS:** Conecta-se facilmente com outros serviços da AWS, como IAM, VPC, CloudWatch e mais.
- **Escalabilidade:** configure políticas para a demanda e valide capacidade.
- **Alta Disponibilidade:** configure distribuição de tarefas/capacidade entre AZs e teste falhas; não decorre apenas de criar o cluster.
- **Balanceamento de Carga:** Integra-se com **Elastic Load Balancing** para distribuir tráfego de forma eficiente.
- **Custo Efetivo:** Opções como Fargate e Spot Instances ajudam a otimizar custos de execução.

---

## 5. Casos de Uso

O Amazon ECS é versátil e pode ser aplicado em diversos cenários, atendendo a diferentes necessidades de negócios:

### 5.1 Aplicações Web

Hospedagem de aplicações web escaláveis e resilientes, aproveitando a capacidade de balanceamento de carga e escalabilidade automática do ECS.

- **Exemplo:**
  - Implementação de uma aplicação de e-commerce que ajusta automaticamente a capacidade durante períodos de alta demanda, como promoções e eventos especiais.

### 5.2 Aplicações Mobile

Backend para aplicações mobile, fornecendo APIs escaláveis e de alta performance para suportar milhões de usuários simultâneos.

- **Exemplo:**
  - Serviço de autenticação e gerenciamento de usuários para uma aplicação móvel, garantindo disponibilidade e desempenho consistentes.

### 5.3 Aplicações de Análise de Dados

Processamento e análise de grandes volumes de dados em containers, aproveitando a flexibilidade e a escalabilidade do ECS.

- **Exemplo:**
  - Pipeline de processamento de dados que coleta, processa e armazena informações de logs de diversas fontes em tempo real.

### 5.4 Aplicações de Machine Learning (ML)

Execução de modelos de machine learning em containers, facilitando o treinamento e a inferência escalável.

- **Exemplo:**
  - Serviço de recomendação que utiliza modelos de ML para personalizar sugestões para usuários em tempo real, escalando conforme o número de solicitações.

---

## 6. Componentes Principais do ECS

Para entender melhor como o ECS funciona, é importante conhecer seus componentes principais:

### 6.1 Clusters

Um **cluster** é um conjunto lógico de instâncias EC2 ou recursos Fargate onde seus containers são executados. Ele serve como a unidade básica de gerenciamento no ECS.

- **Tipos de Clusters:**
  - **EC2 Clusters:** Utilizam instâncias EC2 para executar containers.
  - **Fargate Clusters:** Utilizam recursos gerenciados pela AWS para executar containers sem gerenciar servidores.

**Exemplo:**

- Criar um cluster ECS para hospedar todos os serviços de uma aplicação web, agrupando as instâncias EC2 necessárias.

### 6.2 Tarefas e Serviços

- **Tarefas (Tasks):** Uma tarefa é a instância de uma **Definição de Tarefa** em execução. Ela representa um ou mais containers que são executados juntos.

- **Serviços (Services):** Um serviço permite executar e manter um número especificado de tarefas simultaneamente no cluster. Ele também facilita a integração com balanceadores de carga.

**Exemplo:**

- Definir um serviço que executa cinco instâncias de uma aplicação web, garantindo que sempre haja cinco containers ativos.

### 6.3 Definições de Tarefa

Uma **Definição de Tarefa** é um blueprint que descreve os containers que compõem sua aplicação, incluindo configurações como imagem Docker, portas, volumes e variáveis de ambiente.

**Exemplo:**

- Criar uma definição de tarefa para uma aplicação Node.js que especifica a imagem Docker a ser usada, as portas a serem expostas e os volumes de armazenamento necessários.

### 6.4 Containers

Os **containers** são as unidades de execução que empacotam suas aplicações e suas dependências. No ECS, os containers são definidos na **Definição de Tarefa** e executados conforme especificado.

**Exemplo:**

- Executar um container Docker que hospeda uma aplicação Python Flask, garantindo que todas as dependências estão incluídas na imagem.

---

## 7. Integração com Outros Serviços AWS

O ECS integra-se perfeitamente com diversos outros serviços da AWS, ampliando suas funcionalidades e facilitando o gerenciamento completo de suas aplicações:

### 7.1 IAM (Identity and Access Management)

- **IAM Roles para Tarefas:** Define permissões específicas para cada tarefa ou serviço, garantindo que os containers tenham acesso apenas aos recursos necessários.

**Exemplo:**

- Atribuir uma role IAM a uma tarefa que permite apenas leitura em um bucket S3 específico.

### 7.2 CloudWatch

- **Monitoramento de Métricas:** Monitora métricas como utilização de CPU, memória e I/O dos containers.
- **Logs Centralizados:** Armazena logs de aplicações no **CloudWatch Logs** para análise e troubleshooting.

**Exemplo:**

- Configurar alarmes no CloudWatch para notificar a equipe quando a utilização de CPU de um serviço ultrapassar 80%.

### 7.3 VPC (Virtual Private Cloud)

- **Isolamento de Rede:** Utiliza VPC para isolar os recursos de rede, controlando o tráfego de entrada e saída dos containers.
- **Subnets e Segurança:** Configura subnets públicas e privadas, além de grupos de segurança para gerenciar o acesso aos containers.

**Exemplo:**

- Implantar containers em subnets privadas com acesso controlado à internet através de um NAT Gateway.

### 7.4 Elastic Load Balancing (ELB)

- **Balanceamento de Carga:** Integra-se com **Application Load Balancer (ALB)** e **Network Load Balancer (NLB)** para distribuir o tráfego de forma eficiente entre os containers.
- **Alta Disponibilidade:** Garante que o tráfego seja roteado para containers saudáveis, melhorando a disponibilidade da aplicação.

**Exemplo:**

- Configurar um ALB para distribuir tráfego HTTP/HTTPS entre múltiplas instâncias de uma aplicação web executadas em containers ECS.

---

## 8. Boas Práticas

Adotar boas práticas ao utilizar o Amazon ECS pode otimizar o desempenho, aumentar a segurança e reduzir custos:

### 8.1 Monitoramento e Logging

- **Utilize o CloudWatch:** Monitore métricas essenciais e configure alarmes para eventos críticos.
- **Centralize Logs:** Use o CloudWatch Logs para consolidar logs de aplicações e containers, facilitando a análise e resolução de problemas.

**Exemplo:**

- Configurar logs de acesso da aplicação para serem enviados ao CloudWatch Logs e analisar padrões de tráfego.

### 8.2 Segurança

- **Princípio do Menor Privilégio:** Atribua roles IAM que concedem apenas as permissões necessárias para cada tarefa.
- **Encriptação:** Utilize encriptação para dados em trânsito e em repouso.
- **Segurança de Rede:** Configure grupos de segurança e ACLs de rede para controlar o acesso aos containers.

**Exemplo:**

- Restringir o acesso a um serviço de banco de dados apenas para containers específicos, utilizando grupos de segurança.

### 8.3 Escalabilidade

- **Auto Scaling:** Configure políticas de auto scaling para ajustar automaticamente a quantidade de containers com base na demanda.
- **Balanceamento de Carga:** Utilize ELB para distribuir o tráfego de forma equilibrada entre os containers.

**Exemplo:**

- Definir uma política de auto scaling que adiciona mais containers quando a latência das requisições aumenta.

### 8.4 Otimização de Custos

- **Escolha Adequada de Modelos de Implementação:** Utilize Fargate para eliminar custos de gerenciamento de infraestrutura ou Spot Instances para reduzir custos com cargas de trabalho tolerantes a interrupções.
- **Monitoramento de Utilização:** Analise regularmente a utilização de recursos e ajuste as definições de tarefa conforme necessário.

**Exemplo:**

- Migrar tarefas de cargas de trabalho de baixa prioridade para Spot Instances, aproveitando os descontos oferecidos pela AWS.

---

## 9. Exemplos Práticos

Para ilustrar como utilizar o Amazon ECS de forma eficaz, apresentamos alguns exemplos práticos:

### 9.1 Implantação de uma Aplicação Web

**Passo a Passo:**

1. **Criação de uma Definição de Tarefa:**
   - Defina a imagem Docker da aplicação web.
   - Configure as portas a serem expostas.
   - Defina variáveis de ambiente necessárias.

2. **Configuração de um Cluster ECS:**
   - Escolha entre EC2 ou Fargate como modelo de implementação.
   - Adicione instâncias EC2 ou configure recursos Fargate.

3. **Criação de um Serviço ECS:**
   - Defina o número de réplicas.
   - Integre com um Application Load Balancer para distribuir o tráfego.

4. **Monitoramento e Escalabilidade:**
   - Utilize o CloudWatch para monitorar métricas.
   - Configure políticas de auto scaling para ajustar a capacidade conforme a demanda.

**Resultado esperado (não executado):**
Uma aplicação web escalável e resiliente, capaz de lidar com variações de tráfego sem interrupções.

### 9.2 Uso de Fargate para Aplicações Serverless

**Cenário:**
Desenvolver uma aplicação serverless que processa eventos de um serviço de fila, sem gerenciar servidores.

**Passo a Passo:**

1. **Definição de Tarefa para Fargate:**
   - Defina a imagem Docker que processa os eventos.
   - Configure a quantidade de CPU e memória necessárias.

2. **Criação de um Cluster Fargate:**
   - Não há necessidade de gerenciar instâncias EC2.
   - A AWS gerencia automaticamente a infraestrutura.

3. **Configuração de um Serviço ECS:**
   - Defina a quantidade mínima e máxima de containers.
   - Integre com o Amazon SQS para receber eventos.

4. **Implementação de Escalabilidade Automática:**
   - Configure regras de auto scaling baseadas no número de mensagens na fila.

**Resultado esperado (não executado):**
Uma aplicação serverless eficiente, capaz de escalar automaticamente conforme a quantidade de eventos, sem necessidade de gerenciamento de infraestrutura.

---

## 10. Conclusão

O **Amazon Elastic Container Service (ECS)** é uma solução robusta e flexível para orquestração de containers na AWS, oferecendo alta performance, segurança e integração com o vasto ecossistema de serviços da AWS. Dominar suas funcionalidades e adotar as melhores práticas é essencial para **otimizar aplicações**, **proteger dados** e **controlar custos** no ambiente de nuvem. Com uma compreensão clara dos diferentes modelos de implementação, componentes principais e integrações disponíveis, você pode maximizar o valor do ECS para atender às necessidades específicas de seus projetos e negócios.

---

## 11. Links e Referências

Para aprofundar seu conhecimento sobre o **Amazon Elastic Container Service (ECS)**, consulte os seguintes recursos oficiais e complementares:

- [**Documentação Oficial do Amazon ECS**](https://docs.aws.amazon.com/ecs/latest/developerguide/what-is-ecs.html)
- [**Guia de Início Rápido do Amazon ECS**](https://aws.amazon.com/ecs/getting-started/)
- [**Boas Práticas de ECS**](https://docs.aws.amazon.com/ecs/latest/developerguide/best-practices.html)
- [**AWS ECS Blog**](https://aws.amazon.com/blogs/containers/category/compute/amazon-ecs/)
- [**Tutoriais e Workshops do Amazon ECS**](https://aws.amazon.com/training/paths-containers/)
- [**Whitepapers de Segurança da AWS**](https://aws.amazon.com/whitepapers/?awsf.filter-content-type=*all&awsf.filter-security=*all)
  - [**AWS Security Best Practices**](https://d1.awsstatic.com/whitepapers/Security/AWS_Security_Best_Practices.pdf)
- [**AWS re:Invent Sessions sobre ECS**](https://reinvent.awsevents.com/sessions/?search=ecs)
- [**Vídeos Educacionais da AWS sobre ECS**](https://www.youtube.com/results?search_query=aws+ecs)
- [**AWS Well-Architected Framework - Segurança**](https://docs.aws.amazon.com/pt_br/wellarchitected/latest/security-pillar/welcome.html)
- [**AWS ECS FAQs**](https://aws.amazon.com/ecs/faqs/)
- [**Cursos Online sobre Amazon ECS**](https://www.aws.training/Details/Curriculum?id=20685)

---

## Limites da interpretação

A escalabilidade de serviços ECS exige políticas e capacidade adequadas; Fargate não redimensiona automaticamente qualquer aplicação. No modo EC2, a frota e patches do SO continuam sob responsabilidade do cliente. Em ECS Anywhere, confira ECS Agent, SSM Agent, registro, IAM e conectividade suportados.

Task role autoriza o código da aplicação; task execution role autoriza ações do agente/plataforma como buscar imagens e enviar logs em cenários suportados. Separe escopos. Alta disponibilidade exige distribuição de tarefas e capacidade, dados e balanceamento, não só criar um cluster.

Os resultados dos exemplos são objetivos esperados, não testes realizados. Custos incluem EC2 ou CPU/memória Fargate, armazenamento, logs, balanceamento, rede e compromissos; confira preços e quotas atuais.

[Voltar ao índice](README.md)
