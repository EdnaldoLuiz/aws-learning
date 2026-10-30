# AWS Educate — Getting Started with Storage

Estado do material: **em revisao**. Origem: AWS Educate, Getting Started with Storage.
Revisão técnica nas fontes: pendente; acesso oficial bloqueado em 2026-10-30.

## Objetivos e origem

O módulo apresenta tipos de armazenamento e conceitos S3, configuração de buckets, upload, segurança e casos de uso, incluindo site estático. O TXT antigo reproduzia integralmente o corpo desta nota após normalizar quebras de linha; as introduções exclusivas foram aproveitadas no [índice Educate](README.md).

A tabela duplicada de classes foi consolidada na [referência S3](../../servicos/armazenamento/s3.md#comparação-das-classes), incluindo observações sobre classes, disponibilidade projetada histórica, tamanho faturável, S3 on Outposts, criptografia e recuperação. Não use os antigos tempos/percentuais como preço ou SLA vigente.

## Observações específicas de aprendizagem

- Diferenciar objeto, bloco e arquivo: bloco não é restrito a dados estruturados; o padrão de acesso da aplicação orienta a escolha.
- Criar/organizar buckets e chaves; praticar upload e metadados em sessão futura autorizada.
- Entender versionamento, políticas de acesso e URLs pré-assinadas; esta última funciona como acesso temporário sensível, com limites das credenciais do emissor.
- Usar lifecycle para comparar retenção, transição e expiração; excluir cedo pode não eliminar cobrança mínima.
- Relacionar segurança e custo: acesso mínimo, Block Public Access, criptografia, volume de solicitações e transferência.
- Comparar [EBS](../../servicos/armazenamento/ebs.md) para bloco persistente e EFS para arquivos compartilhados; Glacier é família de classes de arquivamento S3, não disco de uma EC2.

## Exercício de revisão

Escolha uma classe para conteúdo com acesso imprevisível e outra para dados raros que exigem leitura imediata multi-AZ. Justifique redundância, latência, permanência mínima e custo de recuperação. Compare com o [cenário S3](../../laboratorios/cenarios-fundamentais/README.md#4-s3-acesso-raro-e-imediato).

Nenhum bucket ou site foi criado; o curso não está marcado como concluído.

## Fontes

- [AWS Educate](https://aws.amazon.com/education/awseducate/)
- [Classes S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)

[Voltar ao índice](README.md)
