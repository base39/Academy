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
				<div>
					<AcessStyled>Nome de Usuário</AcessStyled>
					<div>
						<FieldStyled id="outlined-basic" variant="outlined" />
					</div>
				</div>
				<div>
					<AcessStyled>Senha</AcessStyled>
					<div>
						<FieldStyled id="outlined-basic" variant="outlined" />
					</div>
				</div>
				<ContainerStyled>
					<ButtonStyled variant="contained" color="primary">
						Entrar
					</ButtonStyled>
					<LinkRouterStyled to="/reset-password">
						Resetar a Senha
					</LinkRouterStyled>
				</ContainerStyled>
			</div>
		);
	}
}
