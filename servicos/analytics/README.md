# Analytics

Este catálogo compara serviços citados nas notas anteriores; os capítulos próprios ainda estão planejados. Comece distinguindo consulta sobre S3, ETL/catálogo, warehouse, streaming, busca e BI. Use [S3](../armazenamento/s3.md) como base para armazenamento e [bancos](../bancos-de-dados/README.md) para separar OLTP e OLAP.

Estado do material: **em revisao**. A tabela preserva descrições do catálogo anterior, sem atestar disponibilidade atual. Serviços sem link interno não têm nota própria; veja o [roadmap](../../ROADMAP.md#backlog).

| Serviço | Modelo, recursos e comparação inicial |
| --- | --- |
| Amazon Athena | O Amazon Athena é um serviço de consulta interativo, serverless, que permite analisar dados diretamente no Amazon S3 usando SQL. |
| AWS Clean Rooms | O AWS Clean Rooms facilita colaborações seguras, permitindo o compartilhamento controlado de dados entre parceiros sem expor informações sensíveis. |
| Amazon CloudSearch (histórico; conferir ciclo) | O Amazon CloudSearch oferece uma solução gerenciada para incorporar funcionalidades de busca customizada em websites e aplicações. |
| AWS Data Exchange | O AWS Data Exchange permite a assinatura e o intercâmbio de dados de terceiros de maneira segura e integrada ao ecossistema AWS. |
| AWS Data Pipeline (legado) | O AWS Data Pipeline orquestra e automatiza o fluxo de dados entre serviços AWS e sistemas locais, facilitando integrações e transformações. |
| Amazon DataZone | O Amazon DataZone centraliza a gestão e governança de dados, promovendo um ambiente seguro e organizado para as informações na nuvem. |
| Amazon EMR | O Amazon EMR possibilita o processamento de grandes volumes de dados utilizando frameworks open-source como Hadoop e Spark, de forma gerenciada. |
| Amazon FinSpace (conferir ciclo) | O Amazon FinSpace é uma plataforma de análise de dados voltada para o setor financeiro, otimizando a descoberta e o uso de informações críticas. |
| AWS Glue | O AWS Glue é um serviço ETL gerenciado que simplifica a preparação e a integração de dados para análises e insights. |
| AWS Glue DataBrew | O AWS Glue DataBrew permite a preparação visual de dados, facilitando a limpeza e a normalização sem necessidade de escrever código. |
| AWS Glue Elastic Views (histórico) | No material histórico, Glue Elastic Views buscava combinar dados de múltiplas fontes em views materializadas; verificar encerramento e alternativas. |
| Família Amazon Kinesis | O Amazon Kinesis permite a coleta, o processamento e a análise de dados em tempo real, possibilitando respostas imediatas a eventos. |
| Kinesis Data Analytics SQL (nome histórico) | O Kinesis Data Analytics permite o processamento de dados em tempo real utilizando SQL, transformando streams em insights instantâneos. |
| Amazon Kinesis Data Streams | O Kinesis Data Streams oferece uma infraestrutura escalável para ingestão e processamento contínuo de dados em tempo real. |
| Amazon Data Firehose (antes Kinesis Firehose) | Data Firehose entrega dados a destinos suportados como S3, com integrações/transformações a configurar; a origem citava Redshift e Elasticsearch, cuja nomenclatura e suporte exigem revisão. |
| Amazon Kinesis Video Streams | O Kinesis Video Streams facilita a ingestão, o armazenamento e a análise de vídeos em tempo real, viabilizando soluções inteligentes. |
| AWS Lake Formation | O AWS Lake Formation acelera a criação e o gerenciamento de data lakes, simplificando a integração, o gerenciamento e a segurança dos dados. |
| Amazon MSK | O serviço gerenciado para Apache Kafka reduz a complexidade de operar clusters, permitindo escalabilidade e alta disponibilidade com responsabilidades de configuração e operação do cliente. |
| Amazon OpenSearch Service | O Amazon OpenSearch Service é uma solução gerenciada que facilita a busca e a análise de grandes volumes de dados, baseada no OpenSearch. |
| Amazon QuickSight (nome no acervo; conferir oferta) | O Amazon QuickSight oferece inteligência de negócios na nuvem, permitindo a criação de visualizações interativas e análises aprofundadas com facilidade. |
| Amazon Redshift | O Amazon Redshift é um data warehouse robusto, permitindo análises SQL rápidas em volumes massivos de dados com integração simplificada à suite AWS. |

## Atualidade, nomenclatura e limites

As descrições acima registram o propósito citado na origem, não confirmam todas as ofertas em 2026. A consulta às fontes oficiais foi bloqueada; preços, quotas, novos clientes e ciclo de suporte permanecem pendentes.

- **AWS Data Pipeline, Glue Elastic Views e CloudSearch:** itens legados/restritos ou com encerramento a investigar; não são recomendações automáticas para novas arquiteturas. Avalie alternativas como Glue, Step Functions e OpenSearch conforme o caso.
- **Kinesis Data Analytics:** distinguir a oferta histórica SQL de **Amazon Managed Service for Apache Flink**. Verificar encerramentos, migração e disponibilidade da oferta SQL; não manter os nomes como sinônimos de uma oferta atual única.
- **Kinesis Firehose:** nome anterior de **Amazon Data Firehose**; conferir conectores/destinos e opções atuais. “Elasticsearch” na descrição é contexto histórico; verifique suporte atual de OpenSearch e demais destinos.
- **Kinesis:** nome de família não substitui escolher Data Streams (eventos/dados) ou Video Streams (vídeo).
- **FinSpace, DataZone e QuickSight:** verificar nome, oferta, elegibilidade, sucessores e ciclo de vida antes de implantar; o catálogo registra a aprendizagem anterior.
- **Glue e DataBrew:** distinguir ETL/catálogo e preparação visual, com oferta vigente a conferir.
- **Clean Rooms:** colaboração com controles e regras de análise; não elimina todos os riscos de reidentificação.
- **MSK:** Kafka gerenciado reduz tarefas, mas capacidade, configuração, segurança e operação da aplicação continuam necessárias.

## Fontes

- [Analytics AWS](https://aws.amazon.com/big-data/datalakes-and-analytics/)
- [Amazon Data Firehose](https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html)
- [Managed Service for Apache Flink](https://docs.aws.amazon.com/managed-flink/latest/java/what-is.html)
- [AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html)

[Voltar a serviços](../README.md)
