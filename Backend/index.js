// import env variables
require('dotenv').config()

const cors = require('cors')

const express = require('express')
const app = express()

app.use(cors({
	origin: ['http://localhost:3000'],
	credentials: true
}))
app.use(express.json())

const PORT = process.env.PORT || 5000

app.use('/volunteer', require('./routes/volunteer.route'))
app.use('/admin', require('./routes/admin.route'))
app.use('/mentee', require('./routes/mentee.route'))

app.get('/', (req, res) => {
	res.json({ message: 'Hello world' })
})

require('./config/connectDB')()

app.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`)
})