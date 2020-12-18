module.exports = () => {
	require('dotenv-safe').config();
	const jwt = require('jsonwebtoken');
	const crypto = require('crypto');
	const mailer = require('../modules/mailer');
	const { i18n } = require('../i18n');
	const { connectDb, models } = require('../../config/db');
	const controller = {};

	/* Autenticação login */
	controller.login = (req, res) => {
		connectDb().then(async () => {
			const { email, password } = req.body,
				user = await models.User.findOne({
					email,
					password
				});

			if (!user) {
				return res.status(400).send({ 'error': i18n.__('emailPassword') });
			}
			const token = jwt.sign({ email }, process.env.SECRET, {
				'expiresIn': 300
			});

			return res.json({
				'auth': true,
				token,
				'success': true
			});
		});
	};

	/* Cadastro Usuário */
	controller.register = (req, res) => {
		connectDb().then(async () => {
			const { name, email, password } = req.body;
			const foundUser = await models.User.findOne({ email });

			if (foundUser) {
				return res.send({ 'error': i18n.__('registeredUser') });
			}

			const user = new models.User({
				name,
				email,
				password
			});

			await user.save(error => {
				if (error) {
					return res.status(422).send({ 'error': i18n.__('registerUser') });
				}

				return res.json({
					'success': true
				});
			});
		});
	};

	controller.forgotPassword = (req, res) => {
		connectDb().then(async () => {
			const { email } = req.body;

			const user = await models.User.findOne({ email });

			if (!user) {
				return res.status(400).send({ 'error': i18n.__('userNotFound') });
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
				return res.status(400).send({ 'error': i18n.__('userNotFound') });
			}

			if (token !== user.passwordResetToken) {
				return res.status(400).send({ 'error': i18n.__('invalidToken') });
			}

			const now = new Date();

			if (now > user.passwordResetExpires) {
				return res.status(400).send({ 'error': i18n.__('expiredToken') });
			}

			user.password = password;

			await user.save();

			res.send();
		});
	};

	return controller;
};
