# Challenger Fullstack

## Descrição do projeto
Construir aplicação fullstack com node.js e react.js. Onde será desenvolvido uma API/REST com Express, para ser consumida pelo frontend co react.js. O intuido deste teste, é desenvolver um crud onde o usuário poderá  se cadastrar, logar na aplicação, com validações de cpf e telefone. Apos cadastrado e logado o usuário poderá editar e remover a sua conta. Dentro da aplicação o usuário poderá inicar um chat, através da criação da sala, com o nome da mesma, onde outros usuarios cadastrados na aplicação poderam entrar, através do nome da sala.
<hr>

## Tecnologias utilizadas 
* Javascript
* React.js
* Hooks (useState, useEffect, useHistory, useRef, useContext)
* Node.js
* Express
* Socket.io
* MongoDB
<hr>

## Como utilizar este projeto 🚀🚀
 * Possuir o Node.js instalado
 * VScode instalado
 * Para rodar a aplicação:
 * Clonar este repositório através do git clone "link deste repositório"
 * Abrir o VScode na pasta do projeto clonado
 * Necessário possuir url para conexão com o bando de dados MongoDB
 * Colar a url do seu banco no arquivo `.env ` da pasta `server` e subistituiar a `PORT`

 ## Iniciando a aplicação

 #### Backend
 * Abra o terminal na pasta do projeto e digite `npm i` para instalar as dependências
 * Iniciar a aplicação: `npm start`

  #### Frontend
 * Abra o terminal na pasta do projeto e digite `npm i` para instalar as dependências
 * Iniciar a aplicação: `npm start`

 ## Regras de negócio*

 * O usuário só poderá acessar determinadas rotas, caso esteja logado na aplicação
 * Só poderá cadastrar um único cpf válido por vez
 * Ssitema de login é através do cpf que é único na aplicação