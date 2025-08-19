<h1 align=center> Amazon Simple Storage Service (S3) </h1>

<div align=center>
    <img width=250px src="../../../assets/aws-services/storage/s3.png">
</div>

---

## O que é?

O **Amazon Simple Storage Service (Amazon S3)** é um serviço de **armazenamento de objetos** altamente escalável e durável da AWS.
Ele é projetado para armazenar e recuperar qualquer quantidade de dados de forma simples, segura e acessível, tornando-se um dos serviços mais utilizados da plataforma.

O S3 é amplamente usado para **backup, recuperação, hospedagem de sites estáticos, distribuição de conteúdo, data lakes** e como camada de integração em arquiteturas serverless.

---

## Características Principais

* **Escalabilidade automática** → suporta desde poucos até bilhões de objetos.
* **Durabilidade** → projetado para 99,999999999% (11 9’s) de durabilidade.
* **Classes de Armazenamento** → Standard, Intelligent-Tiering, Glacier, Glacier Deep Archive etc.
* **Controle de acesso** → via **IAM policies**, **bucket policies**, **ACLs** e **S3 Block Public Access**.
* **Eventos e Integrações** → pode notificar via **SNS**, **SQS** ou **Lambda** quando objetos são criados, alterados ou removidos.
* **Versionamento** → mantém histórico de versões dos objetos.

---

## Escalabilidade e Performance

Um ponto muito cobrado em provas e arquiteturas críticas:

* O S3 **escala por prefixo**.
* Cada prefixo em um bucket pode processar **até milhares de requests por segundo**.
* Se você jogar todos os objetos diretamente no mesmo caminho (`s3://meu-bucket/arquivo.png`), pode criar **hot partitions** e limitar a taxa de requests.
* A solução é **usar múltiplos prefixos** (ex.: `s3://meu-bucket/cliente123/2025/08/arquivo.png`), permitindo que o S3 distribua automaticamente os objetos em diferentes partitions.

👉 Ou seja: **não crie buckets desnecessários** para escalar, apenas distribua seus dados em chaves/prefixos.

---

## Casos de Uso

* **Backup e Restauração** de dados.
* **Armazenamento para Big Data e Data Lakes**.
* **Hospedagem de sites estáticos** com CloudFront.
* **Armazenamento de assets de aplicações web e mobile**.
* **Integração com Lambda** para pipelines serverless baseados em eventos.

---

## Pontos Chave

* Serviço de **armazenamento de objetos** mais usado da AWS.
* Escala **automaticamente**, mas **por prefixo**, o que exige bom design de chaves.
* Altamente integrado com outros serviços da AWS (Lambda, CloudFront, Athena, Glue, etc).
* Oferece **custos reduzidos** e diferentes **classes de armazenamento** para balancear custo/performance.
* Recursos nativos de **segurança, versionamento e auditoria**.
