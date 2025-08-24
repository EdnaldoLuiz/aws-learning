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

---

## 6. Classes de Armazenamento do S3

As classes do S3 equilibram **custo × desempenho × resiliência (AZs)** conforme o **padrão de acesso** dos seus dados. Use **Lifecycle** para mover objetos automaticamente entre classes.

---

### 6.1 Tabela comparativa (resumo rápido)

| Classe                            | Redundância  | Durabilidade           | Padrão de acesso                                   | Latência p/ leitura | Recuperação (fees)                              | Mín. permanência | Casos de uso                                                                     |
| --------------------------------- | ------------ | ---------------------- | -------------------------------------------------- | ------------------- | ----------------------------------------------- | ---------------- | -------------------------------------------------------------------------------- |
| **S3 Standard**                   | **Multi-AZ** | 99,999999999% (11 9’s) | Frequente/variável                                 | ms de 1 dígito      | Sem “retrieval fee”                             | —                | Apps, sites, ativos estáticos, data lakes “quentes”                              |
| **S3 Intelligent-Tiering**        | **Multi-AZ** | 99,999999999% (11 9’s) | **Imprevisível** (pode mudar com o tempo)          | ms de 1 dígito      | Retrieval fees apenas nos tiers frios           | —                | Quando não se sabe o padrão de acesso, redução de custos automática              |
| **S3 Standard-IA**                | **Multi-AZ** | 99,999999999% (11 9’s) | **Raro**, mas **precisa acesso imediato**          | ms de 1 dígito      | **Sim** (por GB recuperado)                     | **30 dias**      | Backups “quentes”, DR, dados frios porém críticos                                |
| **S3 One Zone-IA**                | **1 AZ**     | 99,999999% (5 9’s)     | **Raro** e **não crítico**                         | ms de 1 dígito      | **Sim**                                         | **30 dias**      | Dados reprocessáveis, réplicas secundárias, logs                                 |
| **S3 Glacier Instant Retrieval**  | **Multi-AZ** | 99,999999999% (11 9’s) | **Raríssimo**, mas acesso **instantâneo**          | ms de 1 dígito      | **Sim**                                         | **90 dias**      | Arquivos grandes acessados poucas vezes/ano com latência imediata                |
| **S3 Glacier Flexible Retrieval** | **Multi-AZ** | 99,999999999% (11 9’s) | Arquivo/backup com acesso eventual                 | Minutos a horas     | **Sim** (bem baixo)                             | **90 dias**      | Arquivos e backups que toleram espera de minutos/horas                           |
| **S3 Glacier Deep Archive**       | **Multi-AZ** | 99,999999999% (11 9’s) | **Longo prazo/Compliance**                         | Horas (até \~12h)   | **Sim** (mínimo)                                | **180 dias**     | Retenção 7–10+ anos, compliance/auditoria                                        |
| **S3 Express One Zone**           | **1 AZ**     | 99,999999% (5 9’s)     | Acesso **muito frequente** e de **baixa latência** | ms de 1 dígito      | Cobrança por req. e capacidade (modelo próprio) | —                | Alta performance/baixa latência em único AZ (ad-tech, HFT, pipelines intensivos) |

---

### 6.2 Quando escolher cada uma

#### S3 Standard

* **Por quê:** melhor equilíbrio para dados “quentes” com tráfego imprevisível.
* **Use se:** app em produção, ativos web, origem do CloudFront, landing zone de data lake.
* **Benefícios:** **sem taxa de recuperação** e **multi-AZ** por padrão.

#### S3 Intelligent-Tiering

* **Por quê:** reduz custos automaticamente quando o padrão de acesso é imprevisível.
* **Use se:** você não sabe se os dados vão ser acessados ou não.
* **Benefícios:** sem latência adicional; apenas pequena taxa de monitoramento + retrieval fees em tiers frios.

#### S3 Standard-IA

* **Por quê:** custo menor para dados pouco acessados, **mas** você precisa deles **na hora**.
* **Use se:** backups recentes, DR, ativos frios porém críticos.
* **Atenção:** **30 dias** mínimo e **taxa de recuperação** por GB.

#### S3 One Zone-IA

* **Por quê:** ainda mais barato assumindo risco de **1 AZ**.
* **Use se:** dados **reprocessáveis** (ex.: thumbnails, artefatos rebuildáveis) ou cópias secundárias.
* **Atenção:** **30 dias** mínimo, **retrieval fee** e sem resiliência multi-AZ.

#### S3 Glacier Instant Retrieval

* **Por quê:** arquivamento com **acesso imediato** quando necessário.
* **Use se:** grandes objetos raros, que às vezes precisam ser lidos **sem espera**.
* **Atenção:** **90 dias** mínimo + **retrieval fee**.

#### S3 Glacier Flexible Retrieval

* **Por quê:** arquivamento tradicional com janelas de **minutos a horas**.
* **Use se:** backups e datasets históricos sem urgência de restauração.
* **Atenção:** **90 dias** mínimo + **retrieval fee**; escolha a classe de recuperação conforme SLA.

#### S3 Glacier Deep Archive

* **Por quê:** **menor custo** para retenções longas (compliance).
* **Use se:** dados que raramente serão lidos (7–10+ anos).
* **Atenção:** **180 dias** mínimo e restauração em **horas**.

#### S3 Express One Zone

* **Por quê:** latência ultra-baixa e altíssima taxa de requisições em único AZ.
* **Use se:** precisa de **milhões de RPS** com **ms de 1 dígito** e aceita o risco de AZ única.
* **Dica:** buckets “de diretório” (chaves tipo caminho).

---

### 6.3 Dicas de prova & arquitetura

* **IA vs One Zone-IA:** ambos têm **retrieval fee** e **30 dias** mínimo; a diferença chave é **Multi-AZ vs 1 AZ** (criticidade do dado).
* **Glacier tiers:** **Instant Retrieval** (ms), **Flexible** (minutos-horas), **Deep Archive** (horas, mais barato, 180 dias).
* **Lifecycle:** respeite os **mínimos de permanência** (p.ex., não mova para IA com 7 dias — vai pagar early deletion).
* **Prefixos:** desenhe **chaves com múltiplos prefixos** para evitar hot partitions (escala por prefixo).
* **Bloqueio público:** inicie com **S3 Block Public Access** ligado e só abra exceções explícitas (CloudFront + OAC é a prática recomendada).
* **Custos variam por região/tamanho/req:** confira na calculadora antes de decidir.

---

## 7. Criptografia no Amazon S3

O Amazon S3 suporta diferentes opções de criptografia para proteger seus dados **em repouso**. As mais cobradas são as três modalidades de **Server-Side Encryption (SSE)**, além do **Client-Side Encryption**.

---

### 7.1 Tabela comparativa das modalidades de criptografia

| Método          | Gestão da chave         | Como funciona                                                                                                                                                                        | Caso de uso                                                                                |
| --------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| **SSE-S3**      | AWS                     | O S3 gera e gerencia automaticamente as chaves. Cada objeto é criptografado com uma chave única, que por sua vez é protegida por uma chave-mestre rotacionada regularmente pela AWS. | Cenários padrão: backup, data lakes, apps que precisam de criptografia sem complicação.          |
| **SSE-KMS**     | Cliente via **AWS KMS** | O S3 usa o **AWS Key Management Service**. Você pode escolher chaves gerenciadas pela AWS (`aws/s3`) ou chaves **CMK** que você cria e controla (com auditoria via CloudTrail).      | Quando você precisa de **auditoria, controle de rotação, permissões granulares**.                |
| **SSE-C**       | Cliente (fora da AWS)   | O cliente fornece a chave em cada requisição de upload/download. A AWS usa a chave para criptografar/decriptar, mas **não a armazena**.                                              | Cenários que exigem **compliance extremo**, onde a chave nunca pode sair do controle do cliente. |
| **Client-Side** | Cliente                 | Os dados são criptografados **antes de sair do cliente** e enviados já criptografados para o S3. Você mesmo gerencia todo o ciclo de vida da chave.                                  | Quando você não confia em ninguém além da sua própria aplicação para o processo de criptografia. |

---

### 7.2 Detalhes de cada modalidade

#### 🔹 SSE-S3 (Server-Side Encryption com chaves do S3)

* **Mais simples e transparente**.
* Basta marcar no bucket ou no objeto que deseja usar criptografia.
* Não tem custo extra além do armazenamento.
* Boa para workloads em que a auditoria detalhada **não é obrigatória**.

#### 🔹 SSE-KMS (Server-Side Encryption com chaves do KMS)

* Integração com o **AWS Key Management Service (KMS)**.
* Permite usar chaves CMK (Customer Master Keys) que você cria, gerencia e pode aplicar permissões IAM.
* Cada requisição de criptografia/decriptação gera uma chamada ao KMS (impacta em custo + throughput).
* Ideal para dados críticos: **auditoria em CloudTrail**, **separação de permissões** e **rotatividade de chaves**.

#### 🔹 SSE-C (Server-Side Encryption com Customer-Provided Keys)

* Você gera e armazena sua chave **fora da AWS**.
* Para cada `PUT` ou `GET`, você envia a chave via HTTPS; a AWS a usa para criptografar/decriptar e descarta depois.
* A AWS **não guarda sua chave**: se você a perder, perde os dados.
* Útil para requisitos regulatórios onde a chave não pode residir em provedores externos.

#### 🔹 Client-Side Encryption

* A aplicação do cliente faz a criptografia antes de enviar para a AWS.
* AWS só vê blobs já criptografados.
* Total controle, mas também total responsabilidade (rotação, auditoria, disponibilidade da chave).

---

### 7.3 Dicas de prova & arquitetura

* **Se o requisito for simplicidade** → SSE-S3.
* **Se pedir compliance/auditoria** → SSE-KMS (integra com CloudTrail).
* **Se pedir que a chave NUNCA fique na AWS** → SSE-C.
* **Se pedir que só o cliente gerencie tudo, sem confiar na AWS** → Client-Side.
* **Custo e performance:** SSE-KMS gera custo extra por chamada ao KMS; SSE-S3 é mais barato e rápido.