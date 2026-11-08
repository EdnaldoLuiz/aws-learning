# Revisão por recuperação ativa — SAA-C03

Estado do material: **em revisao**. Progresso pessoal: pendente. Este roteiro organiza uma sessão; não registra que ela aconteceu.

1. Escolha um assunto do [mapa inicial](README.md#mapa-inicial-de-assuntos) e uma pergunta concreta.
2. Feche as notas e explique conceitos, decisões e limites com suas palavras.
3. Resolva um [cenário](../../laboratorios/cenarios-fundamentais/README.md) ou uma [pergunta fundamental](../perguntas-fundamentais.md), explicitando o requisito decisivo.
4. Confira a explicação principal e as fontes oficiais; se não puder acessar, marque a confirmação pendente.
5. Registre dúvidas e raciocínio incorreto em [erros](erros.md), com correção e motivo.
6. Atualize progresso e próxima revisão no [roadmap](../../ROADMAP.md); intervalos ajustáveis de 1, 7 e 30 dias podem orientar a agenda depois da sessão real.

Critério de conclusão da sessão: explicar o conceito sem copiar, resolver um cenário com justificativa e identificar ao menos uma condição que muda a escolha. Isso não equivale a dominar todo o assunto nem a estar pronto para o exame.

## Registro de compreensão — Static stability

Sessão de estudo: **novembro de 2026, Operação SAA — Semana 1, Dia 1**. O exercício abaixo registra uma dúvida real e a correção técnica e linguística, **não** um conceito já dominado.

### Original e versão corrigida lado a lado

| Frase original (exatamente como escrita) | Versão com inglês corrigido (mesma pergunta) |
| --- | --- |
| "so, the other question, static stability is like, each instance can handle all the traffic, like, a single component can always handle everything and never having a shared work with other equal components?" | "Does static stability mean that each instance must be able to handle all the traffic by itself, without sharing the workload with other instances?" |

**Importante:** a segunda coluna corrige **o inglês e a clareza da pergunta**, mas **não transforma a hipótese em uma afirmação técnica correta**. A resposta à pergunta é **não**.

### Ajustes explicados

| Trecho original | Ajuste ou problema | Por quê |
| --- | --- | --- |
| "so, the other question" | Ir direto a "Does static stability mean..." | A introdução coloquial é desnecessária; a pergunta fica mais clara e direta. |
| "static stability is like" | "Does static stability mean that..." | Para perguntar por uma definição, essa construção é mais natural e gramatical. |
| "each instance can handle all the traffic" | "each instance must be able to handle all the traffic" | A reformulação preserva a hipótese, mas expressa precisamente a dúvida sobre um requisito. **A hipótese técnica continua incorreta.** |
| "like, a single component can always handle everything" | Retirar a repetição e a afirmação absoluta | Repete a ideia e usa **always**, que exagera o conceito. |
| "never having a shared work with other equal components" | "without sharing the workload with other instances" | **Workload** é o termo habitual para carga de trabalho; **share the workload** é a expressão idiomática. Instâncias equivalentes podem, sim, compartilhar tráfego. |

### Resposta técnica correta

> **Static stability does not mean that each instance must handle all traffic alone. It means the surviving infrastructure already has enough capacity to handle the required workload after an anticipated failure, without relying on provisioning new resources during that failure.**

Por exemplo, com demanda de **1.500 req/s** e duas AZs contendo **três EC2 de 500 req/s cada**, **uma AZ inteira** pode atender à demanda após a falha da outra. As três instâncias remanescentes **compartilham** os 1.500 req/s; nenhuma precisa atender tudo sozinha. A detecção da falha e o roteamento ainda podem levar algum tempo.

**Frase para praticar em inglês:**

> "Static stability means that the remaining healthy instances can handle the full workload together, without launching new instances during the failure."

**Autoavaliação:** dúvida registrada e explicação fornecida; ainda falta explicar o conceito com suas próprias palavras em uma nova tentativa. Não marcar como dominado automaticamente.

**Referências:** [fundamentos — Reliability e estabilidade estática](../../fundamentos/well-architected.md) · [AWS Builders' Library](https://aws.amazon.com/builders-library/static-stability-using-availability-zones/)

[Voltar à trilha](README.md) · [Anotações](anotacoes.md)
