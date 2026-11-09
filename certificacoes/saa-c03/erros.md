# Erros e dúvidas — SAA-C03

Estado do material: **rascunho** utilizável. Sem resultados ou datas pessoais registrados. Use também para uma dúvida surgida ao explicar um conceito; não precisa esperar um simulado.

| Data | Tema e exercício | Meu raciocínio | Correção e motivo | Fonte | Próxima revisão |
| --- | --- | --- | --- | --- | --- |

| Novembro/2026 | Q2 — RDS Multi-AZ | Alternativa correta, justificativa inicialmente incerta | Standby em outra AZ visa failover; não confundir com read replica para leitura | [RDS](../../servicos/bancos-de-dados/rds.md) | Explicar novamente sem consultar |
| Novembro/2026 | Q3 — Backups e PITR | Alternativa correta, sem explicação suficiente no momento | PITR restaura um estado passado dentro da retenção, em nova instância; não é o mesmo que failover Multi-AZ | [RDS](../../servicos/bancos-de-dados/rds.md) | Resolver cenário de exclusão acidental |
| Novembro/2026 | Q8 — EFS e FSx | Acertou EFS, mas supôs que "EFSx" seria a modalidade Windows | EFS usa NFS; FSx é uma família, incluindo FSx for Windows, NetApp ONTAP, Lustre e OpenZFS | [Comparativo](../../servicos/armazenamento/arquivos-compartilhados.md) | Comparar dois cenários sem consulta |
| Novembro/2026 | Q10 — Replicação do S3 | Acertou CRR, mas não compreendeu totalmente "source and destination" | São dois buckets em Regiões distintas; Versioning em ambos é pré-requisito da replicação | [S3](../../servicos/armazenamento/s3.md) | Descrever origem, destino e replicação assíncrona |

Adicione uma linha após uma sessão real. Explique por que a alternativa escolhida falhou e o requisito que muda a decisão; cite a referência consultada. Registre a próxima revisão conforme sua disponibilidade, sem preencher datas fictícias.

[Voltar à trilha](README.md) · [Roteiro de revisão](revisao.md) · [Perguntas](../perguntas-fundamentais.md)
