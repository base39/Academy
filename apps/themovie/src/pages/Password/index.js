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

export default class ResetPassword extends Component {
	render() {
		return (
			<div>
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
						<FieldStyled
							id="outlined-basic"
							placeholder="Qual é o seu e-mail?"
							variant="outlined"
						/>
					</div>
				</div>
				<ContainerStyled>
					<ButtonStyled variant="contained" color="primary">
						Continuar
					</ButtonStyled>
					<LinkRouterStyled to="/login">Cancelar</LinkRouterStyled>
				</ContainerStyled>
			</div>
		);
	}
}
