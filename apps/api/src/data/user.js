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
			'minlength': 4
		},
		'passwordResetToken': {
			'type': String
		},
		'passwordResetExpires': {
			'type': Date
		}
	}),
	User = mongoose.model('User', userSchema);

module.exports = {
	User
};
