const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.json({ message: 'get all mentees' })
})

router.get('/id/:id', (req, res) => {
	const id = req.params.id
	res.json({ message: `get mentee ${id}` })
})

router.get('/loc/:loc', (req, res) => {
	const loc = req.params.loc
	res.json({ message: `get mentees from ${loc}` })
})

router.get('/dash', (req, res) => {
	res.json({ message: 'get mentee dash' })
})

router.post('/', (req, res) => {
	const body = req.body
	res.json({ op: 'POST', body })
})

router.post('/login', (req, res) => {
	const body = req.body
	res.json({ op: 'LOGIN', body })
})

router.patch('/', (req, res) => {
	const body = req.body
	res.json({ op: 'PATCH', body })
})

router.delete('/:id', (req, res) => {
	const id = req.params.id
	res.json({ message: `delete mentee ${id}` })
})

module.exports = router
