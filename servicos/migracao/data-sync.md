# AWS DataSync

Estado do material: **em revisao**. Origem: anotações anteriores migradas; conferência online das fontes pendente (rede bloqueada).

<div align="center">
    <img width="250px" src="../../assets/aws-services/migration/data-sync.png" alt="AWS DataSync">
</div>

---

## O que é?

O **AWS DataSync** é um serviço totalmente gerenciado de **transferência de dados em larga escala** que facilita a cópia de arquivos entre **armazenamento local, outros provedores de nuvem e serviços da AWS**.
Ele é otimizado para **migração e movimentação de dados em tarefas recorrentes ou pontuais** de forma **rápida, segura e automatizada**.

DataSync usa mecanismos de transferência otimizados, com paralelismo e recursos conforme modo/localização. A comparação antiga “10x mais rápido” era promocional e não garante aceleração sobre toda cópia NFS, SMB ou rsync.

---

## Características Principais

* **Velocidade otimizada** → desempenho depende de modo, agente, rede e armazenamentos; o antigo valor 10 Gbps não é um teto universal confirmado.
* **Versatilidade de origem/destino**:
  * On-premises → AWS
  * Entre buckets S3
  * Entre regiões AWS
  * AWS → NFS/SMB/FSx
* **Gerenciado** → reduz scripts de cópia; agente, permissões, tarefas e operação continuam exigindo configuração.
* **Segurança** → transferência protegida nos caminhos suportados; configure criptografia e permissões apropriadas ao armazenamento de destino.
* **Automação** → agendamento de tarefas e integração com CloudWatch.
* **Escalabilidade** → processa milhões de arquivos sem intervenção manual.

---

## Casos de Uso

* **Migração para a nuvem** → mover terabytes/petabytes de dados de data centers para o S3, EFS ou FSx.
* **Backup e DR (Disaster Recovery)** → transferir dados em tarefas recorrentes para estratégias de backup/DR, respeitando a janela entre execuções.
* **Análise de dados** → transferir dados para o S3 para serem processados com **Athena, Redshift, EMR ou Glue**.
* **Sincronização multi-local** → manter ambientes on-premises e AWS atualizados.
* **Troca entre serviços AWS** → por exemplo, mover dados do EFS para S3 e avaliar lifecycle/classes suportadas para arquivamento.

---

## Integrações Importantes

* **Armazenamentos de origem/destino**:
  * **On-premises**: NFS, SMB
  * **AWS**: Amazon S3, Amazon EFS, Amazon FSx (Windows/Lustre/ONTAP/OpenZFS)
* **Gerenciamento & Monitoramento**:
  * **Amazon CloudWatch** para métricas de transferência
  * **AWS CloudTrail** para auditoria de ações
  * **IAM** para controle de permissões
* **Rede**:
  * Funciona sobre **Direct Connect**, **VPN** ou **internet pública** com criptografia ponta a ponta.

## Pré-requisitos e revisão

Agente, modos de tarefa, pares de origem/destino e recursos suportados variam. DataSync faz transferência em tarefas; não é substituto genérico de replicação transacional contínua. As afirmações antigas “10x” e “10 Gbps” são referências de contexto, não garantias de desempenho ou limites atuais.

Configure IAM, credenciais de origem, rede, verificação de integridade e criptografia do armazenamento de destino; não presuma que uma cifra única em repouso seja imposta a todos os tipos de armazenamento. Considere cobrança por dados/tarefas conforme o modo e custos do destino, requisições, transferência e rede. Nenhuma tarefa foi executada nesta reconstrução.

* [Guia DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html)
* [Preços](https://aws.amazon.com/datasync/pricing/)

[Voltar ao índice](README.md)
