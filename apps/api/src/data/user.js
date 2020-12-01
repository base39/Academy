const mongoose = require('mongoose'),
	userSchema = new mongoose.Schema({
		'name': {
			'type': String,
			'require': true
		},
		'email': {
			'type': String,
			'unique': true,
			'required': true,
			'lowercase': true
		},
		'password': {
			'type': String,
			'required': true,
			'select': false
		}
	}),
	User = mongoose.model('User', userSchema);

module.exports = {
	User
};
