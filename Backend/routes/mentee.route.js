const express = require('express')
const router = express.Router()

const menteeController = require('../controllers/mentee.controller')

router.get('/', menteeController.getAllMentees)

router.get('/id/:id', menteeController.getMenteeById)

router.get('/loc/:loc', menteeController.getMenteeByLoc)

router.post('/', menteeController.createMentee)

router.post('/login', (req, res) => {
	const body = req.body
	res.json({ op: 'LOGIN', body })
})

router.patch('/:id', menteeController.updateMentee)

router.delete('/:id', menteeController.deleteMentee)

module.exports = router
