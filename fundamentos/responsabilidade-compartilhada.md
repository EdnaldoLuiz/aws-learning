# Responsabilidade compartilhada

Estado do material: **em revisao**. Origem: anotações anteriores e reconstrução editorial.
Revisão técnica nas fontes: pendente; acesso oficial bloqueado em 2026-10-30.

## Segurança da nuvem e na nuvem

A AWS protege a infraestrutura que opera os serviços: instalações físicas, hardware, rede e camadas do serviço sob sua administração. O cliente protege suas configurações, identidades, aplicações e dados. A divisão depende do serviço, do contrato e do modo de uso.

| Responsabilidade | EC2 | Serviço gerenciado como S3 |
| --- | --- | --- |
| Infraestrutura física | AWS | AWS |
| SO convidado e patches da aplicação | Cliente | SO do serviço é operado pela AWS |
| Identidades e permissões de uso | Cliente | Cliente |
| Classificação, retenção e acesso aos dados | Cliente | Cliente |
| Criptografia e configuração de acesso | Cliente escolhe e configura os controles aplicáveis | Cliente escolhe e configura os controles aplicáveis |

Criptografia não concede autorização. Usar serviço gerenciado não transfere ao provedor todas as obrigações de conformidade, backup e validação de recuperação.

## Root, IAM e federação

O usuário-raiz (*root*) representa a identidade inicial de uma conta AWS e possui privilégios amplos; proteja-o com MFA e reserve seu uso às tarefas que o exigem. Usuários IAM, funções IAM e identidades federadas são mecanismos de acesso à mesma conta.

Root não é uma “conta pessoal” e IAM não é uma “conta da empresa”. Pessoas e empresas podem ter contas AWS; a diferença tratada aqui é entre identidades e permissões. Para trabalho diário, prefira acesso federado e credenciais temporárias com privilégio mínimo. Consulte [IAM](../servicos/seguranca-identidade/iam.md) e [IAM Identity Center](../servicos/seguranca-identidade/identity-center.md).

## Revisão por cenário

Se uma EC2 usa software desatualizado, atualizar o SO convidado é responsabilidade do cliente. Se um bucket permite acesso indevido, revise políticas, bloqueio público e dados expostos; a AWS operar o armazenamento não corrige a autorização escolhida pelo cliente.

## Fontes

- [Modelo de responsabilidade compartilhada](https://aws.amazon.com/compliance/shared-responsibility-model/)
- [Boas práticas para root](https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html)

[Voltar ao índice](README.md)
