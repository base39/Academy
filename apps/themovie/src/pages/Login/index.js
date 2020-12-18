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
import ToastAlert from '../../components/Toast/index';

function Section() {
	const API_URL = process.env.REACT_APP_API_URL;
	const navigate = useNavigate();

	const [state, setState] = useState({});
	const [loading, setLoading] = useState();
	const [alert, setAlert] = useState();
	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = event => {
		const { value, name } = event.target;

		setState({ ...state, [name]: value });
	};

	const handleSubmit = event => {
		setLoading(true);
		fetch(`${API_URL}/auth/login`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(state)
		})
			.then(res => res.json())
			.then(function (response) {
				console.log(response);
				if (response.success) {
					navigate('/movie');
				} else {
					setAlert(true);
					setLoading(false);
					setErrorMessage(response.error);
				}
			});
		event.preventDefault();
	};

	const msgAlert = alert ? (
		<ToastAlert variant={'filled'} severity={'error'} msg={errorMessage} />
	) : (
		' '
	);

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
					{msgAlert}
					<ContainerStyled>
						<Button onClick={handleSubmit} name={'Entrar'} disabled={loading} />
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
