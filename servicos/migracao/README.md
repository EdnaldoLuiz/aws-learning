# Migração e transferência

Comece por identificar o que será movido: dados/arquivos, bancos ou servidores/aplicações. A nota principal disponível é [DataSync](data-sync.md); o catálogo preserva outras opções e o planejamento comercial/operacional da migração.

Estado do material: **em revisao**. A tabela preserva descrições do catálogo anterior, sem atestar disponibilidade atual. Serviços sem link interno não têm nota própria; veja o [roadmap](../../ROADMAP.md#backlog).

| Serviço | Modelo, recursos e comparação inicial |
| --- | --- |
| Migration Evaluator | O AWS Migration Evaluator ajuda a estimar custos e planejar migrações para a AWS com base na análise de uso e performance da infraestrutura atual. |
| AWS Migration Hub | O Migration Hub centraliza e acompanha o progresso de migrações de aplicações e servidores em diferentes ferramentas da AWS. |
| Application Migration Service | O AWS Application Migration Service realiza migrações lift-and-shift automatizadas de servidores físicos, virtuais ou em nuvem para a AWS. |
| Application Discovery Service | O AWS Application Discovery Service coleta informações sobre data centers locais para facilitar o planejamento de migrações para a nuvem. |
| Mainframe Modernization | O AWS Mainframe Modernization simplifica a modernização, testes e implantação de aplicações de mainframe diretamente na AWS. |
| AWS Transfer Family | O AWS Transfer Family permite transferências seguras de arquivos via SFTP, FTPS e FTP para o Amazon S3 ou EFS, mantendo compatibilidade com sistemas legados. |
| Server Migration Service | O antigo Server Migration Service fazia replicação incremental de workloads para migração; avaliar Application Migration Service para novos cenários e conferir descontinuação. |

## Dados, servidores e planejamento

- [AWS DataSync](data-sync.md): transferências em tarefas entre armazenamentos suportados; avaliar verificação de integridade, janelas e destino.
- **AWS DMS:** migração e CDC de bancos; conversão de schema e mudanças de engine precisam de avaliação separada.
- **Migration Evaluator:** análise do ambiente atual e caso financeiro; não transfere por si os servidores.
- **Application Migration Service (MGN):** migração de servidores; planeje testes e cutover, dependências e rollback.
- **Transfer Family:** interfaces de transferência de arquivos para sistemas compatíveis; não equivale a DataSync.

## Itens legados e conferência pendente

**Server Migration Service (SMS)** é referência legada; avalie Application Migration Service e a documentação de descontinuação antes de qualquer uso. Migration Hub, Application Discovery Service e modalidades Mainframe Modernization também exigem conferir acesso para novos clientes, restrições e sucessores. A tabela descreve finalidade histórica sem afirmar disponibilidade atual.

Fontes oficiais bloquearam a consulta em 2026-10-30. Não há migração executada, preço ou compatibilidade de workload confirmados neste material.

- [Migração AWS](https://aws.amazon.com/cloud-migration/)
- [Application Migration Service](https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html)
- [DMS](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html)
- [Transfer Family](https://docs.aws.amazon.com/transfer/latest/userguide/what-is-aws-transfer-family.html)

[Voltar a serviços](../README.md)
