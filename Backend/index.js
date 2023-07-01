// import env variables
require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
	res.json({ message: 'Hello world' })
})

app.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`)
})