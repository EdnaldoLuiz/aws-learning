<h1 align="center">Elastic Block Storage (EBS)</h1>

<div align="center">
    <img width="250px" src="./../../assets/aws-services/EBS/ebs.webp" alt="Amazon EBS">
</div>

---

## 1. Introdução

O **Amazon Elastic Block Store (Amazon EBS)** é um serviço de **armazenamento em blocos** altamente escalável e de **alta performance**, projetado para ser usado com o **Amazon Elastic Compute Cloud (Amazon EC2)**. 

O EBS fornece volumes persistentes que podem ser anexados a instâncias EC2, atuando como discos rígidos virtuais que oferecem armazenamento confiável e de baixo atraso para aplicações que requerem acesso consistente e durável aos dados.

---

## 2. Tipos de Volumes do EBS

O Amazon EBS oferece diferentes tipos de volumes para atender a diversas necessidades de desempenho e custo:

### 2.1 SSD (Solid State Drives)

- **General Purpose SSD (gp3)**
  - **Uso Comum:** Aplicações de banco de dados de pequeno a médio porte, servidores de desenvolvimento e teste, ambientes de virtualização.
  - **Performance:** Até 16,000 IOPS e 1,000 MB/s de throughput.
  - **Vantagem:** Equilíbrio entre custo e performance.

- **Provisioned IOPS SSD (io2 e io2 Block Express)**
  - **Uso Comum:** Aplicações críticas de banco de dados que requerem alta performance e baixa latência, como SAP, Oracle, Microsoft SQL Server.
  - **Performance:** Até 256,000 IOPS e 4,000 MB/s de throughput (io2 Block Express).
  - **Vantagem:** Alta performance consistente e durabilidade aprimorada.

### 2.2 HDD (Hard Disk Drives)

- **Throughput Optimized HDD (st1)**
  - **Uso Comum:** Armazenamento de dados de alto throughput, como big data, data warehouses, logs de streaming.
  - **Performance:** Até 500 MB/s de throughput.
  - **Vantagem:** Custo eficiente para cargas de trabalho que exigem alto throughput.

- **Cold HDD (sc1)**
  - **Uso Comum:** Dados acessados com pouca frequência, como backups e arquivamento.
  - **Performance:** Até 250 MB/s de throughput.
  - **Vantagem:** O custo mais baixo entre os tipos de volume EBS.

---

## 3. Performance e Tipos de SSD/HDD

### 3.1 Performance de IOPS e Throughput

- **IOPS (Input/Output Operations Per Second):** Mede o número de operações de leitura/escrita que um volume pode realizar por segundo.
- **Throughput:** Mede a quantidade de dados que podem ser transferidos por segundo, geralmente em MB/s.

### 3.2 Escolha do Tipo de Volume

- **gp3:** Ideal para uma ampla gama de aplicações que requerem uma combinação equilibrada de preço e performance.
- **io2/io2 Block Express:** Adequado para aplicações que exigem o máximo desempenho e alta durabilidade.
- **st1:** Excelente para cargas de trabalho que necessitam de alto throughput com custo otimizado.
- **sc1:** Melhor para armazenamento de dados que são acessados raramente e onde o custo é uma preocupação principal.

---

## 4. Snapshots do EBS

Os **snapshots do EBS** são cópias incrementais dos volumes EBS, armazenadas no **Amazon S3**, que permitem backup e recuperação de dados de forma eficiente.

### 4.1 Características dos Snapshots

- **Incrementais:** Após o primeiro snapshot completo, apenas os blocos modificados são armazenados, otimizando o uso de armazenamento.
- **Consistência de Dados:** Suporta snapshots consistentes para volumes multi-dimensionais, como aqueles usados por bancos de dados.
- **Restauração:** Permite criar novos volumes a partir de snapshots, facilitando a recuperação de dados ou a criação de novos ambientes.

### 4.2 Exemplos de Uso

- **Backup Regular:** Configurar snapshots automáticos para garantir a recuperação de dados em caso de falhas.
- **Clonagem de Ambientes:** Criar volumes a partir de snapshots para replicar ambientes de desenvolvimento, teste ou produção.
- **Migração de Dados:** Transferir dados entre regiões da AWS utilizando snapshots.

---

## 5. Encriptação

O **EBS** oferece **encriptação** de dados em repouso e em trânsito, garantindo que seus dados estejam protegidos contra acessos não autorizados.

### 5.1 Características da Encriptação do EBS

- **Transparente:** A encriptação é aplicada automaticamente sem a necessidade de alterações nas aplicações.
- **Chaves Gerenciadas pelo AWS KMS:** Utiliza o **AWS Key Management Service (KMS)** para gerenciar chaves de encriptação.
- **Compatível com Snapshots:** Snapshots de volumes encriptados também são encriptados, permitindo a criação de novos volumes encriptados a partir deles.

### 5.2 Exemplos de Uso

- **Proteção de Dados Sensíveis:** Encriptar volumes que armazenam informações pessoais, financeiras ou de saúde.
- **Conformidade com Regulamentos:** Atender a requisitos de conformidade como GDPR, HIPAA e PCI-DSS.

---

## 6. Redundância e Disponibilidade

O **Amazon EBS** oferece alta disponibilidade e durabilidade através de replicação automática dos dados dentro da **zona de disponibilidade (AZ)**.

### 6.1 Replicação de Dados

- **Dentro da AZ:** Todos os dados do EBS são automaticamente replicados dentro da mesma AZ para proteger contra falhas de hardware.
- **Durabilidade:** Projetado para oferecer 99.999% de durabilidade, minimizando o risco de perda de dados.

### 6.2 Backup e Recuperação

- **Snapshots:** Utilizar snapshots para criar backups regulares que podem ser armazenados em diferentes regiões, aumentando a resiliência dos dados.
- **Multi-AZ:** Distribuir instâncias EC2 em múltiplas AZs e anexar volumes EBS para garantir a continuidade das operações em caso de falhas em uma AZ.

---

## 7. Gerenciamento de Volumes

Gerenciar volumes EBS de forma eficiente é crucial para otimizar custos e performance.

### 7.1 Dimensionamento

- **Escalabilidade:** Ajustar o tamanho e o tipo dos volumes EBS conforme as necessidades da aplicação, sem tempo de inatividade.
- **Elasticidade:** Permite redimensionar volumes enquanto estão em uso, adaptando-se a cargas de trabalho variáveis.

### 7.2 Performance Tuning

- **Provisionamento de IOPS:** Para volumes io2, ajustar as IOPS provisionadas para atender a demandas específicas de performance.
- **Striping de Volumes:** Combinar múltiplos volumes EBS para aumentar o throughput e a performance geral.

### 7.3 Gerenciamento de Custo

- **Diretrizes de Utilização:** Monitorar a utilização dos volumes e ajustar conforme necessário para evitar desperdício de recursos.
- **Snapshots Incrementais:** Utilizar snapshots para reduzir custos de armazenamento, armazenando apenas os blocos modificados após o primeiro snapshot.

---

## 8. Melhores Práticas

Adotar as melhores práticas ao utilizar o Amazon EBS pode otimizar o desempenho, aumentar a segurança e reduzir custos.

### 8.1 Segurança

- **Encriptação:** Sempre encriptar volumes EBS para proteger dados sensíveis.
- **Gerenciamento de Acesso:** Utilizar políticas de IAM para controlar quem pode criar, modificar ou deletar volumes e snapshots.

### 8.2 Performance

- **Escolha do Tipo de Volume:** Selecionar o tipo de volume EBS adequado para a carga de trabalho específica.
- **Monitoramento:** Utilizar o Amazon CloudWatch para monitorar métricas de desempenho e ajustar conforme necessário.

### 8.3 Backup e Recuperação

- **Snapshots Regulares:** Configurar políticas de snapshots automáticos para garantir backups consistentes e atualizados.
- **Testes de Recuperação:** Realizar testes regulares de recuperação a partir de snapshots para garantir a integridade dos backups.

### 8.4 Otimização de Custo

- **Remoção de Volumes Não Utilizados:** Periodicamente revisar e deletar volumes EBS que não estão mais em uso.
- **Snapshots Eficientes:** Consolidar snapshots para reduzir o número total e minimizar custos de armazenamento.

---

## 9. Monitoramento com CloudWatch

Integrar o Amazon EBS com o **Amazon CloudWatch** permite monitorar e responder a métricas de desempenho e eventos.

### 9.1 Métricas Importantes

- **IOPS:** Número de operações de entrada/saída por segundo.
- **Throughput:** Quantidade de dados transferidos por segundo (MB/s).
- **Latency:** Tempo de resposta das operações de I/O.
- **Volume Utilization:** Percentual de utilização do volume.

### 9.2 Alarmes e Ações

- **Configuração de Alarmes:** Definir alarmes para métricas críticas, como alta latência ou baixa performance de IOPS.
- **Automação de Respostas:** Integrar alarmes com ações automáticas, como redimensionar volumes ou notificar administradores.

---

## 10. Custos e Otimização

O custo do Amazon EBS varia conforme o tipo de volume, a quantidade de armazenamento provisionado e a utilização de snapshots.

### 10.1 Componentes de Custo

- **Armazenamento de Volume:** Custo por GB/mês, varia conforme o tipo de volume (gp3, io2, st1, sc1).
- **IOPS Provisionadas:** Custo adicional para volumes io2 com IOPS provisionadas além do básico.
- **Snapshots:** Custo por GB armazenado, dependente do número e tamanho dos snapshots.

### 10.2 Estratégias de Otimização

- **Escolha Adequada do Tipo de Volume:** Selecionar o tipo de volume que melhor equilibra custo e performance para sua aplicação.
- **Uso Eficiente de Snapshots:** Implementar uma política de retenção de snapshots para minimizar o armazenamento necessário.
- **Redimensionamento Dinâmico:** Ajustar o tamanho e o tipo dos volumes conforme a demanda para evitar pagar por recursos não utilizados.

---

## 11. Curiosidades

- **Integrado com EC2:** O Amazon EBS foi projetado para funcionar perfeitamente com instâncias EC2, permitindo uma fácil anexação e gerenciamento de volumes.
- **Alta Durabilidade:** Cada volume EBS é automaticamente replicado dentro de sua AZ para proteger contra falhas de hardware.
- **Versatilidade:** Suporta diversos sistemas de arquivos, incluindo ext4, XFS e NTFS, facilitando a integração com diferentes aplicações.
- **Snapshots em Diferentes Regiões:** É possível copiar snapshots para diferentes regiões da AWS, facilitando a recuperação de desastres e a migração de dados.

---

## 12. Conclusão

O **Amazon Elastic Block Store (EBS)** é uma solução robusta e flexível para armazenamento em blocos na nuvem AWS, oferecendo alta performance, durabilidade e segurança. Dominar suas funcionalidades e melhores práticas é essencial para **otimizar aplicações**, **proteger dados** e **controlar custos** no ambiente AWS. Com uma compreensão clara dos diferentes tipos de volumes, estratégias de backup e encriptação, e integração com ferramentas de monitoramento, você pode maximizar o valor do EBS para suas necessidades de armazenamento em nuvem.

---

## 13. Links e Referências

Para aprofundar seu conhecimento sobre o **Amazon EBS**, consulte os seguintes recursos oficiais e complementares:

- [**Documentação Oficial do Amazon EBS**](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/AmazonEBS.html)
- [**Guia de Início Rápido do Amazon EBS**](https://aws.amazon.com/pt/ebs/getting-started/)
- [**Boas Práticas de EBS**](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/EBSBestPractices.html)
- [**AWS EBS FAQs**](https://aws.amazon.com/pt/ebs/faqs/)

---