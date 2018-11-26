const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	username: String,
	password: {
		type: String,
		required: 'Please supply a password',
		select: false,
	},
});

module.exports = mongoose.model('User', UserSchema);