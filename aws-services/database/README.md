<table align="center">
  <thead>
    <tr>
      <th>Serviço</th>
      <th width="200px">Nome</th>
      <th>Descrição (modelo, quando usar, destaques)</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center"><td colspan="3"><strong>Bancos de Dados SQL (Relacionais)</strong></td></tr>
    <tr align="center">
      <td><img width="150px" src="./../../assets/aws-services/database/aurora-db.png" alt="Amazon Aurora"></td>
      <td><a href="#aurora">Amazon Aurora</a></td>
      <td>
        <p><em>Relacional, compatível com MySQL/PostgreSQL.</em> Alto desempenho e disponibilidade com armazenamento distribuído multi-AZ. 
        <strong>Quando usar:</strong> OLTP crítico com autoscaling e failover rápido.
        <strong>Destaques:</strong> Aurora Serverless v2 (ACUs), read replicas, Global Database, backups automáticos.</p>
      </td>
    </tr>
    <tr align="center">
      <td>
        <a href="https://github.com/EdnaldoLuiz/aws-learning/blob/main/aws-services/database/sql/RDS.md">
          <img width="150px" src="./../../assets/aws-services/database/rds-db.png" alt="Amazon RDS">
        </a>
      </td>
      <td>
        <a href="https://github.com/EdnaldoLuiz/aws-learning/blob/main/aws-services/database/sql/RDS.md">Amazon RDS</a>
      </td>
      <td>
        <p><em>Relacional gerenciado.</em> Suporte a <strong>Aurora, MySQL, PostgreSQL, MariaDB, Oracle, SQL Server e Db2</strong>.
        <strong>Quando usar:</strong> quer engine conhecida sem gerenciar SO/patch/backup.
        <strong>Destaques:</strong> Multi-AZ, Read Replicas (engines suportadas), backups, criptografia, RI/on-demand.</p>
      </td>
    </tr>
    <tr align="center">
      <td><img width="150px" src="./../../assets/aws-services/database/redshift.png" alt="Amazon Redshift"></td>
      <td><a href="#redshift">Amazon Redshift</a></td>
      <td>
        <p><em>Data warehouse columnar (SQL/OLAP).</em> 
        <strong>Quando usar:</strong> BI/analytics em escala, integração com S3 (Spectrum).
        <strong>Destaques:</strong> RA3/Serverless, separação compute/storage, materialized views, sharing.</p>
      </td>
    </tr>
    <tr align="center"><td colspan="3"><strong>Bancos de Dados NoSQL</strong></td></tr>
    <tr align="center">
      <td><img width="150px" src="./../../assets/aws-services/database/dynamodb-db.png" alt="Amazon DynamoDB"></td>
      <td><a href="#dynamodb">Amazon DynamoDB</a></td>
      <td>
        <p><em>Key-value & documentos (NoSQL) totalmente gerenciado.</em>
        <strong>Quando usar:</strong> latência consistente em grande escala, tráfego imprevisível.
        <strong>Destaques:</strong> on-demand/provisioned, GSIs/LSIs, Streams, DAX (cache), TTL, PITR (35d), Global Tables.</p>
      </td>
    </tr>
    <tr align="center">
      <td><img width="150px" src="./../../assets/aws-services/database/documentdb-db.jpg" alt="Amazon DocumentDB"></td>
      <td><a href="#documentdb">Amazon DocumentDB</a></td>
      <td>
        <p><em>Documentos compatível com MongoDB API.</em>
        <strong>Quando usar:</strong> apps Mongo-like com operação gerenciada e alta disponibilidade.
        <strong>Destaques:</strong> armazenamento distribuído, replicas de leitura, backups/restore, escalabilidade.</p>
      </td>
    </tr>
    <tr align="center">
      <td><img width="150px" src="./../../assets/aws-services/database/keyspaces-db.png" alt="Amazon Keyspaces"></td>
      <td><a href="#keyspaces">Amazon Keyspaces</a></td>
      <td>
        <p><em>Cassandra compatível (CQL) e serverless.</em>
        <strong>Quando usar:</strong> workloads Cassandra sem gerenciar clusters.
        <strong>Destaques:</strong> alta disponibilidade multi-AZ, cobrança por request/storage, TTL, tables elásticas.</p>
      </td>
    </tr>
    <tr align="center">
      <td><img width="150px" src="./../../assets/aws-services/database/timestream.png" alt="Amazon Timestream"></td>
      <td><a href="#timestream">Amazon Timestream</a></td>
      <td>
        <p><em>Séries temporais (IoT/observability).</em>
        <strong>Quando usar:</strong> métricas, telemetria, time-window queries.
        <strong>Destaques:</strong> serverless, camadas quente/fria, compressão, SQL-like para time series.</p>
      </td>
    </tr>
    <tr align="center"><td colspan="3"><strong>Grafos & Ledger</strong></td></tr>
    <tr align="center">
      <td><img width="150px" src="./../../assets/aws-services/database/neptune-db.jpg" alt="Amazon Neptune"></td>
      <td><a href="#neptune">Amazon Neptune</a></td>
      <td>
        <p><em>Banco de grafos gerenciado.</em>
        <strong>Quando usar:</strong> relacionamentos altamente conectados (recomendação, fraude, knowledge graph).
        <strong>Destaques:</strong> Gremlin/TinkerPop, SPARQL, alto throughput de traversals, replicas e backups.</p>
      </td>
    </tr>
    <tr align="center">
      <td><img width="150px" src="./../../assets/aws-services/database/qldb.png" alt="Amazon QLDB"></td>
      <td><a href="#qldb">Amazon QLDB</a></td>
      <td>
        <p><em>Ledger imutável (journaling verificável criptograficamente).</em>
        <strong>Quando usar:</strong> trilhas de auditoria e integridade de registros sem blockchain distribuído.
        <strong>Destaques:</strong> histórico completo, SHA-256 digest, transações ACID.</p>
      </td>
    </tr>
    <tr align="center"><td colspan="3"><strong>Bancos de Dados em Memória</strong></td></tr>
    <tr align="center">
      <td><img width="150px" src="./../../assets/aws-services/database/elastic-cache-db.jpg" alt="Amazon ElastiCache"></td>
      <td><a href="#elasticache">Amazon ElastiCache</a></td>
      <td>
        <p><em>Cache gerenciado (Redis/Memcached).</em>
        <strong>Quando usar:</strong> baixa latência para leitura, sessions, ranking, caching de consultas.
        <strong>Destaques:</strong> Redis com cluster mode, réplica, failover; Memcached distribuído.</p>
      </td>
    </tr>
    <tr align="center">
      <td><img width="150px" src="./../../assets/aws-services/database/memorydb-db.jpg" alt="Amazon MemoryDB"></td>
      <td><a href="#memorydb">Amazon MemoryDB</a></td>
      <td>
        <p><em>Banco de dados em memória compatível com Redis com <strong>persistência</strong>.</em>
        <strong>Quando usar:</strong> estado durável de baixa latência (milisseg/µs) além de cache.
        <strong>Destaques:</strong> multi-AZ, snapshots, transações Redis, alta durabilidade.</p>
      </td>
    </tr>
    <tr align="center"><td colspan="3"><strong>Outros (Migração & Replicação)</strong></td></tr>
    <tr align="center">
      <td><img width="150px" src="./../../assets/aws-services/database/dms-db.png" alt="AWS DMS"></td>
      <td><a href="#dms">AWS Database Migration Service (DMS)</a></td>
      <td>
        <p><em>Migração e replicação contínua</em> entre engines iguais ou diferentes (homogênea/heterogênea).
        <strong>Destaques:</strong> CDC near-real-time, mínima parada, integração com SCT (schema conversion).</p>
      </td>
    </tr>

  </tbody>
</table>
