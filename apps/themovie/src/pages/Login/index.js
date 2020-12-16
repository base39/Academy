import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

import {
	TitleStyled,
	ParagraphStyled,
	AcessStyled,
	ContainerStyled,
	LinkStyled,
	LinkRouterStyled
} from './style';
import Button from '../../components/Button/index';
import TextInput from '../../components/TextInput/index'

export default class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};

	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
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
			<Container disableGutters={true}>
				<div>
					<TitleStyled> Entre com a sua conta </TitleStyled>
					<ParagraphStyled>
						Para usar os recursos de edição e classificação do TMDb, além de
						obter recomendações pessoais, você precisará entrar com a sua conta.
						Caso você ainda não possua uma conta, registrar-se é grátis e
						simples.
						<LinkRouterStyled to="/register">Clique aqui</LinkRouterStyled> para
						começar.
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
						<TextInput onChange={this.handleChange} name={"email"} />
						</div>
					</div>
					<div>
						<AcessStyled>Senha</AcessStyled>
						<div>
						<TextInput onChange={this.handleChange} name={"password"} />
						</div>
					</div>
					<ContainerStyled>
						<Button onClick={this.handleSubmit} name={'Entrar'} />
						<LinkRouterStyled to="/reset-password">
							Resetar a Senha
						</LinkRouterStyled>
					</ContainerStyled>
				</form>


			</Container>
		);
	}
}
