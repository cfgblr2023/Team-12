const Mentee = require('../models/mentee.model')
const asyncHandler = require('express-async-handler')

const getAllMentees = asyncHandler(async (req, res) => {
	const allMentees = await Mentee.find({}).select('-password')
	res.json(allMentees)
})

const getMenteeById = asyncHandler(async (req, res) => {
	const id = req.params.id
	const mentee = await Mentee.findById(id)
	res.json(mentee)
})

const getMenteeByLoc = asyncHandler(async (req, res) => {
	const loc = req.params.loc
	const mentee = await Mentee.find({ location: loc })
	res.json(mentee)
})

const createMentee = asyncHandler(async (req, res) => {
	const { phoneNo, password, name, location, education, reason, my_intrests, online } = req.body
	const nVol = await Mentee.create({ phoneNo, password, name, location, education, reason, my_intrests, online })
	res.json(nVol)
})

const updateMentee = asyncHandler(async (req, res) => {
	const id = req.params.id
	const { phoneNo, password, name, location, education, reason, my_intrests, online } = req.body
	const nVol = await Mentee.findByIdAndUpdate(id, { phoneNo, password, name, location, education, reason, my_intrests, online })
	res.json(nVol)
})

const deleteMentee = asyncHandler(async (req, res) => {
	const id = req.params.id
	const vol = await Mentee.findByIdAndDelete(id)
	res.json(vol)
})

module.exports = {
	getAllMentees,
	getMenteeById,
	getMenteeByLoc,
	createMentee,
	updateMentee,
	deleteMentee
}
