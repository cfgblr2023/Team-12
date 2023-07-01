const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const express = require('express')
const router = express.Router()

const Admin = require('../models/admin.model')

const menteeController = require('../controllers/mentee.controller')
const volunteerController = require('../controllers/volunteer.controller')

const isValidAdmin = require('../middleware/isValidAdmin')
const tokenManager = require('../tokenManager')

router.post('/login', asyncHandler(async (req, res) => {
	const body = req.body
	const admin = await Admin.findOne({ phoneNo: body.phoneNo })
	if (admin.password != body.password) {
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
