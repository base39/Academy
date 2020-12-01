/* eslint-disable object-property-newline */
/* eslint-disable max-statements */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
module.exports = () => {
	require('dotenv-safe').config();
	const jwt = require('jsonwebtoken');
	const crypto = require('crypto');
	const mailer = require('../modules/mailer');
	const { connectDb, models } = require('../../config/db'),
		controller = {};

	/* Autenticação login */
	controller.login = (req, res) => {
		connectDb().then(async () => {
			const { email, password } = req.body,
				user = await models.User.findOne({
					email,
					password
				});

			if (!user) {
				return res.status(400).send({
					'error': 'E-mail e/ou senha inválidos'
				});
			}
			const token = jwt.sign({ email }, process.env.SECRET, {
				'expiresIn': 300
			});

			return res.json({
				'auth': true,
				token
			});
		});
	};

	/* Cadastro Usuário */
	controller.register = (req, res) => {
		connectDb().then(async () => {
			const { name, email, password } = req.body,
				foundUser = await models.User.findOne({ email });

			if (foundUser) {
				return res.send({ 'error': 'Esse usuário já esta cadastrado' });
			}

			const user = new models.User({
				name,
				email,
				password
			});

			user.save(err => {
				if (err) {
					return res.status(422).send(err.message);
				}
			});

			return res.json({
				'success': true
			});
		});
	};

	controller.forgotPassword = (req, res) => {
		connectDb().then(async () => {
			const { email } = req.body;

			const user = await models.User.findOne({ email });

			if (!user) {
				return res.status(400).send({ 'error': 'Usuário não encontrado.' });
			}

			const token = crypto.randomBytes(32).toString('hex');

			const now = new Date();
			now.setHours(now.getHours() + 1);

			await models.User.findByIdAndUpdate(
				user.id,
				{
					'$set': {
						'passwordResetToken': token,
						'passwordResetExpires': now
					}
				},
				{ 'new': true, 'useFindAndModify': false }
			);

			mailer.sendMail({
				'to': email,
				'from': 'contact@themovie.com.br',
				'template': 'forgot_password',
				'context': { token }
			});

			return res.send();
		});
	};

	controller.resetPassword = (req, res) => {
		connectDb().then(async () => {
			const { email, token, password } = req.body;

			const user = await models.User.findOne({ email });

			if (!user) {
				return res.status(400).send({ 'error': 'Usuário não encontrado' });
			}

			if (token !== user.passwordResetToken) {
				return res.status(400).send({ 'error': 'Token inválido' });
			}

			const now = new Date();

			if (now > user.passwordResetExpires) {
				return res
					.status(400)
					.send({ 'error': 'Token expirado, gere um novo' });
			}

			user.password = password;

			await user.save();

			res.send();
		});
	};

	return controller;
};
