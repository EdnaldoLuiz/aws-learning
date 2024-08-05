<h1 align=center> Amazon Aurora </h1>

<div align=center>
    <img width=250px src="../../../assets/aws-services/database/aurora-db.png">
</div>

---

## O que é?

Amazon Aurora é um serviço de banco de dados relacional gerenciado pela AWS, projetado para oferecer alta performance, disponibilidade e compatibilidade com MySQL e PostgreSQL. Ele combina a velocidade e a disponibilidade de bancos de dados comerciais de alto nível com a simplicidade e o custo-benefício dos bancos de dados de código aberto.

Aurora elimina tarefas administrativas de banco de dados, como provisionamento de hardware, aplicação de patches, backups e recuperação. Isso permite que os usuários se concentrem no design e na otimização de suas aplicações, melhorando a eficiência e reduzindo os custos.

## Compatibilidade

Amazon Aurora suporta os seguintes motores de banco de dados:
- MySQL
- PostgreSQL

## Alta Disponibilidade e Durabilidade

### Multi-AZ Deployments

Aurora armazena automaticamente seis cópias dos seus dados em três zonas de disponibilidade (AZs) da AWS e faz backup contínuo para o Amazon S3. Ele pode detectar falhas automaticamente e se recuperar delas rapidamente, proporcionando alta disponibilidade sem intervenção manual.

Um dos principais recursos do Amazon Aurora é a capacidade de configurar uma instância de banco de dados com alta disponibilidade usando uma implantação multi-AZ. Essa configuração gera automaticamente réplicas em várias zonas de disponibilidade na mesma Virtual Private Cloud (VPC – Nuvem Privada Virtual). Após a cópia completa inicial, as transações são replicadas de forma síncrona para as réplicas. A execução de um banco de dados em várias zonas de disponibilidade pode aumentar a disponibilidade durante a manutenção planejada do sistema e ajudar a evitar falhas no banco de dados e interrupções nas zonas de disponibilidade.

## Amazon Aurora Serverless

Amazon Aurora Serverless é uma configuração on-demand para Amazon Aurora, onde o banco de dados automaticamente inicia, encerra e escala a capacidade com base nas necessidades da aplicação. Isso é ideal para aplicações com cargas de trabalho intermitentes, imprevisíveis ou que variam significativamente.

### Benefícios do Aurora Serverless

- **Escalabilidade Automática**: Ajusta automaticamente a capacidade do banco de dados com base na demanda da aplicação.
- **Custo-Efetivo**: Pague apenas pela capacidade que você realmente utiliza, sem necessidade de provisionar recursos antecipadamente.
- **Simplicidade**: Elimina a necessidade de gerenciar a capacidade do banco de dados, permitindo que você se concentre no desenvolvimento da aplicação.

### Casos de Uso

- **Aplicações com Cargas de Trabalho Variáveis**: Ideal para aplicações que experimentam picos de tráfego imprevisíveis.
- **Ambientes de Desenvolvimento e Teste**: Perfeito para ambientes que não precisam estar em execução constante.
- **Aplicações Event-Driven**: Adequado para aplicações que são acionadas por eventos e não têm uma carga de trabalho constante.

## Pontos Chaves

- Amazon Aurora é um serviço de banco de dados relacional que oferece alta performance, disponibilidade e compatibilidade com MySQL e PostgreSQL.
- Como um serviço gerenciado, Aurora pode ser acessado pelo console, pela AWS CLI ou por chamadas de interface de programação de aplicativo (API).
- Aurora oferece recursos para redundância e backups automatizados.
- Aurora é otimizado para oferecer até cinco vezes a performance do MySQL padrão e três vezes a performance do PostgreSQL padrão.
- Aurora permite escalar a capacidade de leitura e escrita de forma independente, com até 15 réplicas de leitura de baixa latência.
- Amazon Aurora Serverless oferece escalabilidade automática e é ideal para cargas de trabalho intermitentes, imprevisíveis ou variáveis, proporcionando uma solução custo-efetiva e simples de gerenciar.