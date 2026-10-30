# AWS PrivateLink e endpoints VPC

Estado do material: **em revisao**. Origem: anotações anteriores e reconstrução editorial.
Revisão técnica nas fontes: pendente; acesso oficial bloqueado em 2026-10-30.

![Imagem legada PrivateLink](../../assets/aws-services/network/private-link.png)

## Problema resolvido

PrivateLink fornece acesso privado a serviços AWS, SaaS e serviços próprios suportados. Um endpoint de interface usa ENIs com IPs privados na VPC consumidora; o cliente acessa o serviço sem precisar de caminho pela internet pública. Não significa que todos os componentes do serviço estejam dentro da VPC do cliente nem concede autorização de API por si só.

## Tipos e alternativas

| Mecanismo | Caminho e uso |
| --- | --- |
| Endpoint de interface | Usa PrivateLink e interfaces com security groups para serviços suportados, como SNS/SQS/KMS conforme região |
| Gateway endpoint | Rota para S3/DynamoDB em cenários suportados; não é endpoint de interface PrivateLink |
| Peering/Transit Gateway | Conectividade de redes para outros requisitos; não equivale a expor apenas um serviço |
| NAT | Saída para endpoints públicos quando autorizada; comparar custo e alcance com acesso privado |

O catálogo de tipos de endpoint evolui; esta comparação é inicial, não inventário completo. Serviços e regiões suportados devem ser conferidos.

## Cenário SNS em subnet privada

1. Identifique conta, região, VPC, subnets e serviço SNS correto.
2. Planeje endpoint de interface nas AZs desejadas e security group permitindo HTTPS das origens necessárias.
3. Confira DNS privado, resolução do nome de serviço, regras, políticas de endpoint e IAM da aplicação.
4. Valide publicação autorizada e uma tentativa sem autorização; acesso de rede não concede Publish.
5. Avalie disponibilidade e custos por endpoint/AZ e dados processados, comparando com NAT e demais dependências.

Este roteiro é conceitual, sem chamadas AWS. O comando incompleto da nota antiga e as seções anunciadas sem conteúdo foram substituídos pelo cenário completo.

## Segurança e perguntas

Use menor privilégio, controles de origem e política do serviço. Conectividade privada não garante conformidade LGPD/HIPAA ou segurança máxima entre contas.

1. PrivateLink elimina IAM? Não: caminho e autorização são controles distintos.
2. Gateway endpoint é PrivateLink? Não no caso de gateway S3/DynamoDB descrito aqui.
3. Preciso de NAT para SNS com endpoint privado adequado? Não para esse caminho; outras dependências ainda precisam ser avaliadas.

## Fontes

- [PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html)
- [Endpoints de interface](https://docs.aws.amazon.com/vpc/latest/privatelink/create-interface-endpoint.html)
- [Preços](https://aws.amazon.com/privatelink/pricing/)

[Voltar ao índice](README.md)
