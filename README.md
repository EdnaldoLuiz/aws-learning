# Guia sobre Amazon Web Services (AWS)

![AWS](./assets/aws.png)

## O que é Computação em Nuvem?

É um modelo de entrega de serviços e recursos de T.I pela internet.
Permite o cliente consumir serviços e recursos como servidores, armazenamento, bancos de dados, redes, softwares e afins.
Em vez de armazenar em servidores físicos locais, usa-se a internet e um provedor de serviços para ter acesso a esses recursos.

## Pay As You Go (PAYG)

O modelo **Pagar conforme o uso** na computação em nuvem é extremamente vantajoso, pois permite que você pague apenas pelos recursos que realmente utiliza, em vez de investir antecipadamente em infraestrutura fixa. Isso torna o custo mais eficiente e flexível.

### Benefícios:
1. **Redução de Custos Iniciais**:  
   Você não precisa comprar servidores ou equipamentos caros. Exemplo: uma startup pode lançar seu site pagando apenas pelos acessos reais, sem gastar milhares em servidores físicos.

2. **Escalabilidade**:  
   Você pode aumentar ou reduzir os recursos conforme a demanda. Exemplo: um e-commerce pode escalar recursos na Black Friday e reduzi-los no restante do ano.

3. **Previsibilidade Financeira**:  
   Como você paga apenas pelo uso (horas de servidor, GB de armazenamento, etc.), os custos são proporcionais à sua necessidade real. Exemplo: uma empresa que usa computação para processamento de dados em horários específicos paga apenas pelo período usado.

4. **Evita ociosidade**:  
   Recursos ociosos são eliminados. Exemplo: uma plataforma de streaming paga apenas pelo consumo de dados e largura de banda durante os acessos dos usuários.

## Diferenças entre Capex e Opex

Quando discutimos computação em nuvem e modelos de pagamento como o **Pay As You Go**, é importante entender a diferença entre **Capex (Capital Expenditure)** e **Opex (Operational Expenditure)**, pois isso influencia diretamente a forma como as empresas gerenciam seus custos de TI.

### O que é Capex?

**Capex** refere-se a despesas de capital, ou seja, investimentos em bens tangíveis ou ativos fixos que serão utilizados a longo prazo. Em TI, isso inclui:
- Compra de servidores físicos
- Construção ou manutenção de data centers
- Aquisição de softwares licenciados de forma perpétua

Esses custos geralmente exigem um **investimento inicial elevado** e possuem um ciclo de amortização ou depreciação ao longo do tempo.

**Exemplo**: Uma empresa que compra servidores físicos para um data center local gasta uma grande quantia inicial e só recupera esse investimento ao longo de anos de operação.

### O que é Opex?

**Opex** refere-se a despesas operacionais, ou seja, custos recorrentes associados às operações do dia a dia. Na computação em nuvem, isso envolve:
- Pagamento por uso de recursos (como servidores virtuais, armazenamento e redes)
- Serviços de manutenção e suporte inclusos
- Escalabilidade de custos conforme a demanda

Esse modelo permite **flexibilidade e previsibilidade**, sem a necessidade de grandes investimentos iniciais.

**Exemplo**: Uma empresa que usa serviços da AWS paga mensalmente pelos recursos consumidos, sem precisar investir em servidores ou infraestrutura física.

### Comparação

| Aspecto                  | **Capex**                              | **Opex**                            |
|--------------------------|-----------------------------------------|--------------------------------------|
| **Investimento Inicial** | Elevado                                | Baixo ou inexistente                |
| **Escalabilidade**       | Limitada (depende de novos investimentos) | Alta (ajuste conforme a demanda)    |
| **Flexibilidade**        | Baixa                                  | Alta                                |
| **Planejamento Financeiro** | Amortizado ao longo do tempo         | Pagamento proporcional ao uso       |
| **Exemplo**              | Compra de servidores próprios          | Uso de serviços AWS (Pay As You Go) |

### Benefícios de usar Opex com Computação em Nuvem

1. **Menor Risco Financeiro**: Evita gastos desnecessários em infraestrutura que pode ficar subutilizada.  
2. **Agilidade**: Recursos podem ser ativados ou desativados rapidamente, sem grandes custos adicionais.  
3. **Acesso a Tecnologias Modernas**: Sem a necessidade de atualizações caras, a empresa sempre usa os serviços mais recentes.  

Adotar o modelo de **Opex** por meio da computação em nuvem é uma estratégia ideal para empresas que desejam ser mais ágeis, escaláveis e eficientes em seus gastos de TI.

---

## Infraestrutura Global da AWS

A AWS possui uma infraestrutura global projetada para oferecer **baixa latência**, **alta disponibilidade** e **escalabilidade**. Ela é composta por diversos componentes fundamentais, como regiões, zonas de disponibilidade (AZs), zonas locais, pontos de presença, AWS Wavelength e AWS Outposts. Vamos explorar cada um desses conceitos com exemplos claros.

---

### **Regiões**
As regiões são localizações físicas geográficas onde a AWS opera data centers. Cada região é composta por várias Zonas de Disponibilidade (AZs) e é projetada para funcionar de forma independente em termos de disponibilidade e segurança.

- **Exemplo**: A região **"sa-east-1"** (São Paulo) serve empresas na América Latina, permitindo menor latência para os usuários brasileiros.

---

### **Zonas de Disponibilidade (AZs)**
Zonas de Disponibilidade são localizações distintas e isoladas dentro de uma região, conectadas por redes de alta velocidade e baixa latência. Cada AZ possui um ou mais data centers.

- **Exemplo**: Na região de São Paulo, a AWS oferece 3 AZs (sa-east-1a, sa-east-1b, sa-east-1c). Se um data center de uma AZ falhar, os recursos em outra AZ continuam funcionando.

---

### **Zonas Locais**
As Zonas Locais aproximam serviços de computação, armazenamento e rede da AWS aos usuários finais, reduzindo a latência. Elas são extensões de uma região AWS.

- **Exemplo**: Uma empresa de streaming em Los Angeles pode usar a **Zona Local de Los Angeles** para garantir baixa latência ao transmitir vídeos para clientes da região.

---

### **Pontos de Presença (Edge Locations)**
Os Pontos de Presença são locais usados para entregar conteúdo por meio do **Amazon CloudFront** (rede de entrega de conteúdo - CDN). Isso melhora a experiência do usuário ao armazenar em cache dados frequentemente acessados.

- **Exemplo**: Uma empresa global pode utilizar um ponto de presença em **Lima, Peru**, para armazenar em cache conteúdo estático, acelerando o acesso para usuários peruanos.

---

### **AWS Wavelength**
O AWS Wavelength integra serviços da AWS diretamente em redes 5G de provedores de telecomunicações para entregar latência ultrabaixa a dispositivos móveis.

- **Exemplo**: Um desenvolvedor de jogos em tempo real pode usar o AWS Wavelength na rede 5G da **Verizon nos EUA** para fornecer experiências rápidas e responsivas para jogadores.

---

### **AWS Outposts**
O AWS Outposts permite que os serviços da AWS sejam executados no local do cliente (on-premises), oferecendo a mesma infraestrutura, APIs e ferramentas da nuvem AWS.

- **Exemplo**: Um hospital que precisa manter dados sensíveis localmente, mas deseja usar os serviços da AWS, pode instalar um **AWS Outpost** em seu data center para processar dados localmente enquanto os integra à nuvem.

---

### **Data Centers**
Os data centers são as unidades físicas que hospedam os servidores da AWS. Eles são projetados para oferecer alta redundância e segurança, suportando os serviços das regiões e AZs.

- **Exemplo**: Os data centers em **Dublin (Irlanda)** suportam a região **eu-west-1**, oferecendo serviços para empresas europeias.

---

### Benefícios da Infraestrutura Global

1. **Alta Disponibilidade**: Com várias AZs por região, falhas em um data center não afetam a disponibilidade geral.
2. **Latência Reduzida**: Componentes como Zonas Locais e Pontos de Presença reduzem a distância entre usuários e serviços.
3. **Escalabilidade**: A capacidade de crescer globalmente com facilidade.
4. **Conformidade e Segurança**: Regiões e AZs ajudam as empresas a atender requisitos locais de conformidade e segurança.

Essa infraestrutura global da AWS oferece flexibilidade para atender tanto startups quanto grandes empresas com necessidades locais e globais.

