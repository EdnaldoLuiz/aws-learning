<h1 align=center> Elastic Compute Cloud (EC2) </h1>

<div align=center>
    <img width=250px src=https://www.logicata.com/wp-content/uploads/2020/08/Amazon-EC2@4x-e1593195270371.png>
</div>

---

## Visão Geral

EC2 é um serviço que oferece a possibilidade de alugar computadores virtuais para executar diversas aplicações. A flexibilidade do EC2 permite escalar a capacidade de computação conforme necessário, aumentando ou diminuindo o número de instâncias de servidor.

## Modelos de Aquisição

### On-Demand

O modelo On-Demand oferece um método simples de pagamento, onde você paga pelo tempo de utilização das instâncias, seja por hora ou segundo. Não há necessidade de compromisso inicial, tornando-o flexível e de baixo risco.

- **Recomendado para:**
    - Usuários que priorizam a flexibilidade e custo baixo sem compromisso a longo prazo.
    - Aplicações com cargas de trabalho breves, picos de utilização ou imprevisíveis, que não podem ser interrompidas.
    - Desenvolvimento ou teste de aplicações pela primeira vez no EC2.

---

### Saving Plans

O modelo Saving Plans oferece descontos significativos em relação aos preços On-Demand, mediante um compromisso de uso flexível por 1 ou 3 anos. Existem dois tipos: Compute Saving Plans e EC2 Instance Saving Plans.

- **Recomendado para:**
    - Uso estável e comprometido.
    - Usuários que desejam economizar dinheiro aproveitando as ofertas mais recentes de computação.

---

### Spot Instances

As Spot Instances oferecem capacidade de computação não utilizada a preços substancialmente reduzidos, até 90% mais baratas que o preço On-Demand. No entanto, essas instâncias podem ser interrompidas pela AWS com pouco aviso.

- **Recomendado para:**
    - Cargas de trabalho tolerantes a falhas ou sem estado.
    - Aplicativos que podem operar em hardware heterogêneo.
    - Aplicações com períodos de início e término flexíveis.

--- 

## Capacidade reservada ou dedicada

### On-Demand Capacity Reservations

A Capacidade Reservada permite que você reserve capacidade para suas instâncias Amazon EC2 em uma região específica por um período de um ou três anos, para obter um desconto significativo em comparação com os preços On-Demand. A Capacidade Reservada é recomendada para aplicativos com uso estável e previsível e pode fornecer um desconto de até 75% em comparação com as instâncias On-Demand. Existem três tipos de reservas: Reservas Padrão, Reservas Conversíveis e Reservas de Programação.

- **Recomendado para:**
    - Eventos ou workloads essenciais para os negócios que exigem garantia de capacidade
    - Workloads que precisam atender aos requisitos normativos para alta disponibilidade
    - Recuperação de desastres

---

### Dedicated Hosts

Um Host Dedicado é um servidor físico EC2 com capacidade de instância EC2 que é dedicada ao seu uso. Ao contrário das instâncias On-Demand e Spot, que são virtuais, os Hosts Dedicados permitem que você use sua própria licença de servidor (BYOL - Bring Your Own License). Eles podem ajudar a reduzir custos, permitindo que você use suas licenças existentes de servidor. Além disso, eles são úteis para cargas de trabalho que precisam estar em conformidade com requisitos específicos de conformidade ou regulamentação.

- **Recomendado para:**
    - Usuários que desejam economizar dinheiro em custos de licenciamento
    - Workloads que precisam ser executadas em servidores físicos dedicados
    - Usuários que desejam transferir a manutenção do host para a AWS e, ao mesmo tempo, controlar seus cronogramas de eventos de manutenção para atender às necessidades operacionais de seus negócios

---

### Amazon EC2 Capacity Blocks para ML

Com o Amazon EC2 Capacity Blocks para ML, você pode facilmente reservar instâncias de GPU para uma data futura para executar suas workloads de machine learning (ML). Você paga somente pelo tempo de computação necessário, sem compromisso de longo prazo. O EC2 Capacity Blocks pode ser usado para reservar instâncias P5 do Amazon EC2.

- **Recomendado para:**
    - Eventos ou workloads essenciais para os negócios que exigem garantia de capacidade
    - Workloads que precisam atender aos requisitos normativos para alta disponibilidade
    - Recuperação de desastres

---
