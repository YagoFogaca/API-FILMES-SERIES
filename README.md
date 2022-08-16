# Como criar uma API usando node.js, express mongoDB

## Conceitos:

- POST = Criar
- GET = Pegar
- PUT/PATCH = Atuzalizar os dados / atualizar um campo do dado
- DELETE = Excluir

## 1º Passo configurar ambiente:

### Configuração ao meu gosto, você pode altera-las quando quiser.

- Criar uma pasta .vscode na raiz do projeto e dentro dela uma arquivo chamado settings.json.
- Dentro do arquivo settings.json o seguinte código:

{
"editor.codeActionsOnSave": {
"source.fixAll": true
},
"files.eol": "\n",
"files.insertFinalNewline": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"[javascript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
}

- Na raiz do projeto crie um arquivo .prettierrc.json e o seguinte código:

{
"trailingComma": "all",
"singleQuote": true,
"endOfLine": "lf",
"tabWidth": 2,
"arrowParens": "always",
"printWidth": 80
}

- Retorne nos dois arquivos criados acima e salve para realizar a formatação

- Crie uma arquivo chamado .gitignore na riaz do projeto

- Recomendo que instale a extensão do vscode chamada thunder client
  > - Ela serve para testarmos nossa aplicação dentro do proprio vscode
  > - ID: rangav.vscode-thunder-client

## 2º Configurações iniciais :

1.  Faça o download do node.js no site https://nodejs.org/en/download/
2.  Abra o terminal no proprio vscode e rode o seguinte comando:

    > npm init -y

    > > Com isso foi gerado o seguinte arquivo: package.json, ele tera as dependencias do projeto e suas configurações

3.  Instale o express com o seguinte comando:
    > npm i express
4.  Crie na raiz do projeto um arquivo chamado index.js ou app.js
5.  Instale a biblioteca nodemon pelo comando:

    > npm i nodemon -D

    > > O nodemon é uma biblioteca que facilita a vida de quem é Dev Node, ela tem a função de ver as alterações no nosso código e reiniciar a nossa aplicação automaticamente, sem a necessidade de que façamos isso.

6.  Para usar o nodemon, devemos ir no arquivo package.json e adicionar o seguinte código

    > "scripts": {
    > "start": "node index",
    > "dev": "nodemon index"
    > },

    > > Subistituimos o antigo "scripts" pelo o novo

7.  Instale a biblioteca cors com o seguinte comando:

    > npm i cors

8.  Por ultimo, crie na riaz do projeto uma pasta chamada:

    - src

    - Dentro de src 3 pastas:

    > - controllers => Dentro o arquivo personagens.controller.js
    > - services => Dentro o arquivo personagens.services.js
    > - routes => Dentro o arquivo personagens.routes.js

## 3º Criando as primeiras rotas:

1. Antes de criar as rotas, devemos fazer algumas requisições no index

   - express > const express = require('express');
   - cors > const cors = require('cors');

2. Precisamos agora executar o express e pegar certas libs

   - const app = express();

3. Agora app recebeu todas as libs do express, e vamos usar algumas.

   - app.use(express.json());
   - app.use(cors());

4. Definimos uma porta para nosso servidor escutar
   - const port = 3000; => sites geramente usam 8080;

### Seu código deve ter ficado dessa forma.

### Recomendo usar os mesmos nomes de variaveis para não se perder mais a frente.

    - const express = require('express');

    - const cors = require('cors');

    - const port = 3000;

    - const app = express();

    - app.use(express.json());

    - app.use(cors());

5. Agora vamos criar a primeira rota

   - No index.js (app.js) colocamos o seguinte código:
     - app.get('/', (req, res) => {
       res.status(200).send('Hello World!');
     - });
   - Com isso definimos a nossa primeira rota
   - Ainda no index, iremos adicionar um mensagem, avisando onde está nosso servidor
     - app.listen(port, () => {
       console.log(`Servidor rodando em http://localhost:${port}`);
     - });

6. No terminal executamos o seguinte comando:

   - npm run dev
   - Para usar o nodemon e não precisar ficar iniciando o servidor toda vez que fizermos alguma alteração

7. Apartir de agora você deve entrar nesse link do YouTube para continuar montando a API comigo explicando passo a passo
