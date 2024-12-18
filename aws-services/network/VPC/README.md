### **README Melhorado: AWS Virtual Private Cloud (VPC)**

<h1 align="center"> AWS Virtual Private Cloud (VPC) </h1>

<div align="center">
    <img width="250px" src="https://d2908q01vomqb2.cloudfront.net/2ecdfb855115a9b7e5cf06a5762334586b60d8e4/2021/09/28/AWS-VPC.png" alt="AWS VPC">
</div>

---

## **Índice**
1. [Introdução](#introdução)
2. [VPC Flow Logs](#vpc-flow-logs)
3. [Componentes Essenciais da VPC](#componentes-essenciais-da-vpc)
   - Subnets
   - Tabela de Rotas
   - Network ACLs (NACLs)
   - Security Group
   - Elastic IP
   - Virtual Private Gateway
4. [Casos de Uso](#casos-de-uso)
5. [Exemplos Didáticos](#exemplos-didáticos)
6. [Boas Práticas](#boas-práticas)
7. [Recursos Adicionais](#recursos-adicionais)

---

## **Introdução**

O **Amazon Virtual Private Cloud (VPC)** é um dos serviços fundamentais da AWS, oferecendo um ambiente isolado para hospedar recursos de computação e rede. Ele possibilita:
- Controle total sobre a configuração de endereços IP.
- Conexões seguras com redes locais usando **VPNs** ou **Direct Connect**.
- Personalização da segmentação de sub-redes e políticas de acesso.

---

## **VPC Flow Logs**

### O que é?
O **VPC Flow Logs** é um recurso integrado que captura e registra o tráfego de rede que entra e sai da sua VPC. Ele coleta:
- Tráfego aceito/rejeitado por **Security Groups** e **NACLs**.
- Comunicação entre subnets, interfaces de rede elástica (ENIs) e gateways (Internet Gateway, NAT Gateway, etc.).

---

### **Como o VPC Flow Logs funciona?**
1. **Configuração do Escopo**:
   - Escolha capturar logs em **nível de VPC**, **subnet** ou **ENI**.
2. **Destino dos Logs**:
   - Envie os registros para **CloudWatch Logs**, **S3** ou **Kinesis**.
3. **Filtro de Tráfego**:
   - Capture **todo o tráfego**, apenas **permitido (ACCEPT)**, ou somente **bloqueado (REJECT)**.

---

### **Principais Pontos do VPC Flow Logs**
- **Coleta de Dados**: Registra metadados como IPs de origem/destino, portas, protocolo, ação (ACCEPT/REJECT).
- **Análise de Logs**: Ferramenta essencial para monitoramento, auditoria e segurança.
- **Compatibilidade**: Funciona com todos os recursos da VPC, como instâncias EC2, gateways, load balancers, etc.

---

## **Componentes Essenciais da VPC**

### **1. Subnets**
- Dividem sua VPC em segmentos menores:
  - **Public Subnets**: Sub-redes com acesso à internet via Internet Gateway.
  - **Private Subnets**: Sub-redes isoladas, usadas para serviços internos.
- **Exemplo de Uso**: Bancos de dados em private subnets e servidores web em public subnets.

---

### **2. Tabela de Rotas**
- Define os caminhos de comunicação entre subnets, internet e redes locais.
- **Exemplo**:
  - **Rota para Internet Gateway**: Permite acesso à internet.
  - **Rota para NAT Gateway**: Garante que subnets privadas possam acessar a internet de forma segura.

---

### **3. Network ACLs (NACLs)**
- Camada de segurança em nível de subnet.
- Atua como firewall stateless, permitindo ou bloqueando tráfego com base em regras.
- **Exemplo**:
  - Permitir tráfego HTTP/HTTPS na subnet pública.
  - Bloquear conexões em portas específicas para subnets privadas.

---

## **Casos de Uso**

1. **Auditoria de Segurança**
   - Identificar tentativas de acesso não autorizado.
   - Garantir conformidade com padrões de segurança.

2. **Monitoramento de Rede**
   - Analisar padrões de tráfego para otimização e detecção de anomalias.

3. **Solução de Problemas**
   - Identificar causas de falhas de conectividade entre recursos na VPC.

---

## **Exemplos Didáticos**

### **Configuração do VPC Flow Logs**
#### **Via AWS Console**
1. Acesse o console AWS e navegue até **VPC > Flow Logs**.
2. Escolha o escopo: **VPC**, **Subnet** ou **ENI**.
3. Selecione o destino: **CloudWatch Logs**, **S3**, ou **Kinesis**.
4. Defina o filtro de tráfego (**ALL**, **ACCEPT**, ou **REJECT**).
5. Clique em **Create Flow Log**.

---

#### **Via AWS CLI**
```bash
aws ec2 create-flow-logs \
  --resource-type VPC \
  --resource-id vpc-123abc \
  --traffic-type ALL \
  --log-group-name vpc-flow-logs \
  --deliver-logs-permission-arn arn:aws:iam::123456789012:role/FlowLogsRole
```

---

### **Exemplo de Tabela de Rotas**
| Destino         | Próximo Salto          |
|------------------|------------------------|
| `0.0.0.0/0`      | Internet Gateway       |
| `10.0.1.0/24`    | Local (subnet privada) |
| `172.16.0.0/16`  | Virtual Private Gateway|

---

### **Exemplo de Network ACL**
| Regra | Tipo      | Porta  | Origem       | Ação   |
|-------|-----------|--------|--------------|--------|
| 100   | HTTP      | 80     | 0.0.0.0/0    | ALLOW  |
| 110   | HTTPS     | 443    | 0.0.0.0/0    | ALLOW  |
| 120   | SSH       | 22     | 192.168.1.0/24 | DENY |

---

## **Boas Práticas**

- **Segmente sua VPC**:
  - Use subnets privadas para recursos sensíveis.
  - Limite o acesso à internet para subnets públicas.
  
- **Monitore Fluxos de Rede**:
  - Habilite VPC Flow Logs para capturar tráfego rejeitado.
  
- **Use NACLs e Security Groups**:
  - Configure múltiplas camadas de segurança.
  
- **Minimize Custos**:
  - Filtre logs capturando apenas o tráfego necessário.

---

## **Recursos Adicionais**
- [AWS VPC Documentation](https://docs.aws.amazon.com/vpc/)
- [AWS VPC Best Practices](https://aws.amazon.com/architecture/)
- [AWS Flow Logs Guide](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html)

---

Essa estrutura organiza informações importantes de forma direta e útil para **DevOps AWS** que desejam explorar o funcionamento de **VPCs** e seus componentes críticos.