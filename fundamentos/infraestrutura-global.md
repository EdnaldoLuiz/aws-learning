# Infraestrutura global da AWS

Estado do material: **em revisao**. Origem: anotações anteriores e reconstrução editorial.
Revisão técnica nas fontes: pendente; acesso oficial bloqueado em 2026-10-30.

## Regiões e data centers

Uma Região é uma área geográfica que contém várias Zonas de Disponibilidade (AZs). Regiões têm isolamento projetado para limitar o impacto de falhas regionais. `sa-east-1` identifica São Paulo; `eu-west-1`, Irlanda. Escolha por latência medida, residência dos dados, serviços disponíveis, preço e estratégia de recuperação. Quantidades e ofertas regionais devem ser consultadas na fonte, sem congelar números nas notas.

Data centers são instalações físicas com energia, refrigeração, conectividade e controles de segurança. Uma AZ reúne um ou mais data centers; região e AZ são escopos diferentes de projeto.

## Zonas de Disponibilidade

AZs são domínios de falha separados na mesma região, conectados por redes de baixa latência. Distribuir componentes entre AZs pode reduzir impacto de falhas; replicação de dados, balanceamento, capacidade e testes de failover também são necessários. Uma instância EC2 não se torna multi-AZ automaticamente.

Nomes como `sa-east-1a` são ilustrativos e podem mapear para AZs físicas diferentes entre contas; AZ IDs ajudam a identificar a mesma zona em cenários entre contas.

## Local Zones

![Acervo de Local Zones](../assets/aws-services/local-zone/local-zone.png)

Local Zones estendem uma região a outras localidades para aproximar computação, armazenamento e rede do usuário. Podem atender jogos, renderização de imagens e vídeo, desktops e processamento que exige baixa latência. Uma Local Zone não é uma região independente e oferece um subconjunto de serviços.

A nota antiga usava Boston e Lima como exemplos de proximidade e jogos/renderização. Trate-os como cenários de estudo: confirme localidades, região-pai, serviços e latência antes de escolher uma implantação. A localização mais próxima não assegura por si só o menor tempo de resposta de toda a aplicação.

## Edge locations

Pontos de presença aproximam entrega de conteúdo e serviços de borda dos usuários, por exemplo no Amazon CloudFront. Cache de conteúdo estático reduz viagens à origem. Não equivalem a AZs completas. O exemplo de conteúdo para usuários em Lima ilustra o objetivo; a lista de pontos de presença exige consulta atual.

## AWS Wavelength

Integra infraestrutura AWS a redes de operadoras para aplicações sensíveis à latência móvel. O material anterior citava jogos em tempo real em uma rede 5G de operadora nos EUA. Disponibilidade de operadoras, locais e serviços deve ser confirmada; não é uma promessa universal de latência.

## AWS Outposts

![Acervo de Outposts](../assets/aws-services/infra/outposts.jpg)

Outposts leva infraestrutura e serviços AWS selecionados às instalações do cliente, com APIs e ferramentas familiares. Um hospital pode precisar processar dados localmente e integrar resultados à região. Capacidade, conectividade, manutenção e residência dependem da oferta e do desenho; nem todos os serviços regionais são executáveis localmente.

A antiga página continha apenas título e imagem. A imagem foi preservada; aprofundamento e opções de implantação estão no [roadmap](../ROADMAP.md#backlog).

## Escolha de escopo

| Necessidade | Ponto de partida | Cuidado |
| --- | --- | --- |
| Resiliência a uma falha zonal | Múltiplas AZs | Testar failover e dependências comuns |
| Recuperação regional | Estratégia multi-região | RTO/RPO, consistência e custos |
| Conteúdo perto do usuário | CloudFront/edge | Cache e origem |
| Computação próxima de uma cidade | Local Zones | Região-pai e serviços disponíveis |
| Processamento local | Outposts/híbrido | Capacidade, residência e conectividade |
| Latência em rede de operadora | Wavelength | Cobertura e oferta vigente |

## Fontes

- [Infraestrutura global](https://aws.amazon.com/about-aws/global-infrastructure/)
- [Regiões e AZs](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions-availability-zones.html)
- [Local Zones](https://aws.amazon.com/about-aws/global-infrastructure/localzones/)
- [Wavelength](https://aws.amazon.com/wavelength/)
- [Outposts](https://aws.amazon.com/outposts/)

[Voltar ao índice](README.md)
