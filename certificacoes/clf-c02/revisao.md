# Revisão por recuperação ativa — CLF-C02

Estado do material: **em revisao**. Progresso pessoal: pendente. Este roteiro organiza uma sessão; não registra que ela aconteceu.

1. Escolha um assunto do [mapa inicial](README.md#mapa-inicial-de-assuntos) e uma pergunta concreta.
2. Feche as notas e explique conceitos, decisões e limites com suas palavras.
3. Resolva um [cenário](../../laboratorios/cenarios-fundamentais/README.md) ou uma [pergunta fundamental](../perguntas-fundamentais.md), explicitando o requisito decisivo.
4. Confira a explicação principal e as fontes oficiais; se não puder acessar, marque a confirmação pendente.
5. Registre dúvidas e raciocínio incorreto em [erros](erros.md), com correção e motivo.
6. Atualize progresso e próxima revisão no [roadmap](../../ROADMAP.md); intervalos ajustáveis de 1, 7 e 30 dias podem orientar a agenda depois da sessão real.

Critério de conclusão da sessão: explicar o conceito sem copiar, resolver um cenário com justificativa e identificar ao menos uma condição que muda a escolha. Isso não equivale a dominar todo o assunto nem a estar pronto para o exame.

## Retomada do resumo original: identidades

A antiga distinção entre root como “conta pessoal” e IAM como “conta da empresa” foi corrigida. Root é uma identidade privilegiada da conta; usuários IAM e sessões de funções/federação são mecanismos de acesso com permissões próprias. Tipos de proprietário da conta não são definidos por esses mecanismos.

Antes de consultar, explique quando usar root, como MFA reduz riscos e por que acesso federado temporário favorece trabalho diário. Confira em [responsabilidade compartilhada](../../fundamentos/responsabilidade-compartilhada.md) e [IAM](../../servicos/seguranca-identidade/iam.md).

[Voltar à trilha](README.md) · [Anotações](anotacoes.md)
