# Laboratório: conexão SSH a uma EC2 Linux

Estado do roteiro: **em revisao**. Última execução real: **não executado** nesta reconstrução; não há execução anterior comprovada neste acervo. Objetivo: conectar por um caminho autorizado, validar identidade/destino e encerrar a sessão com segurança.

## Pré-requisitos e autorização

- Autorização explícita do responsável pela conta e pela instância para acesso e eventuais alterações. Este texto não autoriza executar ações na conta de terceiros.
- Conhecimentos de [IAM](../../servicos/seguranca-identidade/iam.md), [VPC](../../servicos/redes/vpc.md) e [EC2](../../servicos/computacao/ec2.md), cliente OpenSSH e acesso local à chave correta por canal seguro.
- Identificar conta, ID da instância, região, estado, AMI, usuário do SO, key pair e caminho de rede antes da tentativa. Não crie recursos apenas para validar este documento.
- Para SSH público IPv4: endereço público/EIP, IGW conectado, rota adequada da subnet, security group restrito à origem autorizada e NACL ida/volta. Conferir firewall local/sshd e retorno.
- Para instância privada: VPN, bastion ou outro caminho aprovado. Session Manager tem registro, agente, IAM e endpoints próprios; veja [Systems Manager](../../servicos/gestao-operacoes/systems-manager.md).

## Recursos, custos e preservação

Uma sessão real pode envolver computação, EBS, snapshots, IPv4 público/EIP, tráfego, NAT, bastion, logs e endpoints. Verifique preços, região e elegibilidade de qualquer crédito/Free Tier. Parar não garante custo zero, e terminar pode apagar dados. Liste antes quais recursos pertencem exclusivamente ao exercício e quais devem permanecer.

Não solicite, cole ou versione chave privada. `.gitignore` ignora `*.pem`, mas isso não torna seguro armazenar credenciais no checkout; mantenha a chave fora dele.

## 1. Obter endereço e usuário reais

No console ou inventário autorizado, confira endereço IPv4/DNS da instância correta e o nome de usuário da AMI. Exemplos comuns: `ec2-user` em Amazon Linux e `ubuntu` em Ubuntu; a documentação do publicador da AMI é a referência, não a suposição de que toda Linux usa o mesmo usuário.

Um DNS com formato `ec2-XX-XXX-XXX-XXX.<regiao>.compute.amazonaws.com` é **ilustrativo**; `XX-XXX-XXX-XXX` não é um destino válido para copiar. Obtenha o endereço real do recurso. IPv4 público automático pode mudar após stop/start. Elastic IP tem custo e ciclo de vida próprios e precisa ser liberado separadamente quando não for mais necessário.

## 2. Proteger a chave local

Exemplo para OpenSSH em Linux/macOS; substitua pelo caminho local autorizado. Não execute contra um arquivo que não reconhece.

```bash
chmod 400 /caminho/fora-do-repositorio/minha-chave.pem
```

No Windows, confira ACLs equivalentes no cliente usado. Não use permissões amplas para contornar erro do SSH.

## 3. Verificar a identidade do host

Antes de aceitar uma chave nova, obtenha a fingerprint do host por uma fonte confiável e independente: documentação/processo da organização ou saída de console autenticada da instância correta quando ela contiver a fingerprint. Verifique ID, região, algoritmo e impressão digital. Não confie em `ssh-keyscan` sozinho como prova da identidade.

O OpenSSH compara chaves conhecidas e pede confirmação na primeira conexão. Aceite somente depois de comparar com a fonte confiável. **Não desative a verificação de chave do host.** Se a chave mudou, interrompa, investigue substituição/recriação, IP reutilizado ou ataque; só atualize `known_hosts` depois de confirmar a causa.

## 4. Conectar e conferir o destino

`192.0.2.10` é um endereço reservado para documentação, **não uma instância real**. `ec2-user` e o nome da chave também são ilustrativos; substitua pelos valores reais autorizados.

```bash
ssh -o StrictHostKeyChecking=ask \
  -i /caminho/fora-do-repositorio/minha-chave.pem \
  ec2-user@192.0.2.10
```

Depois de conectado ao destino confirmado:

```bash
whoami
hostname
uname -s
```

**Resultado esperado:** `whoami` corresponde ao usuário da AMI autorizado, `hostname` corresponde ao inventário/configuração da instância e `uname -s` informa `Linux`. Hostname sozinho não é prova de identidade: correlacione com fingerprint e inventário. Registrar resultados sanitizados pertence à sessão real futura, sem copiar segredos ou dados privados.

Encerre:

```bash
exit
```

## 5. Diagnóstico

| Sintoma | Verificar | Evitar |
| --- | --- | --- |
| Timeout | IP/DNS atual, estado, rotas, IGW, caminho privado, SG, NACL, firewall/sshd e rede local | Trocar chaves sem resolver o caminho ou abrir SSH ao mundo |
| `Permission denied (publickey)` | Usuário da AMI, chave associada, caminho/permissões locais, configuração authorized_keys por acesso aprovado | Compartilhar chave privada, tentar usuários indiscriminadamente |
| Host key changed | Confirmar instância e fingerprint por canal confiável; investigar mudança | Apagar known_hosts sem confirmar identidade |
| Connection refused | Porta, sshd, firewall e destino corretos | Confundir recusa com autenticação negada |

## 6. Alias opcional em `~/.ssh/config`

No cliente local, fora do repositório, substitua todos os valores e proteja o arquivo conforme as recomendações do OpenSSH:

```sshconfig
Host aws-estudo
    HostName 192.0.2.10
    User ec2-user
    IdentityFile /caminho/fora-do-repositorio/minha-chave.pem
    IdentitiesOnly yes
    StrictHostKeyChecking ask
```

Depois de verificar fingerprint e destino, `ssh aws-estudo` usa o alias. HostName também pode ser o DNS real; o alias não atualiza automaticamente o IPv4/DNS que mudou. Não copie esta configuração ilustrativa como se fosse inventário real.

## Limpeza seletiva

Este roteiro não criou recursos nesta reconstrução; portanto não há limpeza AWS a executar agora. Em uma sessão futura autorizada:

1. Saia da sessão; registre IDs e o resultado do exercício sem credenciais.
2. Remova apenas regras temporárias e recursos criados exclusivamente para o laboratório, após checar dependências.
3. Decida preservar, parar ou terminar a instância conforme autorização e retenção. Confira DeleteOnTermination e volumes extras antes de terminar.
4. Revise EBS, snapshots, EIP/IPv4, NAT/bastion, endpoints e logs do exercício; libere/exclua só os dispensáveis e autorizados.
5. Confira inventário e custos após o atraso de atualização; remova alias/chaves locais temporárias conforme a política do responsável, sem apagar credenciais de outros usos.

## Perguntas

1. Por que o usuário da AMI importa? A chave autoriza uma conta do SO específica; root/ubuntu/ec2-user não são intercambiáveis.
2. IP público é suficiente? Não: caminho, rotas, regras e sshd também precisam estar corretos.
3. Fingerprint veio do próprio primeiro prompt SSH. Isso basta? Não: compare com uma fonte confiável independente.
4. Session Manager é SSH sem chave? É outro mecanismo de acesso com pré-requisitos próprios; túneis SSH sobre ele possuem condições adicionais.

## Fontes e materiais relacionados

- [Conectar Linux por SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-ssh.html)
- [Verificar fingerprint](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connection-prereqs.html)
- [Troubleshooting](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html)
- [OpenSSH ssh_config](https://man.openbsd.org/ssh_config)
- [Cenários fundamentais](../cenarios-fundamentais/README.md)
- [Custos de EC2](../../servicos/computacao/ec2.md#ciclo-de-vida-e-custos-que-persistem)

[Voltar a laboratórios](../README.md)
