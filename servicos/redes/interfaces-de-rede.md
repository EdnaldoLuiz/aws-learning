# Interfaces de rede: ENI, ENA e EFA

Estado do material: **em revisao**. Origem: anotações anteriores e reconstrução editorial.
Revisão técnica nas fontes: pendente; acesso oficial bloqueado em 2026-10-30.

## Do hardware à interface virtual

Uma placa de rede física (NIC) conecta o computador por cabo ou Wi-Fi e trabalha com endereços MAC/IP. Na EC2, a **ENI (Elastic Network Interface)** representa uma interface virtual ligada a uma subnet da VPC, com MAC, endereços privados e security groups; endereços públicos/EIP podem estar associados. A tabela de rotas é associada à subnet, não carregada dentro da ENI como sugeria a nota antiga.

ENIs adicionais podem ajudar em multi-homing, appliances e failover com IP privado estável, respeitando limites da instância e da AZ. A interface primária não pode ser destacada como uma ENI secundária comum.

## ENA e EFA

**ENA (Elastic Network Adapter)** é a tecnologia/adaptador de rede avançada para instâncias compatíveis, usando recursos como múltiplas filas e SR-IOV. Verifique suporte da família, AMI e driver. Não é uma ENI destacável de outra categoria. Beneficia APIs, bancos distribuídos, streaming e ingestão de alta taxa.

**EFA (Elastic Fabric Adapter)** oferece comunicação otimizada para HPC e machine learning distribuído, com OS-bypass nas bibliotecas e tipos suportados. MPI, simulações científicas, CFD, renderização e treinamento distribuído podem aproveitá-lo. Não é simplesmente “Infiniband na AWS”: confira semântica, bibliotecas, security groups, topologia e instâncias suportadas.

## Comparação para decidir

| Conceito | Foco | Verificar |
| --- | --- | --- |
| ENI | Identidade/conexão de rede da instância na VPC | Subnet/AZ, IPs, grupos, número de interfaces, possibilidade de destacamento |
| ENA | Desempenho de rede em instância compatível | Driver, AMI, limites de rede da instância e carga |
| EFA | Comunicação entre nós em HPC/ML | SO, instância, bibliotecas e configuração suportados |

Não use os antigos valores 10/100 Gbps como tetos universais: taxa, interfaces e modos variam. “ENA automático” depende de AMI e instância compatíveis. Não deduza suporte a multi-NIC só do nome da tecnologia.

## Exemplo conceitual

Uma segunda ENI com IP privado `10.0.1.50` em uma subnet do CIDR correspondente pode servir a um appliance que exige IP estável durante troca de instância na mesma AZ. Antes de criar, confira endereço livre, permissões, limite, rotas e tratamento de tráfego no SO. O comando de criação antigo foi convertido em cenário; nenhum recurso foi criado.

## Fontes

- [ENI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html)
- [Enhanced networking/ENA](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhanced-networking-ena.html)
- [EFA](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html)
- [VPC e acesso](vpc.md)

[Voltar ao índice](README.md)
