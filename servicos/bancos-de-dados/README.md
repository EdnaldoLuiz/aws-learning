# Bancos de dados

As notas principais cobrem Aurora, RDS e DynamoDB. Comece pelos padrões de acesso: transações relacionais, consultas por chave, documentos, grafos, séries temporais ou analytics; depois compare operação, consistência, latência, backup e custo.

Estado do material: **em revisao**. A tabela preserva descrições do catálogo anterior, sem atestar disponibilidade atual. Serviços sem link interno não têm nota própria; veja o [roadmap](../../ROADMAP.md#backlog).

| Serviço | Modelo, recursos e comparação inicial |
| --- | --- |
| [Amazon Aurora](aurora.md) | Relacional compatível com MySQL/PostgreSQL. Armazenamento distribuído multi-AZ, alta performance e disponibilidade. — OLTP crítico com autoscaling e failover rápido. — Aurora Serverless v2 (ACUs), read replicas, Global Database, backups automáticos. |
| [Amazon RDS](rds.md) | Relacional gerenciado. Suporte a Aurora, MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Db2. — Quando precisa de engine conhecida sem gerenciar SO/patch/backup. — Multi-AZ, read replicas (engines suportadas), backups, criptografia, on-demand/RI. |
| Amazon RDS on VMware (legado) | Extensão do RDS para ambientes VMware on-premises. Mesma experiência do RDS na nuvem. — Cenários híbridos onde não é possível migrar totalmente para AWS. — Backups automáticos para AWS, patching, alta disponibilidade local, integração Console AWS. |
| Amazon Redshift | Data warehouse columnar (SQL/OLAP). Otimizado para análises em larga escala. — BI/analytics com grandes volumes de dados; integração com S3 (Spectrum). — RA3/Serverless, separação compute/storage, materialized views, data sharing. |
| [Amazon DynamoDB](dynamodb.md) | NoSQL key-value & documentos. Totalmente gerenciado, baixa latência em escala. — Tráfego imprevisível, escalabilidade massiva. — On-demand/provisioned, GSIs/LSIs, Streams, TTL, DAX, PITR (35d), Global Tables. |
| Amazon DocumentDB | Banco de documentos compatível com MongoDB API. — Apps Mongo-like com operação gerenciada. — Armazenamento distribuído, replicas, backups, alta escalabilidade. |
| Amazon Keyspaces | Compatível com Cassandra (CQL), serverless. — Workloads Cassandra sem gerenciar clusters. — Multi-AZ, cobrança por request/storage, TTL, elasticidade. |
| Amazon Timestream | Séries temporais. Para IoT/observability com consultas time-window. — Métricas, telemetria, análises temporais. — Serverless, camadas quente/fria, compressão, SQL-like. |
| Amazon Neptune | Banco de grafos gerenciado. Consultas de relacionamentos altamente conectados. — Recomendação, fraude, knowledge graph. — Gremlin/TinkerPop, SPARQL, alta performance, replicas, backups. |
| Amazon QLDB (histórico) | Ledger imutável com verificação criptográfica. — Auditoria, integridade de registros. — Histórico completo, SHA-256 digest, transações ACID. |
| Amazon ElastiCache | Cache na memória (Redis/Memcached). — Baixa latência para leitura, sessions, caching. — Redis com cluster mode, failover; Memcached distribuído. |
| Amazon MemoryDB | Redis compatível com persistência. — Estado durável de baixa latência além de cache. — Multi-AZ, snapshots, transações Redis, alta durabilidade. |
| AWS DMS | Migração e replicação contínua. — Troca de engines homogênea ou heterogênea, mínima parada. — CDC near-real-time, integração com SCT, alta confiabilidade. |

## Como interpretar o catálogo e o ciclo de vida

A tabela é um mapa de diferenças, não garantia de compatibilidade completa, escalabilidade automática irrestrita ou catálogo vigente. RDS exige configuração do cliente para backups/patches/janelas; Aurora Serverless e limites de réplicas dependem da versão. NoSQL não elimina a modelagem por padrão de acesso.

- **QLDB:** manter como referência histórica de ledger verificável e investigar encerramento do serviço/caminho de migração; não recomendar para projetos novos.
- **RDS on VMware:** oferta legada a verificar; preservar a imagem e o contexto híbrido não comprova disponibilidade para novos clientes.
- **Timestream:** distinguir modalidades, como LiveAnalytics e for InfluxDB, e verificar acesso de novos clientes e ciclo de vida antes de estudar implantação.
- **ElastiCache e MemoryDB:** conferir engines suportadas (incluindo evolução de Redis/Valkey), persistência e modalidades. Cache e banco durável em memória são decisões diferentes.
- **DocumentDB, Keyspaces e Neptune:** confirmar versões/APIs e limitações de compatibilidade; não pressupor equivalência integral ao produto de origem.
- **Redshift:** OLAP/warehouse, diferente de RDS/Aurora OLTP; também aparece no [catálogo de analytics](../analytics/README.md).
- **DMS:** migração/CDC de banco, não banco de dados de aplicação. Avalie conversão de schema e compatibilidade de origem/destino.

A conferência online de ofertas/encerramentos não pôde ser feita (fontes AWS bloqueadas em 2026-10-30). Números da tabela, como retenção PITR, são referências a confirmar na configuração atual.

## Fontes a conferir

- [Catálogo de bancos AWS](https://aws.amazon.com/products/databases/)
- [Documentação QLDB](https://docs.aws.amazon.com/qldb/latest/developerguide/what-is.html)
- [Documentação Timestream](https://docs.aws.amazon.com/timestream/)
- [DMS](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html)

[Voltar a serviços](../README.md)
