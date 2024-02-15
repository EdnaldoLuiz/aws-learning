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

## 

O AWS Identity and Access Management (IAM) é um serviço da AWS que ajuda a gerenciar o acesso aos recursos da AWS de forma segura. Ele permite que você controle quem é autenticado (assinado) e autorizado (tem permissões) para usar recursos.

O IAM Identity Center é um recurso que fornece uma visão centralizada das identidades (usuários e roles) em sua conta AWS. Ele ajuda a entender e gerenciar quem tem acesso aos recursos da AWS e como esse acesso é concedido.

Aqui estão algumas das coisas que você pode fazer com o IAM Identity Center:

Visualizar e gerenciar identidades: Você pode ver todas as suas identidades IAM (usuários e roles) em um só lugar. Você pode adicionar ou remover permissões, adicionar ou remover usuários de grupos, e muito mais.

Analisar o acesso: Você pode usar o Access Advisor para ver quais permissões uma identidade tem e quando essas permissões foram usadas pela última vez. Isso pode ajudá-lo a seguir o princípio do mínimo privilégio, removendo permissões que não estão sendo usadas.

Configurar o acesso federado: Se você usa um provedor de identidade externo (como o Active Directory), você pode configurar o acesso federado para permitir que os usuários desse provedor de identidade acessem os recursos da AWS.

Gerenciar chaves de acesso: Você pode criar, desativar e excluir chaves de acesso para usuários IAM.

Aplicar políticas de senha: Você pode definir políticas de senha para usuários IAM para garantir que eles usem senhas fortes.

https://www.beex-inc.com/media/2LiZ3yZtErEwDfrhozaqabM4qreIteghAnRdBKo9.png