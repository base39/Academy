import React, { Component } from 'react';
import {
	TitleStyled,
	ParagraphStyled,
	AcessStyled,
	FieldStyled,
	ButtonStyled,
	ContainerStyled,
	LinkStyled,
	LinkRouterStyled
} from '../styled-components-example/styles';

export default class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	emailChange = event => {
		this.setState({ email: event.target.value });
	};

	passChange = event => {
		this.setState({ password: event.target.value });
	};

	handleSubmit = event => {
		fetch('http://localhost:8080/auth/login', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(this.state)
		}).then(function (response) {
			console.log(response);
			return response.json();
		});
		event.preventDefault();
	};

	render() {
		return (
			<div>
				<div>
					<TitleStyled> Entre com a sua conta </TitleStyled>
					<ParagraphStyled>
						Para usar os recursos de edição e classificação do TMDb, além de
						obter recomendações pessoais, você precisará entrar com a sua conta.
						Caso você ainda não possua uma conta, registrar-se é grátis e
						simples. <LinkStyled>Clique aqui</LinkStyled> para começar.
					</ParagraphStyled>
					<ParagraphStyled>
						Se você já fez o seu cadastro, mas ainda não recebeu seu e-mail de
						verificação, <LinkStyled>clique aqui</LinkStyled> que tentaremos
						enviá-lo novamente.
					</ParagraphStyled>
				</div>
				<form>
					<div>
						<AcessStyled>Nome de Usuário</AcessStyled>
						<div>
							<FieldStyled
								id="userInput"
								onChange={this.emailChange}
								variant="outlined"
							/>
						</div>
					</div>
					<div>
						<AcessStyled>Senha</AcessStyled>
						<div>
							<FieldStyled
								id="passInput"
								onChange={this.passChange}
								variant="outlined"
							/>
						</div>
					</div>
					<ContainerStyled>
						<ButtonStyled
							variant="contained"
							color="primary"
							onClick={this.handleSubmit}
						>
							Entrar
						</ButtonStyled>
						<LinkRouterStyled to="/reset-password">
							Resetar a Senha
						</LinkRouterStyled>
					</ContainerStyled>
				</form>
			</div>
		);
	}
}
