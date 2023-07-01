const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.json({ message: 'get all admin' })
})

router.get('/id/:id', (req, res) => {
	const id = req.params.id
	res.json({ message: `get admin ${id}` })
})

router.get('/dash', (req, res) => {
	res.json({ message: 'get admin dash' })
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
	res.json({ message: `delete admin ${id}` })
})

module.exports = router
