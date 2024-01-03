# aws-learning

# Índice

<table align="center">
    <thead>
        <tr>
            <th>Badge</th>
            <th width=200px>Tema</th>
            <th>Descrição</th>
        </tr>
    </thead>
    <tbody>
        <tr align="center">
            <td>
                <img width="150px" src="https://images.credly.com/images/8d67bbf4-128b-4141-b5f1-1bc61bbfbaa6/image.png" alt="cloud 101 badge">
            </td>
            <td>
                <a href="#cloud-101">Cloud 101</a>
            </td>
            <td>
                <p>Neste curso introdutório, os participantes adquirem conhecimentos fundamentais sobre computação em nuvem. Ao final, serão capazes de definir computação em nuvem, comparar modelos e serviços, entender a infraestrutura global da AWS, e praticar o uso de serviços essenciais.</p>
            </td>
        </tr>
        <tr>
            <td>
                <img width="150px" src="https://images.credly.com/size/340x340/images/5bf37709-4b69-4cdc-9edc-af7b3370d427/image.png" alt="cloud 101 badge">
            </td>
             <td>
                <a href="#getting-started-with-storage">Getting Started with Storage</a>
            </td>
            <td>
                <p>Este curso destaca as opções de armazenamento na AWS, com foco no Amazon S3. Os participantes aprendem sobre tipos de armazenamento, características do Amazon S3, configuração de buckets, upload de objetos, segurança, e casos de uso. Ideal para iniciantes, cobre desde conceitos básicos até a criação de um site estático usando o Amazon S3.</p>
            </td>
        </tr>
    </tbody>
</table>

# Cloud 101

<div align=center>
    <img width=300px src="https://images.credly.com/images/8d67bbf4-128b-4141-b5f1-1bc61bbfbaa6/image.png" alt="cloud 101 badge">
</div>

## Por que Computação em Nuvem?

A computação em nuvem oferece escalabilidade, flexibilidade, e acesso fácil a recursos de TI sob demanda, permitindo às organizações economizar custos, melhorar a eficiência operacional e se adaptar rapidamente às mudanças nas necessidades de negócios.

---

## Definição de Computação em Nuvem

A computação em nuvem é um modelo que fornece acesso a recursos de TI, como armazenamento, processamento, redes e software, por meio da internet, permitindo o provisionamento rápido, a elasticidade e o pagamento conforme o uso.

---

## Benefícios da Computação em Nuvem

### Trocar Despesas Iniciais por Despesas Variáveis:

Em vez de investir pesadamente em infraestrutura inicial, a computação em nuvem permite que as organizações paguem apenas pelos recursos que consomem, transformando custos fixos em variáveis, proporcionando maior flexibilidade financeira.

### Parar de Gastar Dinheiro com Manutenção de Datacenters:

Ao migrar para a nuvem, as empresas eliminam a necessidade de manter e atualizar servidores físicos, reduzindo os custos associados à manutenção de datacenters locais, como energia, refrigeração e substituição de hardware.

### Parar de Tentar Adivinhar a Capacidade:

A capacidade dos recursos de nuvem pode ser escalada para cima ou para baixo conforme necessário, permitindo que as organizações evitem prever com precisão os requisitos de infraestrutura, otimizando assim os custos e evitando subutilização ou falta de recursos.

### Obter Grandes Economias de Escala:

Provedores de nuvem oferecem serviços para um grande número de clientes, permitindo que eles atinjam economias de escala. Isso resulta em custos mais baixos por unidade de serviço, beneficiando as organizações que utilizam esses recursos compartilhados.

### Aumentar a Velocidade e Agilidade:

A computação em nuvem permite o provisionamento rápido de recursos, acelerando o tempo de implementação de novos aplicativos e serviços. Isso proporciona maior agilidade às organizações, permitindo adaptação rápida às mudanças no mercado.

### Ter Alcance Global em Minutos:

Com a presença de centros de dados em várias regiões do mundo, a nuvem oferece a capacidade de distribuir aplicativos globalmente de maneira eficiente, permitindo que as organizações alcancem usuários em diferentes partes do mundo em minutos, melhorando a experiência do usuário.

### Computação em Nuvem (Cloud Computing):

- **Definição:** A computação em nuvem refere-se à entrega de serviços de computação, como armazenamento, processamento, redes e software, pela internet (a "nuvem"). Os recursos são fornecidos sob demanda e podem ser acessados remotamente por meio de uma conexão à internet.

- **Características:**
    - **Elasticidade:** Os recursos podem ser escalados para cima ou para baixo conforme a necessidade.
    - **Pagamento por Uso:** Os usuários pagam apenas pelos recursos que consomem.
    - **Acesso Remoto:** Os serviços podem ser acessados de qualquer lugar com uma conexão à internet.
- **Exemplos de provedores de nuvem:** 
    - Amazon Web Services (AWS) 
    - Microsoft Azure 
    - Google Cloud Platform (GCP)

### Computação em Nuvem Híbrida (Hybrid Cloud Computing):

- **Definição:** A computação em nuvem híbrida é uma combinação de ambientes de nuvem pública e privada. Isso permite que os dados e aplicativos sejam compartilhados entre esses ambientes de forma mais flexível.

- **Características:**
    - **Integração:** Permite a integração entre a infraestrutura local (on-premises) e a nuvem pública.
    - **Flexibilidade:** Oferece a capacidade de mover cargas de trabalho entre ambientes de nuvem conforme necessário.
    - **Segurança:** Permite manter dados sensíveis localmente, enquanto utiliza recursos de nuvem para escalabilidade.

- **Exemplos de implementação:** Uma organização pode armazenar dados sensíveis localmente (on-premises) e utilizar recursos de nuvem pública para picos de demanda.

### On-Premises (Local ou In-Loco):

- **Definição:** On-Premises refere-se à infraestrutura de TI que é mantida no local, dentro das instalações físicas da organização.

- **Características:**
    - **Controle Total:** A organização tem controle direto sobre todos os aspectos da infraestrutura.
    - **Segurança Local:** Os dados sensíveis podem ser mantidos localmente para maior controle de segurança.
    Custos Iniciais Elevados: Requer investimento em hardware, software e manutenção.

- **Exemplos de implementação:** 
    - Servidores locais 
    - Data centers privados mantidos pela organização.

---

## Modelos de Serviço em Nuvem

### IaaS (Infraestrutura como Serviço):

- **Definição:** No modelo IaaS, os provedores de nuvem oferecem recursos de infraestrutura virtualizados pela internet. Isso inclui máquinas virtuais, armazenamento e redes.
- **Exemplos:** Amazon EC2, Microsoft Azure Virtual Machines.
- **Uso Comum:** Desenvolvimento e teste de aplicativos, hospedagem de sites, armazenamento de dados.

### PaaS (Plataforma como Serviço):

- **Definição:** O PaaS fornece uma plataforma completa que inclui não apenas a infraestrutura, mas também ferramentas e serviços adicionais para desenvolver, testar e implantar aplicativos.
- **Exemplos:** Heroku, Google App Engine, Microsoft Azure App Service.
- **Uso Comum:** Desenvolvimento de aplicativos, hospedagem de aplicativos web, gerenciamento do ciclo de vida de software.

### SaaS (Software como Serviço):

- **Definição:** O SaaS oferece aplicativos completos como serviços, acessíveis pela internet. Os usuários não precisam se preocupar com a infraestrutura subjacente, pois o software é entregue pronto para uso.
- **Exemplos:** Salesforce, Microsoft 365, Google Workspace.
- **Uso Comum:** E-mail baseado em nuvem, software de produtividade, CRM (Customer Relationship Management).

### Comparação Resumida:

- **IaaS:** Foca na entrega de recursos de infraestrutura virtualizada.
- **PaaS:** Fornece uma plataforma completa para desenvolvimento e implantação de aplicativos.
- **SaaS:** Oferece aplicativos completos como serviços prontos para uso.

# Introdução a AWS

## Serviços da AWS

A AWS oferece uma grande variedade de serviços, aonde podemos destacar alguns deles separados por categorias na imagem abaixo:

<img src="https://sslprod.oss-cn-shanghai.aliyuncs.com/stable/slides/iot_amazon_aws_q9ogod/iot_amazon_aws_q9ogod_1440-02.jpg">

## Infraestrutura Global da AWS

### Regiões:

Definição: Uma região é uma área geográfica específica que contém várias zonas de disponibilidade. Cada região é isolada das outras para garantir a resiliência e a recuperação de desastres.
Características:
Oferece redundância geográfica.
Cada região tem pelo menos duas zonas de disponibilidade.

### Zonas de Disponibilidade:

Definição: Uma zona de disponibilidade (AZ) é um data center ou conjunto de data centers isolados dentro de uma região.
Características:
Projetadas para serem independentes umas das outras em termos de energia, refrigeração e conectividade.
Oferecem redundância e alta disponibilidade.
Localizadas fisicamente distantes umas das outras para mitigar falhas.

### Locais de Borda (Edge Locations):

Definição: Locais de borda são pontos de presença da AWS localizados em áreas metropolitanas ao redor do mundo. Esses locais são usados para entregar conteúdo diretamente aos usuários finais, melhorando a latência e a performance.
Características:
Usados para distribuição de conteúdo através do Amazon CloudFront (serviço de entrega de conteúdo da AWS).
Não são zonas de disponibilidade completas; são mais focadas na entrega rápida de conteúdo.

---

## Planejamento para falhas

O "Planejamento de Falhas" proposto pela AWS (Amazon Web Services) é uma abordagem que incentiva os usuários a projetarem suas aplicações para resistir a falhas em todos os níveis, incluindo armazenamento, computação e banco de dados. O uso de múltiplas Zonas de Disponibilidade (AZs) é fundamental nesse planejamento para garantir alta disponibilidade e tolerância a falhas. O objetivo do Planejamento de Falhas da AWS é criar arquiteturas que possam continuar a operar mesmo em face de falhas em componentes individuais. Ao distribuir recursos em múltiplas Zonas de Disponibilidade, os usuários podem reduzir o impacto de falhas locais e melhorar a resiliência de suas aplicações. Aqui está uma visão geral em cada aspecto:

### Armazenamento:

A AWS oferece serviços de armazenamento altamente duráveis e redundantes, como o Amazon S3 (Simple Storage Service) e o Amazon EBS (Elastic Block Store).
Ao usar o S3, os dados são automaticamente distribuídos em várias instalações e dispositivos de armazenamento em uma região, proporcionando durabilidade e alta disponibilidade.
Para volumes de armazenamento associados a instâncias EC2, o Amazon EBS permite a replicação de volumes em diferentes AZs.

### Computação:

Distribuir instâncias EC2 (servidores virtuais) em múltiplas Zonas de Disponibilidade (AZs) é uma prática recomendada. Isso ajuda a garantir que a falha em uma AZ não afete a disponibilidade da aplicação como um todo.
O uso de Auto Scaling e grupos de Auto Scaling pode ajudar a garantir que o número de instâncias seja ajustado automaticamente com base na demanda, melhorando a resiliência.

### Banco de Dados:

Ao utilizar serviços de banco de dados gerenciados, como o Amazon RDS (Relational Database Service), é possível configurar instâncias de banco de dados em várias Zonas de Disponibilidade.
A replicação de banco de dados entre Zonas de Disponibilidade ajuda a garantir a disponibilidade contínua dos dados em caso de falha em uma Zona.

---

## Responsabilidade

<img src="https://d2908q01vomqb2.cloudfront.net/d435a6cdd786300dff204ee7c2ef942d3e9034e2/2020/08/26/1.jpg" width=100% align=center>

## Modelo de Custo

A AWS (Amazon Web Services) oferece uma variedade de modelos de preços para atender às diferentes necessidades dos usuários. Os três principais modelos de preços são: Pay-as-You-Go, Savings Plans e Reserved Instances. Aqui está uma breve descrição de cada um deles:

### Pay-as-You-Go (Pague Conforme o Uso):

- **Descrição:** Neste modelo, os usuários pagam pelos recursos de computação, armazenamento, e outros serviços da AWS com base no que realmente consomem. Não há compromissos de longo prazo e os custos são calculados por hora ou por segundo, dependendo do serviço.
- **Características:**
    - Ideal para cargas de trabalho com requisitos dinâmicos e que podem variar ao longo do tempo.
    - Flexibilidade para escalar para cima ou para baixo conforme a demanda.
    - Não requer compromissos a longo prazo.

### Savings Plans (Planos de Economia):

- **Descrição:** Os Savings Plans oferecem uma opção de economia significativa em comparação com o Pay-as-You-Go, exigindo um compromisso de uso consistente (medido em $/hora) por um período de 1 ou 3 anos. Os usuários obtêm uma economia significativa em troca do compromisso de uso contínuo.
- **Características:**
    - Flexibilidade para escolher entre Savings Plans para instâncias EC2 ou para uso geral.
    - Adapta-se a cargas de trabalho previsíveis e consistentes.

### Reserved Instances (Instâncias Reservadas):

- **Descrição:** No modelo Reserved Instances, os usuários comprometem-se a usar uma capacidade específica (em termos de instâncias EC2) por um período de 1 ou 3 anos, em troca de um desconto significativo em comparação com o modelo Pay-as-You-Go.
- **Características:**
    - Oferece a maior economia, mas requer um compromisso a longo prazo.
    - Ideal para cargas de trabalho estáveis e previsíveis.
    - Permite escolher entre instâncias padrão, instâncias conversíveis ou instâncias de economia de capacidade.

# Getting Started with Storage

<div align=center>
    <img width=300px src="https://images.credly.com/size/340x340/images/5bf37709-4b69-4cdc-9edc-af7b3370d427/image.png" alt="cloud 101 badge">
</div>
