<h1 align="center"> AWS Well-Architected Framework </h1>

<div align="center">
    <img width="250px" src="../../assets/badges/well-architected.png">
</div>

---


## Índice
1. [O que é](#o-que-é)
2. [Por que usar (na prática)](#por-que-usar-na-prática)
3. [Os 6 Pilares](#os-6-pilares)
   - [Operational Excellence](#operational-excellence)
   - [Security](#security)
   - [Reliability](#reliability)
   - [Performance Efficiency](#performance-efficiency)
   - [Cost Optimization](#cost-optimization)
   - [Sustainability](#sustainability)
4. [Princípios Canônicos por Pilar](#princípios-canônicos-por-pilar)
5. [Well-Architected Tool (WAT)](#well-architected-tool-wat)
   - [Fluxo de uso (passo a passo)](#fluxo-de-uso-passo-a-passo)
   - [Recursos avançados](#recursos-avançados)
6. [Lenses (Lentes)](#lenses-lentes)
7. [Trade-offs entre Pilares](#trade-offs-entre-pilares)
8. [KPIs por Pilar](#kpis-por-pilar)
9. [Pilar → Serviços & Práticas AWS](#pilar--serviços--práticas-aws)
10. [Exemplos Rápidos (o que a banca adora)](#exemplos-rápidos-o-que-a-banca-adora)
11. [CLI Essencial (Well-Architected Tool)](#cli-essencial-well-architected-tool)
12. [Boas Práticas de Estudo](#boas-práticas-de-estudo)
13. [Recursos para se aprofundar](#recursos-para-se-aprofundar)
14. [Glossário Rápido](#glossário-rápido)
15. [Mini-Quiz (5 questões)](#mini-quiz-5-questões)

---

## O que é?
O **AWS Well-Architected Framework (WA)** é o conjunto de **melhores práticas** para desenhar workloads **seguros, confiáveis, performáticos, econômicos e sustentáveis** na AWS.  
Ele traz **perguntas, princípios e controles** que ajudam você a **avaliar** e **melhorar** sua arquitetura continuamente.

---

## Por que usar (na prática)
- **Evitar tombos caros**: encontra riscos (HRIs/MRIs) **antes** de virarem incidente.
- **Foco no que importa**: decisões com base em **pilares** e **trade-offs** explícitos.
- **Base de certificação**: cai em **todas** as provas.
- **Cultura de melhoria**: revisão periódica, plano de ação e métricas.

---

## Os 6 Pilares

### Operational Excellence
Executar e **operar como código**, monitorar, aprender com falhas e melhorar processos continuamente (CI/CD, IaC, observabilidade, runbooks, game days).

### Security
**Identidade forte**, **rastreamento**, **segurança em camadas**, **automatização**, **proteção de dados** e prontidão para incidentes (IAM, KMS, CloudTrail, Config, Security Hub).

### Reliability
Projetar para **falhar e se recuperar**. **Automação**, **escalabilidade horizontal**, **capacidade correta**, **backup/DR** e **testes de recuperação** (Multi-AZ, Auto Scaling, Route 53, Backup).

### Performance Efficiency
Usar recursos **eficientemente** e **escalar**. **Serverless**, **cache**, **experimentos frequentes**, **global em minutos**.

### Cost Optimization
**Modelo de consumo**, medir **eficiência**, **eliminar undifferentiated heavy lifting**, **atribuir custos**, **gerenciar financeiramente** (SP/RI, Budgets, CUR).

### Sustainability
Minimizar impacto ambiental: **entender impacto**, **metas**, **maximizar utilização**, **hardware/soft eficientes**, **managed services** e **redução de downstream**.

---

## Princípios Canônicos por Pilar

**Operational Excellence**
- Operar **como código**
- Mudanças **pequenas e reversíveis**
- Refinar procedimentos com frequência
- **Antecipar falhas**
- **Aprender** com todas as falhas

**Security**
- Base **forte de identidade**
- **Rastreabilidade** habilitada
- Segurança em **todas as camadas**
- **Automatizar** melhores práticas
- Proteger dados **em trânsito** e **em repouso**
- **Manter pessoas longe dos dados**
- Preparar-se para **incidentes**

**Reliability**
- **Recuperação automática** de falhas
- **Testar** procedimentos de recuperação
- **Escalar horizontalmente**
- **Parar de adivinhar capacidade**
- **Gerenciar mudanças** com automação

**Performance Efficiency**
- **Democratizar** tecnologias avançadas
- **Ir global em minutos**
- **Arquiteturas serverless**
- **Experimentar com frequência**
- **Mechanical sympathy** (escolher o que melhor casa com o padrão de uso)

**Cost Optimization**
- **Cloud Financial Management**
- **Modelo de consumo**
- Medir **eficiência global**
- Cortar **undifferentiated heavy lifting**
- **Analisar e atribuir** despesas

**Sustainability**
- **Entender o impacto**
- **Estabelecer metas**
- **Maximizar utilização**
- Adotar hardware/soft mais **eficientes**
- Preferir **serviços gerenciados**
- Reduzir impacto **downstream** (rede/cliente)

---

## Well-Architected Tool (WAT)

### Fluxo de uso (passo a passo)
1. **Defina o workload** (escopo, arquitetura, riscos de negócio).
2. **Escolha lentes** aplicáveis (ex.: Serverless, Analytics).
3. **Responda às perguntas** por pilar (honestidade brutal).
4. **Revise o report**: HRIs/MRIs + recomendações.
5. **Crie o Improvement Plan** (dono, prazo, milestone).
6. **Compartilhe** (multi-conta via Organizations) e **acompanhe** evolução.
7. **Reavalie** trimestralmente ou a cada mudança relevante.

### Recursos avançados
- **Custom Lenses** (padrões internos)
- **Profiles** (prioridades de negócio)
- **Review Templates** (consistência entre times)
- **Integrações**: Trusted Advisor, AppRegistry
- **Sem custo**: o serviço é **grátis**; você paga só pelos recursos usados nos workloads

---

## Lenses (Lentes)
- **Serverless**, **Analytics**, **Machine Learning**, **IoT**, **HPC**, **SaaS**, **Migration**, **SAP**, **Streaming Media**, **Games**, **Hybrid Networking**, **Healthcare**, **Financial Services**, **Connected Mobility** etc.
- **Gatilhos**:
  - Picos imprevisíveis → **Serverless**
  - Lago de dados/ETL → **Analytics**
  - Treino/serving ML → **ML Lens**
  - Indústria específica → **Industry Lenses**

---

## Trade-offs entre Pilares

| Decisão                                | Ganha                         | Perde (potencial)                 |
|----------------------------------------|-------------------------------|-----------------------------------|
| Multi-AZ/DR agressivo                  | Reliability                   | Cost                              |
| Criptografia everywhere                | Security                      | Performance (overhead leve)       |
| Serverless/Managed                     | Ops, Performance              | Custo por invocação (caso mal usado) |
| Cache pesado (Redis/CloudFront)        | Performance, Cost (menos DB)  | Complexity                        |
| Observabilidade profunda (tracing)     | Ops, Reliability              | Cost                              |
| Right-sizing/Graviton                  | Cost, Sustainability          | Tempo de ajuste/teste             |

---

## KPIs por Pilar

| Pilar                | KPIs práticos                                                      |
|----------------------|--------------------------------------------------------------------|
| Operational Excellence | MTTR, frequência de deploy, % mudanças com rollback automatizado  |
| Security             | % recursos criptografados, findings abertos/idade, MFA coverage    |
| Reliability          | RTO/RPO, erros por AZ, sucesso de game days                        |
| Performance          | p95/p99 latência, TPS/QPS, cache hit ratio                         |
| Cost                 | $/req, cobertura SP/RI, custo por tag/unidade de negócio           |
| Sustainability       | Utilização média CPU/mem, GB-mês evitados (lifecycle), eficiência energia |

---

## Pilar → Serviços & Práticas AWS

| Pilar      | Serviços/Práticas chave                                                                 |
|------------|------------------------------------------------------------------------------------------|
| Ops        | CloudWatch, X-Ray, CloudTrail, Config, SSM, CloudFormation/CDK, Runbooks, Game Days     |
| Security   | IAM/SCPs, KMS, Secrets Manager, GuardDuty, Security Hub, WAF, Shield, Macie             |
| Reliability| Multi-AZ, Route 53 (failover/health check), Auto Scaling, ELB, Backup, S3 Versioning    |
| Performance| Lambda, Fargate, Graviton, ElastiCache, DynamoDB (DAX), CloudFront, ALB/NLB             |
| Cost       | Cost Explorer, Budgets, CUR, Savings Plans/RI, S3 Lifecycle, right-sizing, Spot         |
| Sustainability | Graviton, gp3/io2, compressão, lifecycle S3/Glacier, otimização rede/armazenamento |

---

## Exemplos Rápidos (o que a banca adora)

- **Timeout em failover de DB** → **Reliability** + **RDS Proxy**
- **Pico imprevisível em APIs** → **Performance/Ops** + **API GW + Lambda + SQS**
- **Conta estourando custo** → **Cost** + **Budgets + SP/RI + right-sizing**
- **Dados sensíveis em trânsito** → **Security** + **TLS/KMS/PrivateLink**
- **Latência global** → **Performance** + **CloudFront + Multi-Region (quando fizer sentido)**

---

## CLI Essencial (Well-Architected Tool)
> Exemplos para automatizar avaliações (**placeholders** entre `<...>`)

```bash
# Listar lentes oficiais
aws wellarchitected list-lenses --profile <perfil> --region <regiao>

# Criar um workload
aws wellarchitected create-workload \
  --workload-name "<nome>" \
  --description "Workload de produção" \
  --environment PRODUCTION \
  --aws-regions <regiao1> <regiao2> \
  --lenses "wellarchitected" "serverless" \
  --profile <perfil> --region <regiao>

# Listar perguntas de uma lente (ex.: Reliability)
aws wellarchitected list-questions \
  --workload-id <workloadId> \
  --lens-alias "reliability" \
  --profile <perfil> --region <regiao>

# Exportar relatório (PDF/JSON)
aws wellarchitected export-workload \
  --workload-id <workloadId> \
  --profile <perfil> --region <regiao>
```

---

## Boas Práticas de Estudo

* **Decore os princípios canônicos** por pilar (caem literalmente).
* Treine **trade-offs** (segurança vs custo, confiabilidade vs custo, etc.).
* Use a **WAT** num workload real para fixar — responda **honestamente** e gere um **Improvement Plan**.
* Faça 1–2 **lenses** relevantes ao seu contexto (ex.: Serverless, Analytics).

---

## Recursos para se aprofundar

* **AWS Well-Architected Framework (whitepaper)**
* **Well-Architected Tool (Console & API)** — gratuito
* **Well-Architected Labs** (hands-on)
* **Lenses**: Serverless, Analytics, ML, IoT, HPC, SaaS, Migration, SAP, Streaming, Games, Hybrid Networking

---

## Glossário Rápido

* **HRI/MRI**: High/Medium Risk Issues encontrados na revisão.
* **Lens**: extensão do Framework para domínio específico.
* **Improvement Plan**: plano de ação com donos e prazos.

---

## Mini-Quiz (5 questões)

1. Criptografar tudo e habilitar CloudTrail toca principalmente qual pilar?
   → **Security**

2. Multi-AZ + Auto Scaling para reduzir downtime?
   → **Reliability**

3. CloudFront + ElastiCache para reduzir p95/p99?
   → **Performance Efficiency**

4. Savings Plans + Budgets + CUR?
   → **Cost Optimization**

5. Migrar para Graviton e usar S3 Lifecycle para Glacier?
   → **Sustainability** (e **Cost**, de bônus)
