# Computação em nuvem

Estado do material: **em revisao**. Origem: anotações anteriores e reconstrução editorial.
Revisão técnica nas fontes: pendente; acesso oficial bloqueado em 2026-10-30.

## Entrega sob demanda

Computação em nuvem fornece recursos de TI sob demanda: servidores, armazenamento, redes, bancos de dados e aplicações. O cliente provisiona capacidade por interfaces como console, CLI e SDK, geralmente pela internet ou por conectividade privada. AWS, Microsoft Azure e Google Cloud são exemplos de provedores; cada serviço possui seu modelo de responsabilidade.

Elasticidade é ajustar capacidade à demanda; escalabilidade é a capacidade de crescer. Provisionar rapidamente permite experimentar sem comprar toda a infraestrutura antes de conhecer a demanda. Automatizar esse ajuste exige configuração da aplicação e dos serviços.

## Pagamento conforme uso e benefícios

Pay as you go troca parte das despesas iniciais por consumo medido (tempo, GB, requisições e transferência, conforme o serviço). Uma startup pode testar uma aplicação por um período curto; uma loja pode aumentar capacidade na Black Friday; um processamento em lote pode liberar computação ao terminar.

Os seis benefícios destacados no Cloud 101 são trocar investimento antecipado por despesa variável, aproveitar economias de escala, reduzir a necessidade de adivinhar capacidade, aumentar velocidade e agilidade, reduzir trabalho com data centers e alcançar usuários globalmente.

Isso não elimina desperdício nem garante economia ou previsibilidade: capacidade ociosa provisionada, volumes, endereços IPv4, tráfego e compromissos podem continuar cobrando. Meça consumo, use tags e acompanhe [Cost Explorer](../servicos/custos/cost-explorer.md). Descontos por volume dependem do serviço; consumir mais não implica fatura menor.

## Capex e Opex

| Aspecto | Capex: despesas de capital | Opex: despesas operacionais |
| --- | --- | --- |
| Exemplos em TI | Compra de servidores, instalações e licenças capitalizáveis | Consumo de nuvem, manutenção, suporte e assinaturas |
| Investimento | Antecipado; ativo com vida útil e depreciação/amortização | Recorrente, associado à operação |
| Capacidade | Crescimento pode exigir nova compra | Pode variar com consumo e contratos |
| Planejamento | Capacidade e vida útil | Uso medido, orçamento e compromissos |

A nuvem pode diminuir risco de aquisição e acelerar acesso a tecnologia. A classificação contábil concreta depende do contrato e das regras aplicáveis; não é uma propriedade absoluta de toda compra de nuvem.

## Modelos de serviço

| Modelo | O que o cliente consome e gerencia | Exemplos e público típico |
| --- | --- | --- |
| IaaS | Infraestrutura virtual; cliente administra SO, software, dados e configuração | Amazon EC2, Azure Virtual Machines, Google Compute Engine, Droplets; equipes de sistemas e arquitetura |
| PaaS | Plataforma de execução; cliente desenvolve a aplicação e gerencia dados e acessos | Heroku, Google App Engine, Azure App Service; desenvolvimento |
| SaaS | Aplicação pronta; cliente administra identidades, dados e configurações de uso | Salesforce, Microsoft 365, Google Workspace; usuários finais e administradores |

Um provedor oferece serviços em vários níveis: a AWS inteira não se reduz a IaaS. Maior abstração transfere parte do trabalho operacional ao provedor, sem eliminar a [responsabilidade compartilhada](responsabilidade-compartilhada.md).

## Modelos de implantação

- **Pública:** recursos fornecidos por um provedor a diversos clientes, com isolamento lógico. Atende organizações de qualquer tamanho; não significa dados públicos.
- **Privada:** ambiente exclusivo de uma organização, local ou hospedado por terceiro. OpenStack é um exemplo de tecnologia possível. Virtualizar servidores isoladamente não garante todas as características de nuvem.
- **Híbrida:** integração de ambiente local/privado com nuvem pública, por requisitos de latência, residência, transição ou investimento existente. [Outposts](infraestrutura-global.md#aws-outposts) é uma possibilidade; conectividade e operação precisam ser planejadas.
- **On-premises:** infraestrutura local sob operação da organização; não é necessariamente nuvem privada.

Ofertas citadas no material antigo, como VMware Cloud on AWS, IBM Cloud Private, Anthos e Azure Stack, exigem conferir nome, disponibilidade e condições atuais antes de uso.

## Perguntas de recuperação ativa

1. Escalabilidade e elasticidade são iguais? Não: crescer é uma capacidade; ajustar recursos em resposta à demanda é um comportamento que precisa ser implementado.
2. Pagar conforme uso impede cobrança por recurso ocioso? Não: um recurso alocado pode constituir uso faturável mesmo sem solicitações da aplicação.
3. SaaS dispensa controle de acesso do cliente? Não: ele ainda decide identidades, permissões e tratamento dos dados.

## Fontes

- [O que é computação em nuvem](https://aws.amazon.com/what-is-cloud-computing/)
- [Tipos de computação em nuvem](https://aws.amazon.com/types-of-cloud-computing/)
- [Preços AWS](https://aws.amazon.com/pricing/)

[Voltar ao índice](README.md)
