<h1 align=center> AWS Security Hub </h1>

<div align=center>
    <img width=250px src="../../../assets/aws-services/security/security-hub.png">
</div>

---

## O que é?

O **AWS Security Hub** é um serviço de **postura de segurança e conformidade centralizada**.
Ele coleta, organiza e prioriza achados de segurança de múltiplos serviços da AWS (como GuardDuty, Inspector, Macie, IAM Access Analyzer) e de soluções de parceiros, oferecendo uma **visão unificada** do estado de segurança em toda a sua conta ou organização.

O Security Hub ajuda a verificar **conformidade automática com frameworks de segurança** como **NIST, PCI DSS, CIS Benchmarks** e **AWS Foundational Security Best Practices**, permitindo auditorias mais rápidas e tomadas de decisão baseadas em evidências.

---

## Características Principais

* **Centralização** → consolida achados de segurança de diversos serviços e parceiros em um único painel.
* **Conformidade contínua** → monitora frameworks como **CIS, NIST, PCI DSS** em tempo real.
* **Multi-conta & Multi-região** → integração com **AWS Organizations** para ativar e gerenciar de forma centralizada.
* **Correlação de findings** → elimina duplicados e classifica severidade automaticamente.
* **Automação** → integra com **AWS Config, EventBridge, Lambda** para resposta automatizada.
* **Escalabilidade** → funciona em dezenas ou centenas de contas sem overhead manual.

---

## Casos de Uso

* **Auditoria de conformidade** com NIST, PCI DSS, CIS e AWS best practices.
* **Visão unificada de segurança** em ambientes multi-conta/organização.
* **Automação de resposta a incidentes** via EventBridge + Lambda (ex.: isolar instância EC2 comprometida).
* **Priorização de riscos** para equipes de SecOps e compliance.
* **Evidências para auditorias externas** (indústrias reguladas: financeiro, saúde, governo).

---

## Integrações Importantes

* **AWS nativos**: GuardDuty (ameaças), Inspector (vulnerabilidades), Macie (dados sensíveis), IAM Access Analyzer, Config.
* **Parceiros externos**: integração com SIEMs, SOARs e ferramentas de endpoint/firewall.
* **Audit Manager**: usa findings do Security Hub como **evidência automática** em relatórios de compliance.

---

## Padrões de Conformidade Suportados

O Security Hub pode ativar **controles pré-configurados** que avaliam recursos continuamente contra padrões:

* **AWS Foundational Security Best Practices**
* **CIS AWS Foundations Benchmark**
* **NIST SP 800-53 Rev.5**
* **PCI DSS 3.2.1** (atualizações em andamento para PCI DSS v4)

---

## Pontos Chave

* **Não substitui** ferramentas de detecção (como GuardDuty) → ele **agrega e correlaciona**.
* Deve ser usado como **painel central de segurança** em conjunto com outros serviços.
* Reduz o custo/tempo de auditoria por **evidência contínua e automatizada**.
* **Delegated administrator** via AWS Organizations → um único ponto para gerenciar tudo.

---

👉 Quer que eu também crie uma **tabela comparativa** dos padrões de conformidade suportados pelo Security Hub (CIS vs NIST vs PCI vs Best Practices), no mesmo estilo que fizemos com as classes do S3? Isso deixaria o README ainda mais didático para estudo e consulta.
