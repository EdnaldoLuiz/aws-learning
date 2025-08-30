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

## AWS Well-Architected Framework: Os 6 Pilares Fundamentais

## 🎯 Operational Excellence

### Princípios Essenciais
- **Operações como código**: Infraestrutura e processos definidos e gerenciados através de código
- **Mudanças pequenas e reversíveis**: Implementar alterações graduais com capacidade de rollback
- **Refinamento contínuo**: Evolução constante de procedimentos operacionais
- **Antecipação de falhas**: Realização de pre-mortems e game days proativos
- **Aprendizado contínuo**: Análise sistemática de todas as falhas operacionais

### Práticas-Chave
- **IaC (Infrastructure as Code)**: AWS CloudFormation, Terraform
- **CI/CD**: AWS CodePipeline, CodeBuild, CodeDeploy
- **Observabilidade**: Amazon CloudWatch, AWS X-Ray, Dashboards
- **Runbooks/Playbooks**: Documentação operacional automatizada
- **Game Days**: Simulações regulares de falhas

### Serviços AWS Principais
```plaintext
CloudFormation, CodeSuite, CloudWatch, Systems Manager, X-Ray
```

## 🔒 Security

### Princípios Fundamentais
- **Base sólida de identidade**: IAM forte com princípio do menor privilégio
- **Rastreabilidade completa**: Logging, monitoring e auditoria integrados
- **Defesa em profundidade**: Múltiplas camadas de segurança
- **Automatização de segurança**: Controles definidos como código
- **Proteção de dados**: Criptografia em trânsito e repouso
- **Separação de acesso**: Minimizar acesso humano direto a dados
- **Preparação para incidentes**: Planos de resposta testados

### Implementações Críticas
- **IAM**: MFA, políticas baseadas em tags, roles temporárias
- **Monitoring**: AWS CloudTrail, GuardDuty, Security Hub
- **Proteção de Dados**: AWS KMS, CloudHSM, Certificate Manager
- **Network Security**: Security Groups, NACLs, AWS WAF, Shield
- **Compliance**: AWS Config, Audit Manager, Artifact

### Serviços AWS Essenciais
```plaintext
IAM, KMS, CloudTrail, GuardDuty, WAF, Shield, Security Hub, Config
```

## ⚡ Reliability

### Princípios Centrais
- **Recuperação automática**: Auto-healing baseado em monitoring
- **Testes de recuperação**: Validação regular de procedures de DR
- **Escalabilidade horizontal**: Arquiteturas distribuídas e resilientes
- **Gestão de capacidade**: Monitoramento contínuo de demanda
- **Gestão de mudanças**: Automação de deployments e rollbacks

### Estratégias de Implementação
- **Multi-AZ/Multi-Region**: Distribuição geográfica de cargas
- **Auto Scaling**: Ajuste dinâmico de capacidade
- **Load Balancing**: Distribuição inteligente de tráfego
- **Backup/DR**: Estratégias baseadas em RTO/RPO
- **Circuit Breakers**: Padrões de resiliência em aplicações

### Serviços AWS Chave
```plaintext
Route 53, ELB, Auto Scaling, RDS Multi-AZ, DynamoDB Global Tables, Backup
```

## 🚀 Performance Efficiency

### Princípios Orientadores
- **Democratização tecnológica**: Acesso a tecnologias avançadas via serviços gerenciados
- **Capacidade global**: Deploy multi-region em minutos
- **Arquiteturas serverless**: Foco em valor de negócio, não em infraestrutura
- **Experimentação constante**: Testes comparativos de performance
- **Simpatia mecânica**: Alinhamento entre tecnologia e padrões de uso

### Otimizações Essenciais
- **Seleção de recursos**: Escolha ótima de instâncias, storage e databases
- **Caching**: Implementação estratégica de camadas de cache
- **CDN**: Distribuição global de conteúdo
- **Otimização de queries**: Análise e tuning de performance
- **Escalabilidade elástica**: Ajuste automático baseado em demanda

### Serviços AWS de Performance
```plaintext
Lambda, Fargate, CloudFront, ElastiCache, Aurora, S3 Transfer Acceleration
```

## 💰 Cost Optimization

### Princípios Econômicos
- **Cloud Financial Management**: Governança financeira como disciplina
- **Modelo de consumo**: Pagamento apenas pelo uso efetivo
- **Medição de eficiência**: ROI e métricas de custo-benefício
- **Eliminação de overhead**: Foco em diferenciação competitiva
- **Transparência de custos**: Atribuição clara e precisa de gastos

### Estratégias de Economia
- **Right Sizing**: Adequação precisa de recursos à demanda
- **Spot Instances**: Utilização de capacidade ociosa com desconto
- **Reserved Instances**: Compromissos de longo prazo para economias
- **Lifecycle Management**: Automatização de retenção e deleção
- **Tagging**: Categorização completa para alocação de custos

### Serviços de Gestão de Custos
```plaintext
Cost Explorer, Budgets, Cost & Usage Report, Savings Plans, Compute Optimizer
```

## 🌱 Sustainability

### Princípios de Sustentabilidade
- **Consciência do impacto**: Medição e monitoramento de impacto ambiental
- **Metas de redução**: Estabelecimento de objetivos claros de sustentabilidade
- **Maximização de utilização**: Otimização da eficiência energética
- **Adoção de inovações**: Uso de hardware e software mais eficientes
- **Serviços gerenciados**: Aproveitamento de economias de escala
- **Redução downstream**: Minimização do impacto em dispositivos clientes

### Práticas Sustentáveis
- **Seleção de regiões**: Escolha baseada em eficiência energética
- **Otimização de código**: Redução de consumo de recursos
- **Padrões de arquitetura**: Designs energeticamente eficientes
- **Gestão de dados**: Políticas de retenção e deletion
- **Monitoramento**: Métricas de consumo energético e eficiência

### Serviços AWS Sustentáveis
```plaintext
AWS Customer Carbon Footprint Tool, Graviton-based Instances, S3 Intelligent-Tiering
```

---

## 📊 Tabela Comparativa dos Pilares

| Pilar | Foco Principal | Métricas-Chave | Serviços AWS Críticos |
|-------|----------------|----------------|-----------------------|
| **Operational Excellence** | Operações eficientes e melhoria contínua | MTTR, MTBF, Deployment Frequency | CloudFormation, CodePipeline, CloudWatch |
| **Security** | Proteção de dados e sistemas | Time to Detect, Time to Respond | IAM, KMS, GuardDuty, Security Hub |
| **Reliability** | Disponibilidade e resiliência | Availability, RTO, RPO | Route 53, Auto Scaling, Multi-AZ |
| **Performance Efficiency** | Eficiência de recursos | Latency, Throughput, Utilization | Lambda, CloudFront, ElastiCache |
| **Cost Optimization** | Otimização econômica | Cost per Transaction, ROI | Cost Explorer, Savings Plans, Budgets |
| **Sustainability** | Impacto ambiental | Carbon Footprint, Energy Efficiency | Carbon Footprint Tool, Graviton Instances |

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
