<h1 align=center> AWS Identity and Acess Management (IAM) </h1>

<div align=center>
    <img width=250px src=https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/aws-cloud-security/control-access-with-aws-identity-and-access-management/images/3d5ecfeab35e8dfc1eb781f7880fafc9_99-c-15-ccc-fe-5-e-4-d-8-f-bcfc-193197-b-9-dc-7-b.png>
</div>

---

## O que é? 

O AWS Identity and Access Management (IAM) é um serviço da Web que ajuda você a controlar o acesso aos recursos da AWS de forma segura. Com o IAM, é possível gerenciar, de maneira centralizada, permissões que controlam quais recursos da AWS os usuários poderão acessar. Você usa o IAM para controlar quem é autenticado (fez login) e autorizado (tem permissões) a usar os recursos.

## Tópicos Principais

### Usuários IAM

Os usuários IAM são entidades que você cria no AWS para representar a pessoa ou serviço que usa o IAM para interagir com a AWS. Cada usuário IAM tem credenciais associadas, que podem ser usadas para autenticar o usuário. Além disso, você pode atribuir políticas de permissão a um usuário IAM para conceder permissões para realizar ações específicas em recursos da AWS.

### Grupos IAM

Os grupos IAM são uma maneira de agrupar usuários IAM que têm necessidades de permissão semelhantes. Por exemplo, você pode ter um grupo IAM chamado "Admins" que é concedido permissões administrativas completas, e outro grupo IAM chamado "Developers" que é concedido permissões mais limitadas. Quando você adiciona um usuário a um grupo IAM, o usuário herda as permissões do grupo.

### Permissões IAM

As permissões IAM são concedidas através de políticas de permissão, que são documentos JSON que definem quais ações você pode realizar em quais recursos da AWS. Por exemplo, uma política de permissão pode permitir que um usuário acesse um bucket específico do Amazon S3, mas negue o acesso a todos os outros recursos da AWS. As políticas de permissão podem ser anexadas a usuários, grupos ou funções IAM.

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

- s3:PutObject - Criação
- s3:GetObject - Leitura
- s3:DeleteObject - Remover

> Obs:
 o /* no final do ARN do recurso significa que a política se aplica a todos os objetos dentro do bucket.

### Multi-Factor Authentication (MFA)

MFA, ou Multi-Factor Authentication, é um método de autenticação que requer a validação de duas ou mais evidências (fatores) independentes para verificar a identidade do usuário. Esses fatores podem ser algo que o usuário sabe (como uma senha), algo que o usuário tem (como um dispositivo de hardware ou um telefone celular), ou algo que é inerente ao usuário (como uma impressão digital).

No contexto do AWS (Amazon Web Services), o MFA adiciona uma camada extra de proteção em cima do nome de usuário e senha, tornando mais difícil para os invasores obterem acesso indevido às contas AWS.

**Os benefícios do MFA no ambiente AWS incluem:**

- **Segurança aprimorada:** O MFA protege contra phishing, ataques de força bruta e outras ameaças de segurança que podem comprometer as credenciais do usuário.

- **Conformidade:** O uso de MFA pode ajudar a atender aos requisitos de conformidade para a proteção de dados sensíveis.

- **Flexibilidade:** A AWS suporta vários métodos de MFA, incluindo dispositivos de hardware MFA, aplicativos de autenticação móvel e SMS.

- **Proteção de recursos críticos:** Você pode exigir MFA para a execução de ações específicas na AWS, como a exclusão de buckets do S3 ou o lançamento de instâncias EC2.