<h1 align="center"> 🎬 themovie 🎬 </h1>

<br>

## Índice

<br>

- [Sobre o projeto](#-sobre-o-projeto)
- [Principais tecnologias utilizadas](#-principais-tecnologias-utilizadas)
- [Instalando o projeto](#-instalando-o-projeto)
- [Backend](#-backend)
- [Frontend](#-frontend)

<br>

<hr>

<br>

## 👨‍💻 Sobre o projeto

<br>

<h3> O projeto consiste em uma aplicação a qual o usuário poderá se cadastrar e fazer o login, para que possa buscar por informações e recomendações de filmes.</h3>

<br>

<h3>
    <a href="https://academy.paketa.vercel.app/" target="_blank">Acessar demonstração</a>
</h3>

<br>

<hr>

<br>

## 🚀 Principais tecnologias utilizadas

<br>

- [ReactJS](https://pt-br.reactjs.org/)

- [Material-UI](https://material-ui.com/pt/)

- [Styled-Components](https://styled-components.com/)

- [NodeJS](https://nodejs.org/en/)

- [Express](https://expressjs.com/pt-br/)

- [Mongoose](https://mongoosejs.com/)

<br>

<hr>

<br>

## 📂 Instalando o projeto

<br>

### Clonando o repositório

<br>

```bash

$ git clone https://github.com/paketacredito/Academy.git

```

## 💻 Backend

<br>

<h3>Esta API apresenta duas responsabilidades, a primeira é responsável por realizar cadastro de usuários, assim como possibilitar login, e resetar a senha do usuário,</h3>
<h3>A segunda é responsável por trazer a listagem de todos os filmes a partir da API externa TMDB, também é possível através da API, fazer buscas personalizadas de filmes.</h3>

<br>

```bash

# Acessar o repositório backend
$ cd apps/api

# Instalar as dependências
$ npm install

# Iniciar o projeto
$ nodemon server.js

```

<br>

<h3>Através do Postman ou de outra aplicação de sua preferência, acessar o localhost na porta 3000, para visualização dos recursos: </h3>

<br>

```bash
###################
### API USUÁRIO ###
###################

# Cadastro de usuário
/user/register

{
    "name": "",
    "email": "",
    "password": ""
}

# Login de usuário
/auth/login

{
    "email": "",
    "password": ""
}

# Solicitar alteração de senha
/auth/forgot-password

{
    "email": ""
}

# Alterar senha
/auth/forgot-password

{
    "email": "",
    "token": "",
    "password": ""
}

##################
### API FILMES ###
##################

# Responsável pela listagem dos filmes
/movies

# Responsável por listar os filmes a partir do ID especificado
/movies/:id

# Responsável por trazer os créditos dos filmes a partir do ID especificado
/movies/credits/:id

# Responsável por trazer a lista de recomendações de filmes a partir do ID especificado
/movies/recommendation/:id

# Responsável por listar todos os gêneros disponíveis de filmes
/genres

```

## 📹 Frontend

<br>

```bash

# Acessar o repositório backend
$ cd apps/themovie

# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm start

# Gerar build para produção
$ npm build

```
