const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
	phoneNo: {
		type: String,
		required: [true, 'Phone number required']
	},
	password: {
		type: String,
		required: [true, 'Password required']
	}
})

module.exports = mongoose.model('Admin', adminSchema)
