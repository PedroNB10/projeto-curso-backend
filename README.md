# Capacitação Back-end byron.solutions

Fala aí pessoal, esse repositório foi desenvolvido durante a capacitação de desenvolvimento Back-end de NodeJS. Criei esse repositório para que seja mais fácil o aprendizado em conjunto com a prática do projeto desenvolvido seguindo as aulas do youtube da byron.solutions: [Capacitação Back-end](https://youtube.com/playlist?list=PLc77ERAwzB_0jKpaiWxBQlroM9v6rU8Yz&si=MFwFeRHLyaL_CFY4) lecionado pelo [Marcus Felipe Novaes Silva](linkedin.com/in/marcus-felipe-novaes-silva-b872701a9)

## Requisitos do projeto

Para começar, nesse projeto foi utilizado o banco relacional MySQL, o ambiente de execução JavaScript NodeJS, a biblioteca ExpressJS e o ORM Prisma. Para poder executar o projeto é necessário que você já tenha instalado o [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) e o [NodeJS](https://nodejs.org/en/download) em sua máquina. Se você já fez isso, siga para os próximos passos :D

## Instalação e Configuração Inicial

**1. Clone o projeto:**

```
git clone https://github.com/PedroNB10/projeto-curso-backend.git
```

**2. Acesse o servidor MySQL e coloque sua senha:**

```
mysql -u root -p
```

**3. Crie um banco de dados chamado `curso_backend`:**

`mysql>`

```
 CREATE DATABASE curso_backend;
```

**4. Adicione suas variáveis de ambiente em um arquivo .env na raiz do projeto:**

```
# Configuração do banco de dados
DATABASE_URL="mysql://user:password@localhost:3306/database_name?schema=public"

# Chave secreta para JWT
JWT_SECRET="your_secret_key_here"
```

**5. Instale as dependências do projeto:**

```
npm install
```

**6. Para você obter a migration mais atualizada utilize:**

```
npx prisma migrate dev
```

**7. Para executar o servidor utilize:**

```
npm run dev
```

**8. (Opcional) Para visualizar melhor o resultado de suas requisições http, utilize o prisma studio, através do comando:**

```
npx prisma studio
```

## Colinha dos principais comandos vistos na capacitação

### Comandos do prisma:

**Toda vez que você fizer uma alteração do `schema.prisma` mas você não tem tanta certeza se a modelagem do banco está correta,você pode testar usando o comando abaixo, ele apenas modifica o projeto de forma que você consiga testá-lo sem ter criado a migration:**

```
npx prisma db push
```

**Assim que fizer alguma alteração do `schema.prisma` é recomendado a criação de uma migration para que o histórico da modelagem do seu banco de dados esteja guardado:**

```
npx prisma migrate dev
```

### Observação para fazer o Upload de fotos:

Para você adicionar uma foto de perfil ao usuário na sua criação, é preciso usar um formato diferente do json para submeter o arquivo. Dessa forma na execução desse projeto a solulção mais viável que encontrei foi usar o Insomnia ao invés do Postman, por algum motivo o Postman identifica um problema no Header da requisição, já o Insomnia não. Para seguir, configure o Insomnia para enviar o formato `Multipart Form` e complete os campos colocando a chave e o valor, no caso da imagem você precisa colocar a chave e o tipo File:

<img src="./Screenshot from 2024-04-07 21-11-29.png">

### Comandos MySQL:

**Selecionar o banco de dados:**

`mysql>`

```
USE nome_do_banco_de_dados;
```

**Criar o banco de dados:**

`mysql>`

```
CREATE nome_do_banco_de_dados;
```

**Mostrar todas as tabelas do banco dados:**

OBS: Só é possível usar esse comando caso o banco esteja selecionado!

`mysql>`

```
SHOW TABLES;
```

**Mostrar todas as linhas de alguma tabela:**

OBS: Só é possível usar esse comando caso o banco esteja selecionado!

`mysql>`

```
SELECT * FROM nome_tabela;
```
