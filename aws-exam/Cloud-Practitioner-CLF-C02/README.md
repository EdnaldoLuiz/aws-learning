<h1 align=center> Cloud Practitioner (CLF-C02) </h1>

<div align=center>
    <img width=250px src=https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png>
</div>

---

## Índice

- [Vantagens de utilizar Cloud](#vantages-de-utilizar-cloud)
- [Tipos de Cloud](#tipos-de-cloud)
- [Tipos de Implementação](#tipos-de-implementação)

## Vantagens de utilizar Cloud

- Custo reduzido
- Escala global
- Performance
- Velocidade
- Produtividade
- Segurança
- Flexibilidade

## Tipos de Cloud:

<div align=center>
    <img width=600px src=https://assets.website-files.com/5fbc3fcb12d95f9606608540/60c92b30317ea256824b1069_YIspGbK1cHR7KdOXq0nLrWauTIKIlCg4KtzAOS19uvzeIzHTUT6n2lR1QwwlMOnIKZjuDE9LXmr358V_pfTRkHgKDyf52CpRiEzkCmmmkQmcfK26tZK5rzg_in9EnMfLUlNcNR_k.png>
</div>

Há três tipos principais de opções de cloud computing como serviço, e cada um deles se encarrega de uma parte do gerenciamento para você: 
- infraestrutura como serviço **(IaaS)**
- plataforma como serviço **(PaaS)**
- software como serviço **(SaaS)**

### SaaS (Software como Serviço): 

Este modelo fornece aplicações de software pela internet em um modelo de assinatura. Exemplos incluem serviços de email como o Gmail, ou pacotes de software de produtividade como o Microsoft Office 365. Os usuários não precisam gerenciar, instalar ou atualizar o software; os provedores de SaaS gerenciam isso.

> Obs: Geralmente utilizada por usuários finais, já está pronto para o consumo.

- **Exemplos:**
    - **Google Apps:** Inclui Gmail, Google Docs, Google Sheets, entre outros
    - **Microsoft Office 365:** Oferece versões online dos softwares do Office, como Word, Excel e PowerPoint
    - **Salesforce:** Uma plataforma de gerenciamento de relacionamento com o cliente (CRM)

### PaaS (Plataforma como Serviço): 

Este serviço fornece uma plataforma que permite aos clientes desenvolver, executar e gerenciar aplicações sem a complexidade de construir e manter a infraestrutura normalmente associada ao desenvolvimento e lançamento de um aplicativo. Exemplos incluem Heroku, Google App Engine ou Microsoft Azure. É útil para desenvolvedores, pois permite que eles se concentrem em escrever o código da aplicação.

> Obs: Geralmente utilizada por desenvolvedores, é necessario construir.

- **Exemplos:**
    - **Heroku:** Uma plataforma em nuvem que permite que os desenvolvedores construam, executem e operem aplicativos inteiramente na nuvem.
    - **Google App Engine:** Uma plataforma para desenvolver e hospedar aplicativos web no data center do Google.
    - **Microsoft Azure:** Oferece uma variedade de serviços, incluindo aqueles para computação, análise, armazenamento e rede.

### IaaS (Infraestrutura como Serviço): 

Este serviço fornece a infraestrutura, como máquinas virtuais e outros recursos, como biblioteca de imagens de disco de máquina virtual, armazenamento baseado em blocos e arquivos, firewalls, balanceadores de carga, endereços IP, redes locais virtuais, etc. Exemplos incluem Amazon Web Services (AWS), Microsoft Azure, Google Compute Engine. Isso é útil para administradores de sistemas, pois oferece controle total sobre a infraestrutura, eliminando a necessidade de manter ou gerenciar fisicamente os servidores.

> Obs: Geralmente utilizada por arquitetos para migração e elaboração de infraestrutura.


- **Exemplos:**
    - **Amazon Web Services (AWS):** Oferece serviços de computação, armazenamento, rede e banco de dados, entre outros.
    - **Google Compute Engine (GCE):** Oferece máquinas virtuais seguras e personalizáveis com desempenho consistente.
    - **DigitalOcean:** Oferece servidores virtuais (Droplets), armazenamento em bloco e em objeto, e recursos de rede como balanceadores de carga.

---

## Tipos de Implementação

<div align=center>
    <img width=600px src=https://simplificandoredes.com/wp-content/uploads/2023/01/principais-tipos-de-cloud-1.png>
</div>

Existem três tipos principais de modelos de implantação de nuvem, cada um deles atendendo a diferentes necessidades de negócios:

- Nuvem privada
- Nuvem híbrida
- Nuvem pública

### Nuvem Privada:

A nuvem privada consiste em recursos de computação usados exclusivamente por uma única empresa ou organização. A nuvem privada pode ser fisicamente localizada no data center on-site da própria organização, ou pode ser hospedada por um provedor de serviços terceirizado. Mas em um modelo de nuvem privada, os serviços e a infraestrutura são sempre mantidos em uma rede privada e o hardware e o software são dedicados exclusivamente à sua organização.

> Obs: Geralmente utilizada por grandes empresas que precisam de controle total sobre seus dados e aplicações.

- **Exemplos:**
    - **VMware Cloud on AWS:** Oferece uma nuvem privada integrada que pode ser usada para migrar aplicativos entre ambientes de nuvem pública e privada.
    - **OpenStack:** Uma opção de código aberto para construir nuvens privadas.
    - **IBM Cloud Private:** Oferece uma plataforma de nuvem privada para desenvolver e gerenciar aplicativos on-premises.

### Nuvem Híbrida:

A nuvem híbrida é uma solução que combina uma nuvem privada com uma ou mais nuvens públicas, com tecnologia proprietária permitindo que dados e aplicativos sejam compartilhados entre eles. Ao permitir que os dados e aplicativos se movam entre nuvens privadas e públicas, a nuvem híbrida oferece às empresas maior flexibilidade e mais opções de implantação de dados.

> Obs: Geralmente utilizada por empresas que querem o equilíbrio entre privacidade e poder de computação.

- **Exemplos:**
    - **AWS Outposts:** Oferece uma nuvem híbrida ao estender o ambiente da AWS para a infraestrutura on-premises.
    - **Google Anthos:** Permite executar aplicativos na nuvem privada e gerenciar workloads em outras nuvens de software.
    - **Azure Stack:** Permite que você entregue serviços do Azure a partir do data center da sua organização.

### Nuvem Pública:

Nuvens públicas são de propriedade e operadas por terceiros provedores de serviços de nuvem, que entregam seus recursos de computação, como servidores e armazenamento, pela Internet. Com uma nuvem pública, todo o hardware, software e outras infraestruturas de suporte são de propriedade e gerenciados pelo provedor de nuvem. Você acessa esses serviços e gerencia sua conta usando um navegador da web.

> Obs: Geralmente utilizada por pequenas e médias empresas que não querem investir em infraestrutura própria.

- **Exemplos:**
    - **Amazon Web Services (AWS):** Oferece uma ampla gama de produtos, como servidores, armazenamento, banco de dados, análise e redes.
    - **Microsoft Azure:** Oferece uma ampla gama de soluções adequadas para todos os tipos de indústria.
    - **Google Cloud:** Oferece serviços em todas as áreas, desde computação, armazenamento, até aprendizado de máquina.

---