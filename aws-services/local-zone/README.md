<h1 align=center> Local Zones </h1>

<div align=center>
    <img width=250px src="./../../assets/aws-services/local-zone/local-zone.png" alt="Local Zone">
</div>

---

## O que é? 

É um tipo de estrutura na AWS, nós temos atualmente a seguinte divisão:

- Regiões
- AZs
- Local Zones

**Local Zones** é uma infraestrutura que está disponível em alguma cidade que está vinculada a uma região na AWS.

Diferente de uma **AZ** ela é uma extensão de uma região, por exemplo: 
- existe uma região Norte da Virginia e existe uma **Zona Local** na cidade de Boston

## Tópicos Principais

### Como Funciona

A AWS mantém os datacenters, infraestrutura física para que os clientes possam executar suas cargas de trabalho, tendo uma comunicação de alta velocidade entre essa **Zona Local** e a **Região** que ela está vinculada.
È um serviço voltado para ações que precisam de baixa latência, como:

- Serviçoes de Inteligência Artificial
- Renderização de Imagens e Videos
- Servidores de Jogos

## Casos de Uso

Imaginne que você estáu em Lima, no Peru, e exista uma Zona Local da AWS, então imagina uma empresa aqui de Lima que usa a AWS e quer servir uma aplicação com uma latência baixa.

- **Exemplo 1:** um jogo com muitos jogadores na cidade e que necessita de uma latência e uma experiência muito boa, rápida, com baixa latência.

- **Exemplo 2:** uma empresa que tem um escritório com diversos funcionários que vão executar alguma aplicação de renderização de código, por exemplo, e precisam de acesso e experiência rápida ao serviço.

Em vez de usar, por exemplo, a região da Virgínia, utiliza-se a Zona Local de Lima no Peru, com uma LATÊNCIA MUITO BAIXA, o que torna a experiência e usabilidade muito melhor.

## Observações

- Cada **Zona Local** é vinculada a uma **Região**

