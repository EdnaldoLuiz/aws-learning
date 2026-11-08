# Revisão por recuperação ativa — SAA-C03

Estado do material: **em revisao**. Progresso pessoal: pendente. Este roteiro organiza uma sessão; não registra que ela aconteceu.

1. Escolha um assunto do [mapa inicial](README.md#mapa-inicial-de-assuntos) e uma pergunta concreta.
2. Feche as notas e explique conceitos, decisões e limites com suas palavras.
3. Resolva um [cenário](../../laboratorios/cenarios-fundamentais/README.md) ou uma [pergunta fundamental](../perguntas-fundamentais.md), explicitando o requisito decisivo.
4. Confira a explicação principal e as fontes oficiais; se não puder acessar, marque a confirmação pendente.
5. Registre dúvidas e raciocínio incorreto em [erros](erros.md), com correção e motivo.
6. Atualize progresso e próxima revisão no [roadmap](../../ROADMAP.md); intervalos ajustáveis de 1, 7 e 30 dias podem orientar a agenda depois da sessão real.

Critério de conclusão da sessão: explicar o conceito sem copiar, resolver um cenário com justificativa e identificar ao menos uma condição que muda a escolha. Isso não equivale a dominar todo o assunto nem a estar pronto para o exame.

## Dúvida técnica — Static stability

Sessão: **Operação SAA — Semana 1, Dia 1 (novembro de 2026)**.

**Dúvida identificada:** estabilidade estática exige que cada instância consiga suportar todo o tráfego sozinha, sem dividir a carga?

**Resposta:** não. O requisito é que **os recursos saudáveis remanescentes, em conjunto**, já tenham capacidade suficiente para atender à demanda prevista após uma falha, sem depender de provisionar novos recursos durante o incidente.

**Exemplo:** uma aplicação recebe **1.500 req/s** e opera em duas AZs. Cada AZ tem **três instâncias EC2 capazes de 500 req/s cada**, totalizando **1.500 req/s por AZ**. Se uma AZ falhar, as três instâncias sobreviventes **compartilham a carga**, sem que uma única instância precise processar todas as requisições.

**Ponto para revisar:** distinguir capacidade por instância de capacidade agregada por zona e justificar o custo da capacidade reservada. A dúvida foi esclarecida na sessão, mas a compreensão deve ser verificada novamente por recuperação ativa.

**Referência:** [Static stability no Well-Architected](../../fundamentos/well-architected.md) · [AWS Builders' Library](https://aws.amazon.com/builders-library/static-stability-using-availability-zones/)

[Voltar à trilha](README.md) · [Anotações](anotacoes.md)
