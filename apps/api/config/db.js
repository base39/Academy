const mongoose = require('mongoose');
const { User } = require('../src/data/user'),
	connectionParams = {
		'useNewUrlParser': true,
		'useCreateIndex': true,
		'useUnifiedTopology': true
	},
	connectDb = () =>
		mongoose.connect(process.env.DB_CONNECTION, connectionParams);
models = { User };

module.exports = {
	connectDb,
	models
};
