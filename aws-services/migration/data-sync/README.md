<h1 align="center"> AWS DataSync </h1>

<div align="center">
    <img width="250px" src="../../../assets/aws-services/migration/data-sync.png" alt="AWS DataSync">
</div>

---

## O que é?

O **AWS DataSync** é um serviço totalmente gerenciado de **transferência de dados em larga escala** que facilita a cópia de arquivos entre **armazenamento local, outros provedores de nuvem e serviços da AWS**.  
Ele é otimizado para **migração, sincronização e movimentação contínua de dados** de forma **rápida, segura e automatizada**.

Diferente de ferramentas tradicionais, o DataSync usa **protocolo otimizado** sobre TCP, com paralelismo e compressão, conseguindo transferir até **10x mais rápido** que cópias comuns via NFS, SMB ou rsync.

---

## Características Principais

* **Velocidade otimizada** → protocolo próprio que acelera transferências em rede (até 10 Gbps por agente).
* **Versatilidade de origem/destino**:
  - On-premises → AWS
  - Entre buckets S3
  - Entre regiões AWS
  - AWS → NFS/SMB/FSx
* **Gerenciado** → sem necessidade de scripts manuais ou manutenção complexa.
* **Segurança** → criptografia TLS em trânsito e AES-256 em repouso.
* **Automação** → agendamento de tarefas e integração com CloudWatch.
* **Escalabilidade** → processa milhões de arquivos sem intervenção manual.

---

## Casos de Uso

* **Migração para a nuvem** → mover terabytes/petabytes de dados de data centers para o S3, EFS ou FSx.
* **Backup e DR (Disaster Recovery)** → replicar dados críticos continuamente para AWS.
* **Análise de dados** → transferir dados para o S3 para serem processados com **Athena, Redshift, EMR ou Glue**.
* **Sincronização multi-local** → manter ambientes on-premises e AWS atualizados.
* **Troca entre serviços AWS** → por exemplo, mover dados do EFS para S3 Glacier.

---

## Integrações Importantes

* **Armazenamentos de origem/destino**:
  - **On-premises**: NFS, SMB
  - **AWS**: Amazon S3, Amazon EFS, Amazon FSx (Windows/Lustre/ONTAP/OpenZFS)
* **Gerenciamento & Monitoramento**:
  - **Amazon CloudWatch** para métricas de transferência
  - **AWS CloudTrail** para auditoria de ações
  - **IAM** para controle de permissões
* **Rede**:
  - Funciona sobre **Direct Connect**, **VPN** ou **internet pública** com criptografia ponta a ponta.