/* eslint-disable no-process-env */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable require-await */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-requires */
/* eslint-disable global-require */
module.exports = app => {
    require('dotenv-safe').config();
    const jwt = require('jsonwebtoken');
    const { models, connectDb } = require('../../config/db'),
     controller = {};

    /* Autenticação login */
    controller.login = async (req, res) => {
        connectDb().then(async() => {
            const { email, password } = req.body,
             user = await models.User.findOne({ email }).select('+password');

            if (!user) {
                return res.status(400).send({ 'error': 'Usuário não encontrado' });
            }

            if (password !== user.password) {
 return res.status(400).send({ 'error': 'Senha inválida' });
}

            if (user) {
                const token = jwt.sign({ email }, process.env.SECRET, {
                    'expiresIn': 300
                });

return res.json({ 'auth': true,
token });
            }
        });
    };

return controller;
};
