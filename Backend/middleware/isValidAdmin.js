const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const tokenManager = require('../tokenManager')

const isValidAdmin = asyncHandler(async (req, res, next) => {
	if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
		return res.status(401).json({ error: 'Invalid token' })
	}
	const token = req.headers.authorization.split(' ')[1]
	if (!tokenManager.isTokenActive(token)) {
		return res.status(401).json({ error: 'Session expired/invalid' })
	}
	try {
		const decoded = await jwt.decode(token)
		req.admin = decoded
		return next()
	} catch (err) {
		return res.status(401).json({ error: 'Unauthorized' })
	}
})

module.exports = isValidAdmin