# Perguntas fundamentais — IAM, VPC, EC2 e S3

Estado do material: **em revisao**. Origem: exercícios próprios desta reconstrução.
Revisão técnica nas fontes: pendente; acesso oficial bloqueado em 2026-10-30.

Oito perguntas próprias para recuperação ativa, sem reproduzir questões de prova. Tente responder antes de abrir a discussão; registre dúvidas em erros da [trilha escolhida](README.md).

## IAM

### 1. Confiança ou permissão?

Uma função permite `ec2.amazonaws.com` em sua política de confiança, mas a aplicação EC2 recebe AccessDenied ao ler um objeto. A confiança já deveria permitir a leitura?

<details>
<summary>Resposta explicada</summary>

Não. Confiança define quem pode assumir a função. A política de permissões define ações da sessão, como `s3:GetObject` no ARN do objeto/prefixo correto. Confira instance profile, identidade efetiva, políticas de bucket, KMS e negações aplicáveis. Se a aplicação lista objetos, `ListBucket` usa o ARN do bucket e é uma permissão distinta. [Referência IAM](../servicos/seguranca-identidade/iam.md).

</details>

### 2. Uma SCP concede acesso?

Uma conta-membro tem uma SCP que permite S3, mas nenhuma política concede leitura à aplicação. A aplicação consegue ler?

<details>
<summary>Resposta explicada</summary>

Não por causa da SCP. Ela limita o máximo de permissões, não concede ações. É necessária autorização aplicável e ausência de Deny. Considere exceções de SCP, como conta de gerenciamento e service-linked roles, sem estender essas exceções a todo principal. [SCPs em IAM](../servicos/seguranca-identidade/iam.md#limites-sts-e-scps).

</details>

## VPC

### 3. Rota para IGW basta para SSH IPv4?

Uma subnet tem rota `0.0.0.0/0` para IGW. Isso basta para acessar uma EC2 por SSH de casa?

<details>
<summary>Resposta explicada</summary>

Não. Confira IGW conectado, IPv4 público/EIP no destino, security group para origem autorizada/porta correta, NACL nos dois sentidos, firewall/sshd e caminho de retorno. Depois confirme usuário da AMI e chave. NAT permite saída em cenários suportados; não cria entrada SSH pública. [VPC](../servicos/redes/vpc.md) e [SSH](../laboratorios/ec2-ssh/README.md).

</details>

### 4. Stateful ou stateless?

O security group permite uma conexão, mas uma NACL impede o retorno. Por que o estado do security group não resolve tudo?

<details>
<summary>Resposta explicada</summary>

Security groups são stateful: acompanham o retorno de conexões permitidas. NACLs são stateless e avaliadas separadamente por direção e ordem numérica. É necessário permitir o retorno, inclusive portas efêmeras relevantes, na NACL. A permissão em um controle não ignora o outro. [Referência de rede](../servicos/redes/vpc.md#security-groups-e-nacls).

</details>

## EC2

### 5. Quando o controle do SO favorece EC2?

Uma aplicação exige agente próprio, ajustes de SO e dependências legadas. Por que EC2 pode fazer sentido?

<details>
<summary>Resposta explicada</summary>

EC2 permite controlar SO, instalação e configuração no nível necessário, dentro dos limites da instância/virtualização. O cliente assume patches, hardening e operação. Compare se ECS com EC2, Fargate ou serviço gerenciado atende sem esse controle; não escolha apenas pela familiaridade. [EC2](../servicos/computacao/ec2.md).

</details>

### 6. Por que parar não zera a despesa?

Uma instância está parada, mas há EBS e Elastic IP alocados. Por que a conta pode aumentar?

<details>
<summary>Resposta explicada</summary>

A interrupção da computação não remove os recursos alocados. Volumes, snapshots e IPv4/EIP podem continuar cobrando; compromissos, NAT, logs e outros recursos também. Identifique propriedade/dependências antes de excluir algo. Terminar a instância não garante remoção de tudo. [Ciclo de vida e custos](../servicos/computacao/ec2.md#ciclo-de-vida-e-custos-que-persistem).

</details>

## S3

### 7. Durabilidade é disponibilidade?

Uma classe informa durabilidade projetada elevada. Isso garante acesso ininterrupto e sobrevivência à perda de qualquer AZ?

<details>
<summary>Resposta explicada</summary>

Não. Durabilidade é preservação de dados; disponibilidade é acesso ao serviço quando necessário. A resiliência depende da classe e de seu domínio de falha: classes de uma AZ não são projetadas para a perda dessa AZ. Nenhuma dessas métricas substitui backup, versionamento ou controle contra exclusão. [S3](../servicos/armazenamento/s3.md#durabilidade-e-disponibilidade).

</details>

### 8. Qual latência de recuperação o requisito admite?

Dados são raramente lidos, mas a leitura eventual precisa ser imediata. Deep Archive é escolha automática por ser barato?

<details>
<summary>Resposta explicada</summary>

Não. Deep Archive exige restauração e espera em horas conforme modalidade. Compare Standard-IA e Glacier Instant Retrieval para acesso imediato, somando tamanho, permanência, recuperação, redundância e frequência de leitura. Se perda de uma AZ não é aceitável, One Zone-IA e Express One Zone não atendem esse requisito por si. [Comparação das classes](../servicos/armazenamento/s3.md#comparação-das-classes).

</details>

[Voltar ao índice](README.md)
