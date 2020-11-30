/* eslint-disable consistent-return */
module.exports = () => {
	require('dotenv-safe').config();
	const jwt = require('jsonwebtoken');
	const { models, connectDb } = require('../../config/db'),
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

	return controller;
};
