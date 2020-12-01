<h1 align="center"> 🎞🎥🎬 themovie 🎬🎥🎞 </h1>

<br>

## Índice

<br>

- [Sobre o projeto](#-sobre-o-projeto)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Instalando o projeto](#-instalando-o-projeto)
- [Recursos da API backend](#-recursos-da-api-backend)

<br>

<hr>

<br>

## 👨‍💻 Sobre o projeto

<br>

<h3> O projeto consiste em uma aplicação a qual o usuário poderá se cadastrar e fazer o login, para que possa buscar por informações de filmes e séries. Também é possível salvar listas de favoritos.</h3>

<br>

<h3>
    <a href="#">Acessar demonstração</a>
</h3>

<br>

<hr>

<br>

## 🚀 Tecnologias utilizadas

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

```bash

$ git clone https://github.com/paketacredito/Academy.git

```

### Backend

```bash

# Acessar o repositório backend
$ cd apps/api

# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm start

```

### Frontend

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

<br>

<hr>

<br>

## ⚙ Recursos da API backend

<br>

```bash

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

```
