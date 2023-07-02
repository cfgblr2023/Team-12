const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const { body, validationResult } = require('express-validator')
const express = require('express')
const router = express.Router()

const Admin = require('../models/admin.model')

const menteeController = require('../controllers/mentee.controller')
const volunteerController = require('../controllers/volunteer.controller')

const tokenManager = require('../tokenManager')

router.post('/login', [
	body('phoneNo')
		.isString()
		.isLength({ min: 10, max: 10 })
		.matches(/^\d+$/).withMessage('Field must contain only digits')
], asyncHandler(async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const reqBody = req.body
	const admin = await Admin.findOne({ phoneNo: reqBody.phoneNo })
	if (admin.password != reqBody.password) {
		return res.status(401).json({ error: 'Invalid credentials' })
	}
	const token = await jwt.sign({ id: admin._id }, 'secret', { expiresIn: '30d' })
	tokenManager.addToken(token)
	res.json({ token })
}))

router.get('/logout', (req, res) => {
	tokenManager.removeToken(req.headers.authorization.split(' ')[1])
	res.json({ message: 'Logged out' })
})

// Mentee Controls
router.patch('mentee/:id', menteeController.updateMentee)
router.delete('mentee/:id', menteeController.deleteMentee)

// Volunteer Controls
router.patch('volunteer/:id', volunteerController.updateVolunteer)
router.delete('volunteer/:id', volunteerController.deleteVolunteer)

module.exports = router
