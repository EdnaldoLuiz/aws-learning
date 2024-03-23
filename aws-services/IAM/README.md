<h1 align="center"> AWS Identity and Access Management (IAM) </h1>

<div align="center">
    <img width="250px" src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/aws-cloud-security/control-access-with-aws-identity-and-access-management/images/3d5ecfeab35e8dfc1eb781f7880fafc9_99-c-15-ccc-fe-5-e-4-d-8-f-bcfc-193197-b-9-dc-7-b.png">
</div>

---

## O que é? 

O **AWS Identity and Access Management (IAM)** é um serviço da Web que ajuda você a **controlar o acesso** aos recursos da AWS de forma segura. Com o IAM, é possível **gerenciar centralizadamente** permissões que controlam quais recursos da AWS os usuários poderão acessar. Você usa o IAM para controlar quem é autenticado (fez login) e autorizado (tem permissões) a usar os recursos.

---

## Tópicos Principais

### Usuários IAM

Os **usuários IAM** são entidades que você cria na AWS para representar a pessoa ou serviço que usa o IAM para interagir com a AWS. Cada usuário IAM tem credenciais associadas (por exemplo, **usuário e senha** ou **chaves de acesso**), que podem ser usadas para autenticar o usuário. Além disso, você pode atribuir **políticas de permissão** a um usuário IAM para conceder permissões para realizar ações específicas em recursos da AWS.

---

### Grupos IAM

Os **grupos IAM** são uma maneira de **agrupar usuários IAM** que têm necessidades de permissão semelhantes. Por exemplo, você pode ter um grupo IAM chamado "Admins" que é concedido permissões administrativas completas, e outro grupo IAM chamado "Developers" que é concedido permissões mais limitadas. Quando você adiciona um usuário a um grupo IAM, o usuário **herda** as permissões do grupo.

---

### Permissões IAM

As **permissões IAM** são concedidas através de **políticas de permissão**, que são documentos JSON que definem quais ações você pode realizar em quais recursos da AWS. Por exemplo, uma política de permissão pode permitir que um usuário acesse um bucket específico do Amazon S3, mas negue o acesso a todos os outros recursos da AWS. As políticas de permissão podem ser anexadas a **usuários**, **grupos** ou **funções IAM**.

- **Exemplo:** JSON usado para a criação de permissões em um Bucket S3 chamado **my_bucket**

  ```json
  {
      "Version": "2012-10-17",
      "Statement": [
          {
              "Effect": "Allow",
              "Action": [
                  "s3:PutObject",
                  "s3:GetObject",
                  "s3:DeleteObject"
              ],
              "Resource": "arn:aws:s3:::my_bucket/*"
          }
      ]
  }
  ```

  - `s3:PutObject` - Criação
  - `s3:GetObject` - Leitura
  - `s3:DeleteObject` - Remoção

  > **Obs:** o `/*` no final do ARN do recurso significa que a política se aplica a todos os objetos dentro do bucket.

#### Resource-based policies

Além das políticas baseadas em identidade (anexadas a usuários, grupos ou funções), existem também as **resource-based policies**, que são anexadas diretamente aos recursos, como um bucket do S3 ou uma fila do SQS. Isso permite que você **controle o acesso** ao recurso diretamente, definindo quem pode acessá-lo e como.

---

### Multi-Factor Authentication (MFA)

**MFA**, ou Multi-Factor Authentication, é um método de autenticação que requer a validação de **duas ou mais evidências** (fatores) independentes para verificar a identidade do usuário. Esses fatores podem ser:
- Algo que o usuário sabe (senha, PIN);
- Algo que o usuário tem (token físico ou app de autenticação);
- Algo que é inerente ao usuário (impressão digital, reconhecimento facial).

**Benefícios no ambiente AWS:**
- **Segurança aprimorada:** O MFA protege contra phishing, ataques de força bruta e outras ameaças.
- **Conformidade:** Auxilia na aderência a requisitos de conformidade (GDPR, PCI-DSS, etc.).
- **Flexibilidade:** Suporte a dispositivos de hardware MFA, aplicativos de autenticação móvel e SMS.
- **Proteção de recursos críticos:** Exigir MFA para a execução de ações específicas na AWS (exemplo: exclusão de buckets S3).

---

### Funções IAM

As **funções IAM** são usadas para delegar permissões a serviços da AWS ou contas externas, permitindo que os serviços realizem ações **em nome de usuários ou sistemas** sem a necessidade de credenciais permanentes.

- **Casos de Uso:**
  - Execução de aplicativos sem expor chaves de acesso ou senhas (ex: AWS Lambda).
  - Conexões entre contas AWS ou até mesmo com **serviços externos** (AssumeRole).
  
- **Exemplo de Política para Função IAM:**
  ```json
  {
      "Version": "2012-10-17",
      "Statement": [
          {
              "Effect": "Allow",
              "Action": "ec2:DescribeInstances",
              "Resource": "*"
          }
      ]
  }
  ```

#### Funções com External ID

Quando você precisa permitir que uma **entidade externa** (outra conta AWS ou serviço de terceiros) assuma uma função na sua conta, pode usar o **External ID** para garantir que somente essa entidade confiável possa usar a função.

---

### Políticas Gerenciadas vs. Políticas Inline

- **Políticas Gerenciadas:**
  - Criadas e mantidas pela AWS ou pelo cliente.
  - **Reutilizáveis** para vários usuários, grupos ou funções.
  - Fáceis de **versionar** e **atualizar**.

- **Políticas Inline:**
  - **Criadas diretamente** para um usuário, grupo ou função específicos.
  - **Não podem** ser reutilizadas em outras entidades.
  - Geralmente usadas em casos muito específicos e com escopo menor.

---

### IAM Access Analyzer

O **IAM Access Analyzer** ajuda a identificar recursos da AWS **acessíveis publicamente** ou de fora da conta, garantindo segurança proativa.

- **Casos de Uso:**
  - Detectar buckets S3 públicos acidentalmente.
  - Revisar permissões em contas vinculadas ou recursos que possam estar expostos.

---

### Práticas Recomendadas de Segurança

1. **Princípio do Menor Privilégio:** Conceda apenas as permissões necessárias para a função que o usuário precisa desempenhar.
2. **Habilite MFA** para a conta raiz e usuários privilegiados, garantindo uma camada extra de segurança.
3. **Audite permissões** regularmente usando ferramentas como o **Access Advisor** ou IAM Access Analyzer para remover acessos não utilizados.
4. **Use Funções Temporárias** em vez de credenciais de longa duração, minimizando riscos de vazamento.
5. **Aplique Políticas de Senha Rígidas:** Defina complexidade e rotação de senhas para usuários que precisam de login no Console.
6. **Monitore as Atividades** de IAM usando logs do AWS CloudTrail, que registra chamadas de API e eventos relacionados à segurança.

---

### Logs e Monitoramento com CloudTrail

O **AWS CloudTrail** registra chamadas de API e eventos relacionados à segurança. É fundamental para:
- **Rastreamento de Alterações:** Identifique quem alterou políticas ou realizou ações críticas como a exclusão de instâncias ou buckets.
- **Auditoria:** Auxilia na conformidade com normas como ISO 27001 e PCI-DSS.
- **Alerta Proativo:** Integração com serviços de monitoramento como o Amazon CloudWatch para disparar alertas em caso de atividades suspeitas.

---

### Integração com Serviços de Diretório

O IAM pode se integrar ao **AWS Directory Service** ou **AWS Single Sign-On (SSO)** para autenticação centralizada e gerenciamento de identidades:
- **Active Directory (AD):** Permite sincronizar usuários e grupos do AD com o IAM.
- **AWS Single Sign-On:** Garante uma experiência simplificada de login para várias contas AWS e aplicativos de terceiros.

---

### Senhas e Políticas de Acesso

Além de políticas baseadas em JSON, o IAM permite que você **configure políticas de senha** com requisitos de:
- Complexidade (uso de maiúsculas, caracteres especiais).
- Tamanho mínimo da senha.
- Rotação periódica (alteração obrigatória após X dias).
- Histórico de senhas (impede o reuso de senhas recentes).

---

### AWS Security Token Service (STS)

O **AWS STS** permite criar credenciais de segurança temporárias para usuários ou aplicações. Geralmente, é integrado com funções IAM, permitindo que usuários assumam papéis em **outras contas** ou em **serviços** sem expor credenciais de longo prazo.

---

### Service Control Policies (SCP) com AWS Organizations

Quando se gerenciam **múltiplas contas** em uma organização, as **Service Control Policies (SCPs)** podem impor restrições de segurança em **todas** as contas-membro. Por exemplo, é possível impedir a criação de recursos em determinadas regiões ou restringir o uso de serviços não aprovados. Isso funciona de forma complementar às políticas do IAM em cada conta.

---

### Curiosidades

- **IAM Multi-Conta:** Trabalha com **AWS Organizations** para gerenciar permissões centralmente em várias contas.
- **História do IAM:** Lançado em **2010**, é um dos serviços mais utilizados da AWS, com suporte para **centenas de ações** controladas por políticas.
- **Segurança em Números:** É essencial para atender a requisitos de conformidade (GDPR, HIPAA, ISO 27001, PCI-DSS).

---

## Conclusão

O IAM é o **pilar central** da segurança na AWS, permitindo **gestão granular** e escalável de permissões. Dominar seus recursos é fundamental para **proteger aplicações**, **atender a requisitos de conformidade** e **evitar acesso indevido** aos seus recursos na nuvem. Uma boa compreensão de **usuários**, **grupos**, **funções**, **políticas** e **ferramentas de auditoria** forma a base para qualquer ambiente seguro na AWS.