<h1 align=center> Getting Started with Storage </h1>

<div align=center>
    <img width=300px src="https://images.credly.com/size/340x340/images/5bf37709-4b69-4cdc-9edc-af7b3370d427/image.png" alt="Getting Started with Storage badge">
</div>

## Tipos de Soluções de Armazenamento

As soluções de armazenamento desempenham um papel fundamental na arquitetura de sistemas em nuvem. Existem vários tipos, sendo os principais o armazenamento de bloco e o armazenamento de objetos. O armazenamento de bloco é indicado para dados estruturados, enquanto o armazenamento de objetos, como o Amazon S3, destaca-se por sua versatilidade e eficiência em lidar com grandes volumes de dados não estruturados.

## Recursos e Conceitos do Amazon S3

O Amazon S3, serviço líder em armazenamento de objetos, oferece recursos robustos para garantir durabilidade, disponibilidade e desempenho excepcionais. O versionamento permite o controle preciso de alterações, enquanto as políticas de controle de acesso fornecem segurança granular. Além disso, a integração com outros serviços AWS amplia as possibilidades de uso.

## Classes de Armazenamento do Amazon S3

O Amazon S3 oferece uma variedade de classes de armazenamento que você pode escolher com base em performance, acesso aos dados, resiliência e requisitos de custo de suas workloads. As classes de armazenamento do S3 são desenvolvidas especificamente para fornecer o armazenamento de custo mais baixo para diferentes padrões de acesso. As classes de armazenamento do S3 são ideais para praticamente qualquer caso de uso, incluindo aqueles com necessidades de performance exigentes, data lakes, requisitos de residência, padrões de acesso desconhecidos ou variáveis ou armazenamento de arquivo.

### As Classes do Amazon S3 estão divididas em:

<div align=center>
    <img width=100% src="https://static.us-east-1.prod.workshops.aws/public/75c83978-610a-4eca-9286-bb3c4657ff4f/static/images/002_services/002_storage/003_s3/s3_storage_classes.png?classes=shadow&width=1024px">
</div>

### Uma visão geral e detalhada sobre cada serviço:

<table>
  <thead>
    <tr>
      <th>Classe S3</th>
      <th>Casos de uso</th>
      <th>Principais Caracteristicas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Amazon S3 Standard (S3 Standard)</td>
      <td>Armazenamento de uso geral para dados acessados com frequência</td>
      <td>
        <ul>
          <li>Baixa latência e alto throughput</li>
          <li>Projetado para disponibilidade de 99,99%</li>
          <li>Adequado para aplicações na nuvem, sites dinâmicos, distribuição de conteúdo, aplicações móveis e análise de big data</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Amazon S3 Intelligent-Tiering (S3 Intelligent-Tiering)</td>
      <td>Economia automática de custos para dados com padrões de acesso desconhecidos ou variáveis</td>
      <td>
        <ul>
          <li>Economia automática de custos com base nos padrões de acesso</li>
          <li>Mantém baixa latência e alto throughput</li>
          <li>Ideal para data lakes, análise de dados e conteúdo gerado pelo usuário</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Amazon S3 Express One Zone</td>
      <td>Armazenamento de alta performance para seus dados acessados com mais frequência</td>
      <td>
        <ul>
          <li>Latência consistente de um dígito em milissegundos</li>
          <li>Melhora velocidades de acesso e reduz custos de solicitação</li>
          <li>Seleção de zona de disponibilidade para otimizar a performance</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Amazon S3 Standard-Infrequent Access (S3 Standard-IA)</td>
      <td>Dados acessados com pouca frequência que precisam de acesso em milissegundos</td>
      <td>
        <ul>
          <li>Projetado para disponibilidade de 99,9%</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)</td>
      <td>Dados recriáveis acessados com pouca frequência</td>
      <td>
        <ul>
          <li>Projetado para disponibilidade de 99,5%</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Amazon S3 Glacier Instant Retrieval</td>
      <td>Dados de longa duração que são acessados algumas vezes por ano com recuperações instantâneas</td>
      <td>
        <ul>
          <li>Recuperação em milissegundos com a mesma performance do S3 Standard</li>
          <li>Projetado para disponibilidade de 99,9%</li>
          <li>128 KB de tamanho mínimo do objeto</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Amazon S3 Glacier Flexible Retrieval (anteriormente S3 Glacier)</td>
      <td>Backup e arquivamento de dados que raramente são acessados e baixo custo</td>
      <td>
        <ul>
          <li>Projetado para disponibilidade de 99,99%</li>
          <li>Tempos de recuperação configuráveis, de minutos a horas, com recuperações em massa gratuitas</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Amazon S3 Glacier Deep Archive</td>
      <td>Arquivamento de dados que são raramente acessados e custo muito baixo</td>
      <td>
        <ul>
          <li>Projetado para disponibilidade de 99,99%</li>
          <li>Tempo de recuperação de até 12 horas</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Amazon S3 Outposts</td>
      <td>Ideal para workloads com requisitos de residência de dados locais, mantendo os dados próximos às aplicações on-premises</td>
      <td>
        <ul>
          <li>Utiliza APIs S3 e fornece uma classe de armazenamento específica para ambientes locais</li>
          <li>Projetado para durabilidade e redundância em Outposts</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>



## S3 para Criar e Gerenciar Buckets e Objetos

A habilidade de criar e gerenciar buckets eficientemente no Amazon S3 é vital. A estruturação adequada dos buckets, considerando práticas recomendadas, e a organização eficaz dos objetos facilitam a administração. A prática de upload de objetos, manipulação de metadados e a compreensão de URLs assinadas são essenciais para o uso efetivo do serviço.

## Configurações do Amazon S3 para Economia de Custos e Segurança

Otimizar as configurações do Amazon S3 envolve estratégias para equilibrar efetivamente custos e segurança. A configuração de políticas de ciclo de vida, permitindo a transição automática entre classes de armazenamento conforme a necessidade, é crucial para otimizar custos. Além disso, a implementação de políticas de controle de acesso proporciona segurança robusta, garantindo que apenas usuários autorizados tenham acesso aos dados.

## Outras Soluções de Armazenamento da AWS

Além do Amazon S3, a AWS oferece uma gama abrangente de soluções de armazenamento. O EBS (Elastic Block Store) destaca-se por fornecer armazenamento de bloco persistente para instâncias EC2, enquanto o Glacier é a escolha ideal para arquivamento de longo prazo. O EFS (Elastic File System) oferece armazenamento de arquivos altamente escalável, sendo adequado para aplicativos que exigem compartilhamento de arquivos entre instâncias EC2.

Este relatório aprofundado abrange os principais tópicos do curso, proporcionando uma compreensão detalhada dos conceitos, práticas e habilidades essenciais para a efetiva utilização das soluções de armazenamento na AWS.
