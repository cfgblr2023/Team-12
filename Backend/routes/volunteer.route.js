const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.json({ message: 'get all volunteers' })
})

router.get('/dash', (req, res) => {
	res.json({ message: 'get volunteer dash' })
})

router.get('/id/:id', (req, res) => {
	const id = req.params.id
	res.json({ message: `get volunteer ${id}` })
})

router.get('/loc/:loc', (req, res) => {
	const loc = req.params.loc
	res.json({ message: `get volunteers from ${loc}` })
})

router.post('/', (req, res) => {
	const body = req.body
	res.json({ op: 'POST', message: body })
})

router.post('/login', (req, res) => {
	const body = req.body
	res.json({ op: 'LOGIN', body })
})

router.patch('/', (req, res) => {
	const body = req.body
	res.json({ op: 'PATCH', message: body })
})

router.delete('/:id', (req, res) => {
	const id = req.params.id
	res.json({ message: `delete mentee ${id}` })
})

module.exports = router
