Boa, Ednaldo! 👍 Realmente está faltando essa explicação no guia. Bora completar o README adicionando uma seção **sobre o endereço `XX-XXX-XXX-XXX`** que aparece no comando SSH.

Aqui está a versão com a seção extra:

---

<h1 align=center> Conectando em uma Instância EC2 via SSH </h1>

---

## 1. Pré-requisitos

Antes de conectar na sua instância **Amazon EC2**, você precisa:

* Uma **chave .pem** gerada no momento da criação da instância.
* O **IP público** ou o **Public DNS** da instância (disponível no console da AWS).
* Ter o **SSH instalado** (Linux/Mac já têm nativo; no Windows use PowerShell, Git Bash ou WSL).

---

## 2. Ajustar permissões da chave `.pem`

No terminal, vá até a pasta onde está sua chave e rode:

```bash
chmod 400 minha-chave.pem
```

Isso garante que **somente você** pode ler a chave (caso contrário o SSH recusa a conexão).

---

## 3. Usuários padrão por AMI

Dependendo da imagem (AMI) usada na EC2, o usuário muda:

| AMI                           | Usuário padrão       |
| ----------------------------- | -------------------- |
| Amazon Linux 2 / Amazon Linux | `ec2-user`           |
| Ubuntu                        | `ubuntu`             |
| Debian                        | `admin` ou `debian`  |
| CentOS                        | `centos`             |
| RHEL                          | `ec2-user` ou `root` |
| SUSE                          | `ec2-user` ou `root` |

👉 Em **laboratórios AWS Academy e setups comuns**, o login padrão costuma ser `ec2-user`.

---

## 4. Conectar via SSH

Com tudo pronto, rode no terminal:

```bash
ssh -i minha-chave.pem ec2-user@ec2-XX-XXX-XXX-XXX.compute-1.amazonaws.com
```

Ou, se for IP público:

```bash
ssh -i minha-chave.pem ubuntu@54.210.123.45
```

---

## 5. O que é `XX-XXX-XXX-XXX`?

Esse trecho (`XX-XXX-XXX-XXX`) representa o **endereço IPv4 público** da sua instância EC2 ou faz parte do **Public DNS** que a AWS gera automaticamente.

* O **IPv4 público** é necessário para que você consiga acessar a instância a partir da internet.
* Sem ele, só seria possível se conectar de dentro da própria **VPC** (por exemplo, via bastion host ou VPN).
* Esse IPv4 pode ser **dinâmico** (muda quando você para e inicia a instância) ou **fixo** (caso associe um **Elastic IP**).

👉 Se você precisa que o servidor **sempre tenha o mesmo IP**, use um **Elastic IP**.

---

## 6. Dicas úteis

* Se sua instância não responde, verifique:

  * **Security Group** permitindo porta **22/TCP**.
  * **NACL** não bloqueando tráfego.
  * **Instância em estado “running”**.

* Para não digitar o caminho toda vez, você pode salvar sua chave no diretório `~/.ssh/` e usar um **config** com alias.

Exemplo (`~/.ssh/config`):

```txt
Host minha-ec2
    HostName 54.210.123.45
    User ec2-user
    IdentityFile ~/.ssh/minha-chave.pem
```

E depois conectar só com:

```bash
ssh minha-ec2
```

---

Quer que eu adicione também uma **seção rápida sobre Elastic IP** explicando quando faz sentido usar e quando não (tipo boa prática de prova e de produção)?
