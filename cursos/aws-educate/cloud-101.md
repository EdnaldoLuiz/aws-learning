# AWS Educate — Cloud 101

Estado do material: **em revisao**. Origem: AWS Educate, Cloud 101.
Revisão técnica nas fontes: pendente; acesso oficial bloqueado em 2026-10-30.

## Origem e objetivos

Curso introdutório AWS Educate para definir nuvem, comparar modelos de serviço/implantação, entender infraestrutura global e reconhecer serviços essenciais. Existência destas notas não registra conclusão do curso.

As explicações repetidas de IaaS, PaaS, SaaS, benefícios, PAYG, Capex/Opex e nuvem pública/privada/híbrida foram consolidadas em [computação em nuvem](../../fundamentos/computacao-em-nuvem.md). Regiões, AZs e edge locations estão em [infraestrutura global](../../fundamentos/infraestrutura-global.md).

## Observações do curso: planejar para falhas

- **Armazenamento:** avaliar classe S3 e resiliência; classes de uma AZ exigem tratamento diferente. EBS replica dentro da AZ: a antiga afirmação de replicação automática do volume entre AZs foi corrigida. Snapshots permitem restaurar outro volume em outra AZ.
- **Computação:** múltiplas EC2 em AZs distintas, balanceamento e políticas de Auto Scaling reduzem dependência de uma instância; é necessário configurar e testar.
- **Banco:** RDS Multi-AZ e modos de Aurora oferecem estratégias específicas de disponibilidade; não confundir standby, réplica de leitura e backup.

## Preço e responsabilidade

Compare On-Demand/PAYG, Savings Plans (compromisso de gasto/hora) e Reserved Instances (benefício de cobrança conforme atributos). Standard e Convertible são categorias históricas de RI; a antiga expressão “instâncias de economia de capacidade” não deve ser usada como tipo de RI. Desconto não é o mesmo que Capacity Reservation.

Consulte [EC2](../../servicos/computacao/ec2.md) e [responsabilidade compartilhada](../../fundamentos/responsabilidade-compartilhada.md) para as referências principais. Economia não é automática: cliente continua responsável por configurações, dados e recursos alocados.

## Recuperação ativa

Explique sem consulta por que “estar na nuvem” não torna uma aplicação resiliente. Compare três falhas: uma EC2 parada, uma AZ indisponível e exclusão de objeto; proponha controles distintos para cada uma. Registre dúvidas na trilha de certificação escolhida.

## Fontes

- [AWS Educate](https://aws.amazon.com/education/awseducate/)
- [Referência S3](../../servicos/armazenamento/s3.md)
- [Referência EBS](../../servicos/armazenamento/ebs.md)
- [Referências de bancos](../../servicos/bancos-de-dados/README.md)

[Voltar ao índice](README.md)
