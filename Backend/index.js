// import env variables
require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

app.use('/volunteer', require('./routes/volunteer.route'))
app.use('/admin', require('./routes/admin.route'))
app.use('/mentee', require('./routes/mentee.route'))

app.get('/', (req, res) => {
	res.json({ message: 'Hello world' })
})

app.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`)
})