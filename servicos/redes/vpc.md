# Amazon Virtual Private Cloud (VPC)

Estado do material: **em revisao**. Origem: anotações anteriores e reconstrução editorial.
Revisão técnica nas fontes: pendente; acesso oficial bloqueado em 2026-10-30.

![VPC](../../assets/aws-services/network/vpc.png)

## Rede, subnets e rotas

Uma VPC define uma rede lógica isolada, com CIDRs e subnets em AZs. Tabelas de rotas selecionam destinos; security groups e NACLs controlam tráfego. Conexões com outras redes podem usar VPN e Direct Connect; um Virtual Private Gateway atende cenários suportados de conexão à VPC. Direct Connect não implica criptografia automática.

- **Subnet pública:** tem rota direta apropriada para Internet Gateway (IGW).
- **Subnet privada:** não tem essa rota direta. Pode ter saída IPv4 via NAT, endpoints privados ou conectividade com outras redes.
- **Subnet isolada:** pode ser projetada sem saída externa, conforme suas rotas.

Acesso SSH direto por IPv4 público exige endereço público/EIP associado, IGW conectado à VPC, rota da subnet, security group, NACL e retorno permitidos, além de sshd e credenciais corretas. Uma rota sozinha não habilita o acesso.

NAT permite iniciar conexões de saída em cenários suportados. Não substitui firewall, autorização nem um caminho de entrada SSH pública para a instância privada. Instâncias privadas exigem VPN, bastion, conectividade privada ou [Session Manager](../gestao-operacoes/systems-manager.md), cada um com seus pré-requisitos.

## Exemplo coerente de tabela de rotas

Para uma VPC ilustrativa `10.0.0.0/16` e subnet pública dentro dela:

| Destino | Alvo | Significado |
| --- | --- | --- |
| `10.0.0.0/16` | local | Comunicação no CIDR da VPC |
| `0.0.0.0/0` | IGW | Caminho IPv4 externo da subnet pública |
| `172.16.0.0/16` | Virtual Private Gateway | Rede remota de exemplo por conexão configurada |

Uma subnet privada poderia usar NAT na rota padrão, em vez de IGW. Avalie IPv6 separadamente; os caminhos e mecanismos não são idênticos ao NAT IPv4.

## Security groups e NACLs

| Controle | Escopo e estado | Regras |
| --- | --- | --- |
| Security group | Interfaces/recursos associados; **stateful** | Allow; retorno de conexão permitida é acompanhado pelo estado |
| Network ACL | Subnet; **stateless** | Allow e Deny em ordem numérica; ida e volta devem ser autorizadas |

Uma NACL ilustrativa pode permitir HTTP/HTTPS, restringir SSH e precisar de portas efêmeras para respostas. Não copie uma lista só de entrada como política completa. Restrinja SSH ao endereço de origem autorizado, mantenha bancos em redes adequadas e controle acessos também na aplicação.

## VPC Flow Logs

Flow Logs registra **metadados de fluxos** (endereços, portas, protocolo e ACCEPT/REJECT), não payload ou conteúdo dos pacotes. Pode ser habilitado em VPC, subnet ou ENI e filtrar ALL, ACCEPT ou REJECT.

Destinos documentados incluem **CloudWatch Logs, Amazon S3 e Amazon Data Firehose**. A antiga referência genérica a “Kinesis” foi retirada. Escolha destino, formato, permissões de entrega, criptografia e retenção antes de criar os logs.

A cobertura não é universal: tráfego para alguns serviços internos (como parte do DNS fornecido pela AWS e metadados da instância) não é capturado; há outros casos documentados e registros podem ser omitidos. Ausência de registro não prova ausência de tráfego. Não use Flow Logs como substituto de captura de pacotes ou de logs da aplicação.

### Procedimento de estudo

1. Identifique escopo e objetivo (diagnóstico, auditoria ou análise de custo).
2. Escolha um dos destinos suportados e as permissões necessárias.
3. Defina filtro e retenção; relacione ENI, endereços e horário do erro.
4. Compare registros com rotas, security groups e NACLs; considere as limitações de coleta.

Nada foi criado na AWS nesta reconstrução. O exemplo de CLI de criação anterior foi substituído por este procedimento para evitar sugerir que um log já existe.

## Custos e revisão

NAT Gateway, IPv4 público, endpoints de interface, logs, armazenamento e transferência podem gerar despesas. Minimize coleta sem apagar evidências necessárias. Resolva o [cenário da rota ausente](../../laboratorios/cenarios-fundamentais/README.md#2-vpc-instância-sem-rota-pública) e as [perguntas de VPC](../../certificacoes/perguntas-fundamentais.md#vpc).

## Perguntas e respostas

1. Subnet privada não acessa nada fora dela? Pode acessar outros destinos pelas rotas e controles configurados.
2. Flow Logs mostra o texto enviado por SSH? Não: registra metadados de fluxo, dentro da cobertura suportada.
3. Uma NACL é stateful? Não: verifique ambos os sentidos e portas de retorno.

## Fontes

- [VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)
- [Subnets](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html)
- [Flow Logs e limitações](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html)
- [Publicação de Flow Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-records-examples.html)
- [NAT Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html)

[Voltar ao índice](README.md)
