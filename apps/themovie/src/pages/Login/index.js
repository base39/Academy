import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { useNavigate } from 'react-router-dom';

import {
	TitleStyled,
	ParagraphStyled,
	AcessStyled,
	ContainerStyled,
	LinkStyled,
	LinkRouterStyled
} from './style';
import Button from '../../components/Button/index';
import TextInput from '../../components/TextInput/index';

function Section() {
	const API_URL = process.env.REACT_APP_API_URL;
	const navigate = useNavigate();

	const [state, setState] = useState({});

	const handleChange = event => {
		const { value, name } = event.target;

		setState({ ...state, [name]: value });
	};

	const handleSubmit = event => {
		fetch(`${API_URL}/auth/login`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(state)
		}).then(function (response) {
			console.log(response);
			if (response.status === 200) {
				navigate('/movie');
			} else {
				alert('Usuário ou senhas inválidos!');
			}
		});
		event.preventDefault();
		console.log(state);
	};

	return (
		<>
			<Container disableGutters={true}>
				<div>
					<TitleStyled> Entre com a sua conta </TitleStyled>
					<ParagraphStyled>
						Para usar os recursos de edição e classificação do TMDb, além de
						obter recomendações pessoais, você precisará entrar com a sua conta.
						Caso você ainda não possua uma conta, registrar-se é grátis e
						simples.{' '}
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
							<TextInput onChange={handleChange} name={'email'} />
						</div>
					</div>
					<div>
						<AcessStyled>Senha</AcessStyled>
						<div>
							<TextInput
								onChange={handleChange}
								name={'password'}
								type={'password'}
							/>
						</div>
					</div>
					<ContainerStyled>
						<Button onClick={handleSubmit} name={'Entrar'} />
						<LinkRouterStyled to="/reset-password">
							Resetar a Senha
						</LinkRouterStyled>
					</ContainerStyled>
				</form>
			</Container>
		</>
	);
}

export default Section;
