const express = require('express')
const router = express.Router()

const volunteerController = require('../controllers/volunteer.controller')

router.get('/', volunteerController.getAllVolunteers)

router.get('/id/:id', volunteerController.getVolunteerById)

router.get('/loc/:loc', volunteerController.getVolunteerByLoc)

router.post('/', volunteerController.createVolunteer)

router.post('/login', (req, res) => {
	const body = req.body
	res.json({ op: 'LOGIN', body })
})

router.patch('/:id', volunteerController.updateVolunteer)

router.delete('/:id', volunteerController.deleteVolunteer)

module.exports = router
