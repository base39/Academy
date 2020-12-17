import React, { Component } from 'react';
import {
	TitleStyled,
	ParagraphStyled,
	AcessStyled,
	ContainerStyled,
	LinkRouterStyled,
	SpanAlert
} from './style';
import Button from '../../components/Button/index';
import TextInput from '../../components/TextInput';
import { Container } from '@material-ui/core';
import ToastAlert from '../../components/Toast/index';

const API_URL = process.env.REACT_APP_API_URL;

export default class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {},
			name: '',
			password: '',
			confirmPassword: '',
			email: '',
			loading: false,
			alertOk: '',
			alertError: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({
			[name]: value
		});
	};

	handleValidation() {
		let { name, password, confirmPassword, email } = this.state;
		let errors = {};
		let formIsValid = true;

		if (!name || typeof name === 'undefined') {
			formIsValid = false;
			errors['name'] = 'Não pode ser vazio!';
		}

		if (!password || typeof password === 'undefined') {
			formIsValid = false;
			errors['password'] = 'Não pode ser vazio!';
		}

		if (!confirmPassword || typeof confirmPassword === 'undefined') {
			formIsValid = false;
			errors['confirmPassword'] = 'Não pode ser vazio!';
		}

		if (password !== confirmPassword) {
			formIsValid = false;
			errors['password'] = 'As senhas precisam ser iguais!';
			errors['confirmPassword'] = 'As senhas precisam ser iguais!';
		}

		if (!email || typeof email === 'undefined') {
			formIsValid = false;
			errors['email'] = 'Não pode ser vazio!';
		}

		this.setState({ errors });
		return formIsValid;
	}

	handleSubmit = event => {
		const currentComponent = this;

		currentComponent.setState({
			...currentComponent.state,
			loading: true
		});

		if (this.handleValidation()) {
			fetch(`${API_URL}/user/register`, {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify(this.state)
			}).then(function (response) {
				console.log(response);
				if (response.status === 200) {
					currentComponent.setState({
						...currentComponent.state,
						alertOk: true
					});
				} else {
					currentComponent.setState({
						...currentComponent.state,
						alertError: true
					});
				}
			});
			this.setState({
				...this.state,
				name: '',
				password: '',
				confirmPassword: '',
				email: '',
				loading: false
			});
		}

		event.preventDefault();
	};

	render() {
		const { alertError, alertOk, loading } = this.state;

		const msgAlertOk = alertOk ? (
			<ToastAlert
				variant={'filled'}
				severity={'success'}
				msg={'Usuário cadastrado com sucesso!'}
			/>
		) : (
			''
		);
		const msgAlertError = alertError ? (
			<ToastAlert
				variant={'filled'}
				severity={'error'}
				msg={'Houve um erro ao cadastrar o usuário!'}
			/>
		) : (
			''
		);

		return (
			<Container disableGutters={true}>
				<form>
					<div>
						<TitleStyled> Crie uma conta </TitleStyled>
						<ParagraphStyled>
							Crie uma conta, é fácil e gratuito. Comece completando o
							formulário abaixo. JavaScript é necessário para continuar.
						</ParagraphStyled>
					</div>
					<div>
						<AcessStyled>
							Nome de Usuário <SpanAlert>{this.state.errors['name']}</SpanAlert>
						</AcessStyled>
						<div>
							<TextInput
								name="name"
								id="outlined-basic"
								onChange={this.handleChange}
								value={this.state.name}
							/>
						</div>
					</div>
					<div>
						<AcessStyled>
							Senha (mínimo de 4 caracteres){' '}
							<SpanAlert>{this.state.errors['password']}</SpanAlert>
						</AcessStyled>
						<div>
							<TextInput
								type="password"
								name="password"
								onChange={this.handleChange}
								value={this.state.password}
							/>
						</div>
					</div>
					<div>
						<AcessStyled>
							Confirme sua senha{' '}
							<SpanAlert>{this.state.errors['confirmPassword']}</SpanAlert>
						</AcessStyled>
						<div>
							<TextInput
								type="password"
								name="confirmPassword"
								onChange={this.handleChange}
								value={this.state.confirmPassword}
							/>
						</div>
					</div>
					<div>
						<AcessStyled>
							E-mail <SpanAlert>{this.state.errors['email']}</SpanAlert>
						</AcessStyled>
						<div>
							<TextInput
								name="email"
								onChange={this.handleChange}
								value={this.state.email}
							/>
						</div>
					</div>
					<div>
						<ParagraphStyled>
							Ao clicar no botão "Registrar" abaixo, certifico que li e aceito
							os termos de uso e a política de privacidade do TMDb.
						</ParagraphStyled>
					</div>

					{msgAlertOk}
					{msgAlertError}
					<ContainerStyled>
						<Button
							onClick={this.handleSubmit}
							name={'Registrar'}
							disabled={loading}
						/>
						<LinkRouterStyled to="/">Cancelar</LinkRouterStyled>
					</ContainerStyled>
				</form>
			</Container>
		);
	}
}
