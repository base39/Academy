import React, { Component } from 'react';
import {
  TitleStyled,
  ParagraphStyled,
  AcessStyled,
  FieldStyled,
  ButtonStyled,
  ContainerStyled,
  LinkRouterStyled
} from '../styled-components-example/styles';

export default class Register extends Component {

  constructor(props) {
    super(props);

    this.state = { errors: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleValidation() {
    let { name, password, confirmPassword, email } = this.state;
    let errors = {};
    let formIsValid = true;

    if (!name || typeof name === "undefined") {
      formIsValid = false;
      errors["name"] = "Não pode ser vazio!";
    }

    if (!password || typeof password === "undefined") {
      formIsValid = false;
      errors["password"] = "Não pode ser vazio!";
    }

    if (!confirmPassword || typeof confirmPassword === "undefined") {
      formIsValid = false;
      errors["confirmPassword"] = "Não pode ser vazio!";
    }

    if(password !== confirmPassword) {
      formIsValid = false;
      errors["password"] = "As senhas precisam ser iguais!";
      errors["confirmPassword"] = "As senhas precisam ser iguais!";
    }

    if (!email || typeof email === "undefined") {
      formIsValid = false;
      errors["email"] = "Não pode ser vazio!";
    }

    this.setState({ errors });
    return formIsValid;
  }

  handleSubmit(event) {

    if (this.handleValidation()) {
      fetch('http://localhost:8080/user/register', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(this.state)
      }).then(function (response) {
        console.log(response);
        return response.json();
      });
    }

    event.preventDefault();
  }

  render() {
    return (
      <>
        <form>
          <div>
            <TitleStyled> Crie uma conta </TitleStyled>
            <ParagraphStyled>
              Crie uma conta, é fácil e gratuito. Comece completando o formulário abaixo. JavaScript é necessário para continuar.
					</ParagraphStyled>
          </div>
          <div>
            <AcessStyled>
              Nome de Usuário <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
            </AcessStyled>
            <div>
              <FieldStyled name="name" id="outlined-basic" variant="outlined" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <AcessStyled>
              Senha (mínimo de 4 caracteres) <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
            </AcessStyled>
            <div>
              <FieldStyled type="password" name="password" id="outlined-basic" variant="outlined" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <AcessStyled>
              Confirme sua senha <span style={{ color: "red" }}>{this.state.errors["confirmPassword"]}</span>
            </AcessStyled>
            <div>
              <FieldStyled type="password" name="confirmPassword" id="outlined-basic" variant="outlined" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <AcessStyled>
              E-mail <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
            </AcessStyled>
            <div>
              <FieldStyled name="email" id="outlined-basic" variant="outlined" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <ParagraphStyled>
              Ao clicar no botão "Registrar" abaixo, certifico que li e aceito os termos de uso e a política de privacidade do TMDb.
          </ParagraphStyled>
          </div>

          <ContainerStyled>
            <ButtonStyled onClick={this.handleSubmit} variant="contained" color="primary">
              Registrar
					  </ButtonStyled>
            <LinkRouterStyled to="/">
              Cancelar
					  </LinkRouterStyled>
          </ContainerStyled>
        </form>
      </>
    );
  }

}
