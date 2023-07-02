const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')

const menteeController = require('../controllers/mentee.controller')

router.get('/', menteeController.getAllMentees)

router.get('/id/:id', menteeController.getMenteeById)

router.get('/loc/:loc', menteeController.getMenteeByLoc)

router.post('/', [
	body('phoneNo')
		.isString()
		.isLength({ min: 10, max: 10 })
		.matches(/^\d+$/).withMessage('Field must contain only digits'),
	body('password')
		.isLength({ min: 8 }).withMessage('Password must be atleast 8 character long')
], menteeController.createMentee)

router.post('/login', (req, res) => {
	const body = req.body
	res.json({ op: 'LOGIN', body })
})

module.exports = router
