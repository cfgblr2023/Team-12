const mongoose = require('mongoose')

const URI = process.env.MONGO_URI

const connectDB = () => mongoose.connect(URI)

module.exports = connectDB
