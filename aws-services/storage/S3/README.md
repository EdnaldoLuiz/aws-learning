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

### 6.1 Tabela comparativa (resumo rápido)

| Classe                            | Redundância  | Padrão de acesso                                   | Latência p/ leitura                           | Recuperação (fees)                              | Mín. permanência | Casos de uso típicos                                                                            |
| --------------------------------- | ------------ | -------------------------------------------------- | --------------------------------------------- | ----------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| **S3 Express One Zone**           | **1 AZ**     | Acesso **muito frequente** e de **baixa latência** | **ms de 1 dígito** / altíssima taxa de req.   | Cobrança por req. e capacidade (modelo próprio) | —                | Alta performance/baixa latência em único AZ (ad-tech, feature store, HFT, pipelines intensivos) |
| **S3 Standard**                   | **Multi-AZ** | Frequente/variável                                 | ms de 1 dígito                                | Sem “retrieval fee”                             | —                | Apps, sites, ativos estáticos, data lakes “quentes”                                             |
| **S3 Standard-IA**                | **Multi-AZ** | **Raro**, mas **precisa acesso imediato**          | ms de 1 dígito                                | **Sim** (por GB recuperado)                     | **30 dias**      | Backups “quentes”, DR, dados frios porém críticos                                               |
| **S3 One Zone-IA**                | **1 AZ**     | **Raro** e **não crítico**                         | ms de 1 dígito                                | **Sim**                                         | **30 dias**      | Dados reprocessáveis, réplicas secundárias, logs                                                |
| **S3 Glacier Instant Retrieval**  | **Multi-AZ** | **Raríssimo**, mas acesso **instantâneo**          | ms de 1 dígito                                | **Sim**                                         | **90 dias**      | Arquivos grandes acessados poucas vezes/ano com latência imediata                               |
| **S3 Glacier Flexible Retrieval** | **Multi-AZ** | Arquivo/backup com acesso eventual                 | **Minutos a horas** (expedited/standard/bulk) | **Sim** (bem baixo)                             | **90 dias**      | Arquivos e backups que toleram espera de minutos/horas                                          |
| **S3 Glacier Deep Archive**       | **Multi-AZ** | **Longo prazo/Compliance**                         | **Horas** (até \~12h)                         | **Sim** (mínimo)                                | **180 dias**     | Retenção 7–10+ anos, compliance/auditoria                                                       |

> Notas rápidas
> • “Multi-AZ” = projetado para resiliência regional. “1 AZ” = mais barato, porém sujeito a indisponibilidade se aquela AZ falhar.
> • “Retrieval fee” = cobrança por GB lido ao recuperar (não existe nas classes **Standard**; existe nas **IA/Glacier**).
> • “Mínimo de permanência” = sair antes disso cobra “early deletion”.

---

### 6.2 Quando escolher cada uma

#### S3 Express One Zone

* **Por quê:** latência ultra-baixa e altíssima taxa de requisições em um único AZ (picos massivos).
* **Use se:** precisa de **milhões de RPS** com **ms de 1 dígito** e aceita o risco de AZ única.
* **Evite se:** seus dados são críticos à resiliência regional.
* **Dica:** buckets “de diretório” (chaves tipo caminho) e cobrança por **capacidade + requests**.

#### S3 Standard

* **Por quê:** melhor equilíbrio para dados “quentes” com tráfego imprevisível.
* **Use se:** app em produção, ativos web, origem do CloudFront, landing zone de data lake.
* **Benefícios:** **sem taxa de recuperação** e **multi-AZ** por padrão.

#### S3 Standard-IA

* **Por quê:** custo menor para dados pouco acessados, **mas** você precisa deles **na hora**.
* **Use se:** backups recentes, DR, ativos frios porém críticos.
* **Atenção:** **30 dias** mínimo e **taxa de recuperação** por GB.

#### S3 One Zone-IA

* **Por quê:** ainda mais barato assumindo risco de **1 AZ**.
* **Use se:** dados **reprocessáveis** (ex.: thumbnails, artefatos rebuildáveis) ou cópias secundárias.
* **Atenção:** **30 dias** mínimo, **taxa de recuperação** e sem resiliência multi-AZ.

#### S3 Glacier Instant Retrieval

* **Por quê:** arquivamento com **acesso imediato** quando necessário (custo menor que IA em dados grandes).
* **Use se:** grandes objetos raros, que às vezes precisam ser lidos **sem espera**.
* **Atenção:** **90 dias** mínimo + **retrieval fee**.

#### S3 Glacier Flexible Retrieval

* **Por quê:** arquivamento tradicional com janelas de **minutos a horas** (opções Expedited/Standard/Bulk).
* **Use se:** backups e datasets históricos sem urgência de restauração.
* **Atenção:** **90 dias** mínimo + **retrieval fee**; escolha a classe de recuperação conforme SLA.

#### S3 Glacier Deep Archive

* **Por quê:** **menor custo** para retenções longas (compliance).
* **Use se:** dados que raramente serão lidos (7–10+ anos).
* **Atenção:** **180 dias** mínimo e restauração em **horas**.

---

### 6.3 (Bônus) S3 Intelligent-Tiering

> Não estava no seu slide, mas é **muito importante** no dia a dia e em provas.

* **O que é:** classe que **ajusta automaticamente** o tier conforme o padrão de acesso (hot → warm → cold), sem impactar latência.
* **Benefícios:** evita planejar manualmente Lifecycle para múltiplas classes; ótimo para dados com **padrão imprevisível**.
* **Custos:** pequena **taxa de monitoramento** por objeto + **retrieval fees** nos tiers frios; sem mínimos de permanência.

---

### 6.4 Dicas de prova & arquitetura

* **IA vs One Zone-IA:** ambos têm **retrieval fee** e **30 dias** mínimo; a diferença chave é **Multi-AZ vs 1 AZ** (criticidade do dado).
* **Glacier tiers:** **Instant Retrieval** (ms), **Flexible** (minutos-horas), **Deep Archive** (horas, mais barato, 180 dias).
* **Lifecycle:** respeite os **mínimos de permanência** (p.ex., não mova para IA com 7 dias — vai pagar early deletion).
* **Prefixos:** desenhe **chaves com múltiplos prefixos** para evitar hot partitions (escala por prefixo).
* **Bloqueio público:** inicie com **S3 Block Public Access** ligado e só abra exceções explícitas (CloudFront + OAC é a prática recomendada).
* **Custos variam por região/tamanho/req:** confira na calculadora antes de decidir.