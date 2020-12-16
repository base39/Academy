import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {
	TitleStyled,
	ParagraphStyled,
	AcessStyled,
	ContainerStyled,
	LinkRouterStyled
} from './style';
import TextInput from '../../components/TextInput/index'
import Button from '../../components/Button/index'

export default class ResetPassword extends Component {
	render() {
		return (
			<Container disableGutters={true}>
				<div>
					<TitleStyled> Resetar a senha </TitleStyled>
					<ParagraphStyled>
						Insira o e-mail que você usou para criar uma conta TMDb e enviaremos
						as etapas necessárias para redefinir sua senha.
					</ParagraphStyled>
				</div>
				<div>
					<AcessStyled>E-mail</AcessStyled>
					<div>
						<TextInput placeholder={"Qual é o seu e-mail?"} />
					</div>
				</div>
				<ContainerStyled>
					<Button name={"Continuar"} />
					<LinkRouterStyled to="/login">Cancelar</LinkRouterStyled>
				</ContainerStyled>
			</Container>
		);
	}
}
