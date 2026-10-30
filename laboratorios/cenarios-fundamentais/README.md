# Cenários fundamentais

Estado do material: **em revisao**. São quatro exercícios **conceituais**, sem criação de recursos AWS. Nenhuma sessão pessoal ou resultado foi registrado. Comece tentando resolver sem consultar, depois compare a discussão e registre dúvidas nos [erros da certificação escolhida](../../certificacoes/README.md).

## 1. IAM: aplicação EC2 lendo S3

**Objetivo:** conceder leitura de um prefixo S3 com menor privilégio, sem distribuir access key permanente.

**Cenário:** a aplicação EC2 deve ler `dados/*` em `meu-bucket-exemplo`. Compare armazenar uma access key de usuário no código com associar função IAM à instância via instance profile.

**Discussão:** prefira função assumida pelo serviço EC2 e credenciais temporárias obtidas pelo SDK. Confiança permite assumir a função; permissões permitem `s3:GetObject` no ARN do prefixo. `s3:ListBucket` é separado, no bucket e com condição de prefixo, apenas se necessário listar. Para SSE-KMS, avalie `kms:Decrypt` e política da chave. Considere política do bucket, endpoint e negações/SCPs.

**Critério de conclusão:** explicar as duas políticas, os dois tipos de ARN S3 e a condição em que KMS entra. Indique como restringir acesso ao prefixo e por que não criar uma chave permanente.

**Dúvidas:** registre o que faltou ao raciocínio e confira [IAM](../../servicos/seguranca-identidade/iam.md) e [S3](../../servicos/armazenamento/s3.md). Nenhuma chave deve ser solicitada ou versionada.

## 2. VPC: instância sem rota pública

**Objetivo:** diagnosticar timeout em entrada SSH IPv4.

**Cenário:** instância tem IP público e security group adequado, mas a tabela associada à subnet não tem rota para IGW.

**Discussão:** confirme associação da tabela, IGW conectado e rota apropriada. Depois confira NACL nos dois sentidos, caminho de retorno e sshd. Sem caminho de rede, usuário/chave corretos não resolvem timeout. NAT não fornece entrada pública para a instância; é caminho de saída em configurações suportadas. Instância privada precisa de VPN, bastion ou Session Manager com os próprios requisitos.

**Critério de conclusão:** desenhar o caminho ida/volta e distinguir falha de rota, bloqueio de regra e falha de autenticação. Não alterar regras abrindo SSH para todos.

**Dúvidas:** registre a hipótese inicial e confira [VPC](../../servicos/redes/vpc.md) e [roteiro SSH](../ec2-ssh/README.md).

## 3. EC2: parar não é zerar a fatura

**Objetivo:** identificar despesas que permanecem e propor limpeza seletiva.

**Cenário:** EC2 baseada em EBS está parada e mantém volumes, snapshots e Elastic IP. Outros recursos do exercício podem incluir NAT e logs.

**Discussão:** computação On-Demand parada e recursos alocados têm ciclos diferentes. EBS provisionado, snapshots e IPv4/EIP podem continuar cobrando; compromissos não desaparecem ao parar uma VM. Antes de terminar/excluir/desassociar/liberar, confira conta, região, tags de propriedade, dependências, retenção e necessidade dos dados. DeleteOnTermination e volumes adicionais precisam ser revisados.

**Critério de conclusão:** separar o que para de cobrar do que pode continuar; listar uma decisão de preservar ou excluir para cada recurso do exercício, justificando dependências. Não remover recursos compartilhados ou dados úteis.

**Dúvidas:** compare com [EC2](../../servicos/computacao/ec2.md), [EBS](../../servicos/armazenamento/ebs.md) e [Cost Explorer](../../servicos/custos/cost-explorer.md). A discussão não exige abrir a conta nem excluir nada.

## 4. S3: acesso raro e imediato

**Objetivo:** escolher classe compatível com latência e falha zonal.

**Cenário:** dados raramente acessados exigem leitura imediata e resiliência à perda de uma AZ.

**Discussão:** Standard-IA e Glacier Instant Retrieval são candidatas multi-AZ com leitura em milissegundos. Compare permanência/tamanho faturável e custo de recuperação com frequência e tamanho dos objetos; Standard ou Intelligent-Tiering podem ser melhores conforme uso. One Zone-IA não atende à perda de AZ por si; Express One Zone prioriza outro perfil. Flexible Retrieval/Deep Archive precisam de restauração e não atendem à leitura imediata do objeto arquivado.

**Critério de conclusão:** justificar redundância, disponibilidade, durabilidade, espera e custo total; explicar por que “menor preço por GB” não basta.

**Dúvidas:** consulte [classes S3](../../servicos/armazenamento/s3.md#comparação-das-classes), registre alternativa descartada e qual mudança de requisito a tornaria viável.

## Fechamento de uma sessão futura

Registre somente após realizar: tema, raciocínio, lacuna, referência e próxima revisão. Atualize o [roadmap](../../ROADMAP.md). Não há recursos a limpar nestes exercícios conceituais.

[Voltar a laboratórios](../README.md) · [Oito perguntas](../../certificacoes/perguntas-fundamentais.md)
