<h1 align=center> AWS Elastic Container Service (ECS) </h1>

<div align=center>
    <img width=250px src="./../../assets/aws-services/computing/ecs.png" alt="ECS">
</div>

---

# O que é?

È um serviço de orquestração de containers totalmente gerenciado que ajuda você a implementar, gerenciar e escalar suas aplicações.

O ECS abstrai a complexidade de gerenciar a infraestrutura permitindo permitindo que você se concentre no desenvolvimento e na implatação de suas aplicações, sendo a principal alternativa para quem utiliza containers Docker e pretende implementá-los na AWS.

# Modelos de Implementação

## Container no EC2

È a forma implementando seus containers em instancias do Amazon EC2. O ECS provisiona as EC2 e tambem oferece uma interface para gerenciar seus containers.

## Container no Fargate

Nesse modelo não é necessario se preocupar com em gerenciar a EC2. A AWS provisiona toda a parte da infraestrutura e sistema operacional, assim temos o container como serviço, ou seja, serverless.

## Container no Fargate com Spot Instance

Além de todos os benefícios oferecidos pelo Fargate, ainde é possivel reduzir mais o custo com instâncias Spot.

# Recursos

