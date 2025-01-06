<h1 align="center">Elastic Compute Cloud (EC2)</h1>

<div align="center">
    <img width="250px" src="./../../../assets/aws-services/computing/ec2.png" alt="Amazon EC2">
</div>

---

## 1. Introdução

O **Amazon Elastic Compute Cloud (EC2)** é um serviço fundamental da AWS que oferece **computação escalável na nuvem**. Ele permite que você **alugue servidores virtuais**, conhecidos como **instâncias EC2**, para executar suas aplicações de maneira flexível e eficiente. Com o EC2, você pode **escala a capacidade de computação** conforme necessário, aumentando ou diminuindo o número de instâncias de servidor de acordo com as demandas de sua aplicação.

---

## 2. Índice

1. [Introdução](#1-introdução)
2. [Índice](#2-índice)
3. [Modelos de Aquisição](#3-modelos-de-aquisição)
    - [3.1 On-Demand](#31-on-demand)
    - [3.2 Saving Plans](#32-saving-plans)
    - [3.3 Spot Instances](#33-spot-instances)
4. [Capacidade Reservada ou Dedicada](#4-capacidade-reservada-ou-dedicada)
    - [4.1 On-Demand Capacity Reservations](#41-on-demand-capacity-reservations)
    - [4.2 Dedicated Hosts](#42-dedicated-hosts)
    - [4.3 Amazon EC2 Capacity Blocks para ML](#43-amazon-ec2-capacity-blocks-para-ml)
5. [EC2 Auto Scaling](#5-ec2-auto-scaling)
6. [Características Principais](#6-características-principais)
    - [6.1 Tipos de Instâncias](#61-tipos-de-instâncias)
    - [6.2 Armazenamento](#62-armazenamento)
    - [6.3 Redes](#63-redes)
    - [6.4 Segurança](#64-segurança)
7. [Vantagens do EC2](#7-vantagens-do-ec2)
8. [Casos de Uso](#8-casos-de-uso)
    - [8.1 Aplicações Web](#81-aplicações-web)
    - [8.2 Aplicações Mobile](#82-aplicações-mobile)
    - [8.3 Aplicações de Análise de Dados](#83-aplicações-de-análise-de-dados)
    - [8.4 Aplicações de Machine Learning (ML)](#84-aplicações-de-machine-learning-ml)
9. [Boas Práticas](#9-boas-práticas)
    - [9.1 Monitoramento e Logging](#91-monitoramento-e-logging)
    - [9.2 Segurança](#92-segurança)
    - [9.3 Escalabilidade](#93-escalabilidade)
    - [9.4 Otimização de Custos](#94-otimização-de-custos)
10. [Exemplos Práticos](#10-exemplos-práticos)
    - [10.1 Implantação de uma Aplicação Web](#101-implantação-de-uma-aplicação-web)
    - [10.2 Uso de Spot Instances para Processamento em Lote](#102-uso-de-spot-instances-para-processamento-em-lote)
11. [Conclusão](#11-conclusão)
12. [Pontos Chaves](#12-pontos-chave)
12. [Links e Referências](#12-links-e-referências)

---

## 3. Modelos de Aquisição

O Amazon EC2 oferece diferentes **modelos de aquisição** que permitem otimizar custos e atender a diversas necessidades de negócios. Cada modelo possui características específicas em termos de **flexibilidade**, **custo** e **compromisso**.

### 3.1 On-Demand

O modelo **On-Demand** oferece um método simples de pagamento, onde você paga pelo tempo de utilização das instâncias, seja por hora ou segundo, sem necessidade de compromisso inicial. É flexível e de baixo risco, ideal para aplicações com demandas variáveis.

- **Recomendado para:**
    - Usuários que priorizam a **flexibilidade** e **custo baixo** sem compromisso a longo prazo.
    - Aplicações com **cargas de trabalho breves**, picos de utilização ou imprevisíveis que não podem ser interrompidas.
    - **Desenvolvimento** ou **teste** de aplicações pela primeira vez no EC2.

**Exemplo:**
Implementar uma instância EC2 para testar uma nova aplicação web durante um curto período, sem comprometer-se a longo prazo.

---

### 3.2 Saving Plans

O modelo **Saving Plans** oferece **descontos significativos** em relação aos preços On-Demand, mediante um compromisso de uso flexível por **1 ou 3 anos**. Existem dois tipos principais: **Compute Saving Plans** e **EC2 Instance Saving Plans**.

- **Recomendado para:**
    - Uso **estável** e **comprometido**.
    - Usuários que desejam **economizar dinheiro** aproveitando as ofertas mais recentes de computação.

**Tipos de Saving Plans:**
- **Compute Saving Plans:** Oferecem flexibilidade para mudar entre diferentes tipos de instâncias, famílias de instâncias e regiões.
- **EC2 Instance Saving Plans:** Específicos para uma família de instâncias e região, oferecendo maiores descontos em troca de menor flexibilidade.

**Exemplo:**
Comprometer-se com um Compute Saving Plan por 3 anos para uma aplicação de servidor web que utiliza diferentes tipos de instâncias EC2 ao longo do tempo.

---

### 3.3 Spot Instances

As **Spot Instances** oferecem capacidade de computação não utilizada a preços **substancialmente reduzidos**, até **90% mais baratas** que o preço On-Demand. Contudo, essas instâncias podem ser **interrompidas pela AWS** com pouco aviso, tornando-as ideais para cargas de trabalho **tolerantes a falhas**.

- **Recomendado para:**
    - **Cargas de trabalho tolerantes a falhas** ou **sem estado**.
    - Aplicativos que podem operar em **hardware heterogêneo**.
    - Aplicações com **períodos de início e término flexíveis**.

**Exemplo:**
Executar tarefas de processamento em lote, como renderização de vídeo ou análise de dados, que podem ser interrompidas e retomadas sem impacto significativo.

---

## 4. Capacidade Reservada ou Dedicada

Além dos modelos de aquisição, o EC2 oferece opções para **reservar capacidade** ou **dedicar hosts** para necessidades específicas.

### 4.1 On-Demand Capacity Reservations

A **On-Demand Capacity Reservations** permitem que você **reserve capacidade** para suas instâncias EC2 em uma região específica por um período de **1 ou 3 anos**, obtendo **descontos significativos** em comparação com os preços On-Demand. É ideal para aplicativos com uso **estável** e **previsível** que requerem garantia de capacidade.

- **Recomendado para:**
    - Eventos ou workloads **essenciais** para os negócios que exigem **garantia de capacidade**.
    - Workloads que precisam atender aos requisitos normativos para **alta disponibilidade**.
    - **Recuperação de desastres**.

**Exemplo:**
Reservar capacidade para uma aplicação crítica que deve estar disponível durante eventos de alto tráfego, como lançamentos de produtos.

---

### 4.2 Dedicated Hosts

Um **Dedicated Host** é um servidor físico EC2 com capacidade de instância que é **dedicada ao seu uso**. Diferentemente das instâncias On-Demand e Spot, que são **virtuais**, os Dedicated Hosts permitem que você utilize sua própria licença de servidor (**BYOL - Bring Your Own License**). São úteis para cargas de trabalho que precisam estar em conformidade com requisitos específicos de **conformidade** ou **regulamentação**.

- **Recomendado para:**
    - Usuários que desejam **economizar dinheiro** em custos de licenciamento.
    - Workloads que precisam ser executadas em **servidores físicos dedicados**.
    - Usuários que desejam **controlar** os **cronogramas de eventos de manutenção** para atender às necessidades operacionais de seus negócios.

**Exemplo:**
Executar aplicações legadas que requerem licenças específicas de software ou conformidade com regulamentações que exigem isolamento físico.

---

### 4.3 Amazon EC2 Capacity Blocks para ML

Com o **Amazon EC2 Capacity Blocks para Machine Learning (ML)**, você pode **reservar instâncias de GPU** para uma data futura, facilitando a execução de workloads de machine learning sem a necessidade de compromissos de longo prazo. Este recurso permite que você pague apenas pelo tempo de computação necessário, otimizando custos.

- **Recomendado para:**
    - Workloads de **machine learning** que requerem **instâncias de GPU** específicas.
    - Projetos que precisam de capacidade de computação **temporária** para treinamentos intensivos.
    - Empresas que desejam **escalar** seus recursos de ML conforme a demanda sem comprometer-se a longo prazo.

**Exemplo:**
Reservar instâncias P5 do EC2 para treinar modelos de deep learning durante períodos específicos, como campanhas de pesquisa ou desenvolvimento de novos produtos.

---

## 5. EC2 Auto Scaling

O **EC2 Auto Scaling** é um serviço que permite ajustar automaticamente a quantidade de instâncias EC2 em seu grupo de Auto Scaling com base em políticas definidas ou na demanda de tráfego. Isso garante que você tenha a quantidade correta de instâncias disponíveis para lidar com a carga de trabalho atual, otimizando custos e garantindo alta disponibilidade.

- **Características Principais:**
    - **Escalabilidade Dinâmica:** Adiciona ou remove instâncias conforme necessário.
    - **Políticas de Escalonamento:** Define regras para quando e como escalar suas instâncias.
    - **Monitoramento Integrado:** Utiliza métricas do CloudWatch para tomar decisões de escalonamento.
    - **Balanceamento de Carga:** Integra-se com Elastic Load Balancing para distribuir o tráfego de forma eficiente.

- **Benefícios:**
    - **Otimização de Custos:** Reduz custos ao ajustar automaticamente a capacidade conforme a demanda.
    - **Alta Disponibilidade:** Mantém o número mínimo de instâncias necessárias para garantir a disponibilidade da aplicação.
    - **Resiliência:** Reage rapidamente a mudanças na carga de trabalho, evitando sobrecargas ou subutilização.

### Exemplos

**Exemplo 1:**

Configurar um grupo de Auto Scaling que adiciona mais instâncias EC2 quando a utilização da CPU ultrapassa 70% e remove instâncias quando a utilização cai abaixo de 30%.

**Exemplo 2:**

Imagine um APP para delivery de bebidas.  

Vocês concordam que a carga de acesso a essa aplicação em uma segunda-feira de manhã é totalmente diferente da carga de acesso numa sexta-feira à noite?  

Entendendo isso, concluímos que diferentes aplicações têm diferentes necessidades de suportar requisições ao longo do dia, da semana e afins.  

Seguindo esse exemplo o EC2 Auto Scaling poderia ter políticas que toda sexta-feira antes da hora de pico, aumenta o poder computacional da nossa frota, inserindo novas instâncias EC2, monitore o ambiente e se necessário adicione mais ou remova conforme necessidade.  

Assim nós temos um ambiente elástico que se adapta à necessidade do negócio. Temos resiliência, escalabilidade e custo eficiente.  

---

## 6. Características Principais

O Amazon EC2 oferece uma variedade de **características** que proporcionam flexibilidade, controle e performance para suas aplicações.

### 6.1 Tipos de Instâncias

O EC2 oferece uma ampla gama de **tipos de instâncias**, cada uma otimizada para diferentes casos de uso. Eles são categorizados com base em recursos como **CPU**, **memória**, **armazenamento** e **capacidades de rede**.

- **Categorias Principais:**
    - **General Purpose:** Equilíbrio entre CPU, memória e networking (ex: t3, m5).
    - **Compute Optimized:** Alto desempenho de CPU para aplicações de processamento intensivo (ex: c5).
    - **Memory Optimized:** Grande quantidade de memória para aplicações que exigem alto consumo de RAM (ex: r5).
    - **Storage Optimized:** Alto desempenho de I/O para aplicações que requerem acesso rápido a grandes volumes de dados (ex: i3).
    - **Accelerated Computing:** Instâncias com GPUs para workloads de machine learning, processamento de gráficos e HPC (ex: p3, g4).

**Exemplo:**
Escolher uma instância **m5.large** para hospedar um servidor web que necessita de um equilíbrio entre capacidade de CPU e memória.

---

### 6.2 Armazenamento

O EC2 oferece diversas opções de **armazenamento** para atender às necessidades específicas de suas aplicações.

- **Tipos de Armazenamento:**
    - **Amazon EBS (Elastic Block Store):** Armazenamento em blocos persistente, ideal para sistemas de arquivos, bancos de dados e aplicações que requerem acesso frequente aos dados.
    - **Instância Store:** Armazenamento temporário que está fisicamente ligado à instância EC2. Ideal para dados temporários ou caching.
    - **Amazon S3 (Simple Storage Service):** Armazenamento de objetos para backups, arquivos estáticos e dados de longo prazo.
    - **Amazon FSx:** Serviços de sistema de arquivos gerenciados, como FSx for Windows File Server e FSx for Lustre.

**Exemplo:**
Anexar um volume EBS de 100 GB a uma instância EC2 para armazenar dados de um banco de dados MySQL.

---

### 6.3 Redes

O EC2 integra-se com o **Amazon Virtual Private Cloud (VPC)**, oferecendo controle completo sobre o ambiente de rede.

- **Recursos de Rede:**
    - **Subnets:** Dividem sua VPC em segmentos de rede menores.
    - **Grupos de Segurança:** Regras de firewall para controlar o tráfego de entrada e saída das instâncias.
    - **Network ACLs:** Regras de firewall adicionais para controlar o tráfego em nível de subnet.
    - **Elastic IPs:** Endereços IP estáticos que podem ser associados a instâncias EC2.
    - **VPN e Direct Connect:** Conectividade segura entre sua rede on-premises e a AWS.

**Exemplo:**
Configurar uma instância EC2 em uma subnet privada com um grupo de segurança que permite apenas acesso SSH a partir de um endereço IP específico.

---

### 6.4 Segurança

A segurança no EC2 é gerenciada por meio de várias camadas e serviços integrados da AWS.

- **Recursos de Segurança:**
    - **IAM Roles:** Atribui permissões específicas a instâncias EC2 para acessar outros serviços da AWS sem usar credenciais estáticas.
    - **Chaves SSH:** Acesso seguro às instâncias Linux via autenticação baseada em chave.
    - **Amazon Inspector:** Ferramenta de avaliação de segurança para identificar vulnerabilidades.
    - **Amazon GuardDuty:** Serviço de detecção de ameaças que monitora atividades maliciosas e comportamentos anômalos.
    - **Encriptação:** Suporte para encriptação de dados em repouso e em trânsito.

**Exemplo:**
Atribuir uma role IAM a uma instância EC2 que permite acessar apenas um bucket específico no Amazon S3, garantindo o princípio do menor privilégio.

---

## 7. Vantagens do EC2

O **Amazon EC2** oferece diversas vantagens que o tornam uma escolha poderosa para hospedagem de aplicações na nuvem:

- **Simplicidade na Implantação:** Facilita a criação e gerenciamento de instâncias com poucos cliques ou comandos.
- **Integração com o Ecossistema AWS:** Conecta-se facilmente com outros serviços da AWS, como S3, RDS, VPC, IAM e mais.
- **Escalabilidade Automática:** Ajusta automaticamente a quantidade de instâncias conforme a demanda, garantindo performance consistente.
- **Alta Disponibilidade:** Distribui instâncias em múltiplas zonas de disponibilidade para garantir resiliência e minimizar o tempo de inatividade.
- **Balanceamento de Carga:** Integra-se com **Elastic Load Balancing** para distribuir o tráfego de forma eficiente entre as instâncias.
- **Custo Efetivo:** Opções de aquisição flexíveis, como On-Demand, Saving Plans e Spot Instances, ajudam a otimizar custos de execução.
- **Personalização Completa:** Permite a configuração detalhada das instâncias, incluindo escolha do sistema operacional, software e recursos de hardware.

---

## 8. Casos de Uso

O **Amazon EC2** é altamente versátil e pode ser aplicado em diversos cenários, atendendo a diferentes necessidades de negócios e técnicos:

### 8.1 Aplicações Web

Hospedagem de aplicações web escaláveis e resilientes, aproveitando a capacidade de balanceamento de carga e escalabilidade automática do EC2.

- **Exemplo:**
Implementar uma aplicação de e-commerce que ajusta automaticamente a capacidade durante períodos de alta demanda, como promoções e eventos especiais.

### 8.2 Aplicações Mobile

Backend para aplicações mobile, fornecendo APIs escaláveis e de alta performance para suportar milhões de usuários simultâneos.

- **Exemplo:**
Serviço de autenticação e gerenciamento de usuários para uma aplicação móvel, garantindo disponibilidade e desempenho consistentes.

### 8.3 Aplicações de Análise de Dados

Processamento e análise de grandes volumes de dados em instâncias EC2, aproveitando a flexibilidade e a escalabilidade do serviço.

- **Exemplo:**
Pipeline de processamento de dados que coleta, processa e armazena informações de logs de diversas fontes em tempo real.

### 8.4 Aplicações de Machine Learning (ML)

Execução de modelos de machine learning em instâncias EC2, facilitando o treinamento e a inferência escalável.

- **Exemplo:**
Serviço de recomendação que utiliza modelos de ML para personalizar sugestões para usuários em tempo real, escalando conforme o número de solicitações.

---

## 9. Boas Práticas

Adotar **boas práticas** ao utilizar o Amazon EC2 pode otimizar o desempenho, aumentar a segurança e reduzir custos.

### 9.1 Monitoramento e Logging

- **Utilize o CloudWatch:** Monitore métricas essenciais como utilização de CPU, memória, e I/O das instâncias EC2.
- **Centralize Logs:** Use o **Amazon CloudWatch Logs** para consolidar logs de aplicações e do sistema, facilitando a análise e resolução de problemas.
- **Configuração de Alarmes:** Defina alarmes para eventos críticos, como alta utilização de CPU ou falhas de instância, para agir proativamente.

**Exemplo:**
Configurar logs de acesso da aplicação para serem enviados ao CloudWatch Logs e analisar padrões de tráfego para identificar potenciais ameaças.

---

### 9.2 Segurança

- **Princípio do Menor Privilégio:** Atribua roles IAM que concedem apenas as permissões necessárias para cada instância EC2.
- **Encriptação:** Utilize encriptação para dados em repouso (usando EBS encriptado) e em trânsito (usando TLS/SSL).
- **Segurança de Rede:** Configure grupos de segurança e ACLs de rede para controlar o acesso às instâncias EC2.
- **Atualizações de Sistema:** Mantenha o sistema operacional e os softwares das instâncias atualizados com os últimos patches de segurança.
- **Autenticação Forte:** Utilize chaves SSH seguras para acesso a instâncias Linux e autenticação multifator (MFA) para consoles de gerenciamento.

**Exemplo:**
Restringir o acesso SSH a uma instância EC2 apenas a endereços IP específicos e utilizar chaves SSH robustas para autenticação.

---

### 9.3 Escalabilidade

- **Auto Scaling Groups:** Utilize grupos de Auto Scaling para ajustar automaticamente a quantidade de instâncias EC2 com base na demanda.
- **Balanceamento de Carga:** Integre com **Elastic Load Balancing** para distribuir o tráfego de forma equilibrada entre as instâncias.
- **Dimensionamento Vertical e Horizontal:** Ajuste o tipo de instância (vertical) ou adicione/remova instâncias (horizontal) conforme necessário.

**Exemplo:**
Definir uma política de auto scaling que adiciona mais instâncias quando a latência das requisições aumenta, garantindo uma experiência de usuário consistente.

---

### 9.4 Otimização de Custos

- **Escolha Adequada de Modelos de Aquisição:** Utilize Savings Plans para workloads estáveis, Spot Instances para cargas de trabalho flexíveis e On-Demand para necessidades imprevisíveis.
- **Monitoramento de Utilização:** Analise regularmente a utilização das instâncias e ajuste conforme necessário para evitar desperdício de recursos.
- **Uso de Instâncias Reservadas:** Reserve instâncias para aplicações com uso previsível para obter descontos significativos.
- **Desligamento de Instâncias Não Utilizadas:** Identifique e desligue instâncias EC2 que não estão sendo utilizadas para reduzir custos.

**Exemplo:**
Migrar tarefas de processamento de dados que não são críticas para Spot Instances, aproveitando os descontos oferecidos pela AWS.

---

## 10. Exemplos Práticos

Para ilustrar como utilizar o Amazon EC2 de forma eficaz, apresentamos alguns exemplos práticos:

### 10.1 Implantação de uma Aplicação Web

**Passo a Passo:**

1. **Criação de uma Instância EC2:**
    - Escolha o tipo de instância adequado (ex: t3.medium).
    - Selecione a AMI (Amazon Machine Image) que contém o sistema operacional desejado.
    - Configure as opções de rede, como VPC e subnets.

2. **Configuração de Segurança:**
    - Crie um grupo de segurança que permita tráfego HTTP/HTTPS e SSH apenas a endereços IP específicos.
    - Atribua uma role IAM que permite acesso ao Amazon S3, se necessário.

3. **Instalação de Software:**
    - Acesse a instância via SSH.
    - Instale o servidor web (ex: Apache, Nginx) e outras dependências necessárias.

4. **Desenvolvimento e Deploy da Aplicação:**
    - Faça o upload dos arquivos da aplicação para a instância EC2.
    - Configure o servidor web para servir a aplicação.

5. **Monitoramento e Escalabilidade:**
    - Configure o **Amazon CloudWatch** para monitorar métricas como CPU e utilização de memória.
    - Configure um **Auto Scaling Group** para adicionar/remover instâncias conforme a demanda.

**Resultado:**
Uma aplicação web escalável e resiliente, capaz de lidar com variações de tráfego sem interrupções.

---

### 10.2 Uso de Spot Instances para Processamento em Lote

**Cenário:**
Executar tarefas de processamento em lote que podem ser interrompidas e retomadas sem impacto significativo.

**Passo a Passo:**

1. **Definição das Tarefas de Processamento:**
    - Identifique as tarefas que podem ser executadas de forma independente e tolerantes a interrupções.

2. **Configuração de Spot Instances:**
    - Lance instâncias EC2 utilizando Spot Instances para reduzir custos.
    - Defina um limite de preço para garantir que você não pague mais do que o desejado.

3. **Gerenciamento de Interrupções:**
    - Configure scripts de interrupção para salvar o estado das tarefas quando uma instância Spot for interrompida.
    - Utilize o **AWS Lambda** para reiniciar as tarefas em instâncias novas ou existentes.

4. **Automação com Auto Scaling:**
    - Configure um grupo de Auto Scaling que utiliza Spot Instances para gerenciar automaticamente a capacidade de processamento.
    - Defina políticas de escalonamento baseadas na fila de tarefas ou na utilização de CPU.

5. **Monitoramento e Logging:**
    - Utilize o **Amazon CloudWatch** para monitorar o progresso das tarefas e a utilização das instâncias.
    - Armazene logs de execução para análise e troubleshooting.

**Resultado:**
Um sistema de processamento em lote altamente eficiente e econômico, aproveitando os descontos das Spot Instances e garantindo continuidade das tarefas mesmo em caso de interrupções.

---

## 11. Conclusão

O **Amazon Elastic Compute Cloud (EC2)** é uma solução robusta e flexível para hospedagem de aplicações na nuvem AWS, oferecendo uma ampla gama de opções de computação, armazenamento e rede. Com suas diversas opções de modelos de aquisição, capacidades reservadas e dedicadas, e integração com outros serviços da AWS, o EC2 atende a uma vasta gama de necessidades de negócios e técnicas. Dominar suas funcionalidades e adotar as melhores práticas é essencial para **otimizar aplicações**, **proteger dados** e **controlar custos** no ambiente de nuvem. Com uma compreensão clara dos diferentes tipos de instâncias, modelos de aquisição e ferramentas de gerenciamento, você pode maximizar o valor do EC2 para suas necessidades de computação na nuvem.

---

## 12. Pontos-Chave

- **Flexibilidade e Escalabilidade:**
  - Possibilidade de ajustar o poder computacional com instâncias On-Demand, Reserved ou Spot.
  - Suporte a escalabilidade horizontal e vertical com Auto Scaling.

- **Variedade de Instâncias:**
  - Ampla gama de tipos de instâncias, desde General Purpose até Accelerated Computing para workloads de machine learning e HPC.
  - Instâncias otimizadas para diferentes casos de uso (ex.: t3 para custos baixos, p3 para GPUs avançadas).

- **Segurança e Compliance:**
  - Controle de acesso granular com IAM Roles.
  - Suporte a criptografia em repouso e em trânsito (TLS/SSL).
  - Ferramentas como Amazon Inspector e GuardDuty para análise de segurança.

- **Armazenamento Integrado:**
  - Armazenamento persistente com Amazon EBS.
  - Opções de armazenamento temporário (Instance Store) para uso em dados voláteis.
  - Suporte a sistemas de arquivos gerenciados (Amazon FSx).

- **Curiosidades sobre Spot Instances:**
  - Oferecem economia de até 90% comparado às instâncias On-Demand.
  - Podem ser interrompidas com pouco aviso, ideais para cargas tolerantes a falhas.

- **Certificação AWS (Dicas Importantes):**
  - Conheça as diferenças entre os modelos de aquisição (On-Demand, Saving Plans e Spot Instances).
  - Domine conceitos de Auto Scaling, Elastic Load Balancing e grupos de segurança.
  - Esteja familiarizado com casos de uso de cada tipo de instância EC2.
  - Entenda como configurar uma VPC com subnets públicas e privadas para instâncias EC2.
  - Foque na gestão de custos e nas boas práticas de segurança para instâncias EC2.

- **Casos de Uso Reais:**
  - Aplicações web escaláveis.
  - Backend para aplicativos móveis.
  - Processamento de dados em lote e análise de big data.
  - Treinamento e inferência de modelos de machine learning.

- **Dicas para Uso Diário:**
  - Utilize o **AWS Cost Explorer** para monitorar e otimizar gastos com EC2.
  - Configure alarmes no **Amazon CloudWatch** para monitorar uso e desempenho.
  - Atribua tags a instâncias EC2 para facilitar a gestão e organização.

--- 

## 13. Links e Referências

Para aprofundar seu conhecimento sobre o **Amazon Elastic Compute Cloud (EC2)**, consulte os seguintes recursos oficiais e complementares:

- [**Documentação Oficial do Amazon EC2**](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/Welcome.html)
- [**Guia de Início Rápido do Amazon EC2**](https://aws.amazon.com/pt/ec2/getting-started/)
- [**Boas Práticas de EC2**](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/ec2-best-practices.html)
- [**AWS EC2 Blog**](https://aws.amazon.com/blogs/compute/category/compute/amazon-ec2/)
- [**AWS EC2 FAQs**](https://aws.amazon.com/ec2/faqs/)

---
