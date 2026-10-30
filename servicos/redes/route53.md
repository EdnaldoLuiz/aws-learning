# AWS Route53

Estado do material: **em revisao**. Origem: anotações anteriores migradas; conferência online das fontes pendente (rede bloqueada).

<div align="center">
    <img width="250px" src="../../assets/aws-services/network/route-53.png" alt="Route53">
</div>

---

## 1. Introdução

Amazon Route 53 é um serviço de DNS (Domain Name System) altamente disponível e escalável oferecido pela AWS. Ele permite registrar domínios, rotear tráfego para recursos da AWS e monitorar o estado de saúde das aplicações, desde que health checks estejam configurados. Com suporte a múltiplas políticas de roteamento, ele é ideal para arquiteturas globais, redundantes e performáticas.

---

## 2. Políticas de Roteamento

### 2.1 Failover Routing Policy

- **Objetivo**: Alta disponibilidade.
- **Como funciona**: Redireciona tráfego para um recurso “primário” saudável. Se ele falhar, o tráfego é roteado automaticamente para um recurso “secundário” (backup).
- **Use quando**: você quer tolerância a falhas entre dois endpoints.
- **Requisitos**: Health checks devem estar ativados para que a falha seja detectada.

**🧪 Exemplos práticos:**

1. Endpoint principal em São Paulo e um backup em Virgínia. Se o de SP cair, o tráfego é redirecionado automaticamente.
2. Aplicação crítica com ALB principal e fallback para uma página de erro estática em bucket S3.
3. API de autenticação com endpoints regionais e failover DNS; replicação, promoção e consistência do banco exigem mecanismos próprios, não são feitas pelo DNS.

---

### 2.2 Geoproximity Routing Policy

- **Objetivo**: Roteamento baseado em **proximidade geográfica** com **ajustes de bias**.
- **Como funciona**: Direciona usuários para o recurso mais próximo (geograficamente), podendo aplicar bias para aumentar/diminuir a área de alcance de um endpoint.
- **Use quando**: você quer controle granular sobre a distribuição do tráfego por região.
- **Requisitos**: Confira as formas de configuração suportadas, incluindo Traffic Flow e registros aplicáveis; não presuma que Traffic Flow seja o único caminho vigente.

**🧪 Exemplos práticos:**

1. Usuários da América do Sul vão pra SP, mas você amplia o alcance pra pegar América Central com bias positivo.
2. Endpoint em Londres e outro em Frankfurt, com bias negativo em Londres para forçar menos tráfego pra lá.
3. Backend na Califórnia com mais capacidade: aplica bias positivo para captar parte do tráfego do México e América Central.

---

### 2.3 Latency Routing Policy

- **Objetivo**: Melhor performance para o usuário.
- **Como funciona**: Roteia o tráfego para o endpoint da AWS com menor latência com base em testes de rede.
- **Use quando**: você tem recursos duplicados em múltiplas regiões e quer sempre o mais rápido.
- **Vantagem**: Reduz tempo de resposta em aplicações globais.

**🧪 Exemplos práticos:**

1. Usuários na Alemanha são roteados automaticamente para Frankfurt, enquanto usuários na Índia vão para Mumbai.
2. SaaS global deployado em Oregon, Singapura e Sydney — Route 53 sempre escolhe a região mais rápida pro usuário.
3. Aplicação com múltiplas APIs replicadas: Route 53 faz roteamento inteligente baseado na menor latência de rede.

---

### 2.4 Geolocation Routing Policy

- **Objetivo**: Direcionamento por **localização geográfica** fixa (país, continente, ou mesmo estado).
- **Como funciona**: Roteia usuários com base na origem do IP para endpoints específicos definidos por região.
- **Use quando**: é necessário entregar conteúdo localizado (idioma, legal, compliance).
- **Fallback**: Pode definir um “default” para tráfego sem correspondência geográfica.

**🧪 Exemplos práticos:**

1. Usuários do Brasil acessam a versão em português, enquanto usuários dos EUA veem o conteúdo em inglês.
2. Sistema que entrega endpoints europeus a consultas identificadas naquela origem; geolocation DNS não garante residência do dado nem conformidade GDPR, pois resolvedores, caches e acesso direto precisam ser considerados.
3. Plataforma de streaming que mostra catálogos distintos para usuários do Canadá, México e Argentina.

---

## Limites, segurança e custos

As políticas influenciam respostas DNS; cache e TTL afetam a troca de destino. Health checks ou avaliação de saúde do alvo dependem do tipo de registro e recurso. A menor latência não é uma promessa para toda requisição, e a origem do resolvedor pode diferir da localização real do usuário. Configure registros padrão para consultas sem correspondência geográfica.

Proteja o registro do domínio, permissões de alteração e configuração das zonas. Custos podem incluir zonas hospedadas, consultas, domínios, health checks e Traffic Flow. Compare requisitos de disponibilidade e teste a recuperação.

- [Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)
- [Políticas de roteamento](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html)
- [Preços](https://aws.amazon.com/route53/pricing/)

[Voltar ao índice](README.md)
