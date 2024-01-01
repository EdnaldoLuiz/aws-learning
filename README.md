# aws-learning

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