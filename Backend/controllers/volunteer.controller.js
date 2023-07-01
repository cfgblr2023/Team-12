const Volunteer = require('../models/volunteer.model')
const asyncHandler = require('express-async-handler')

const getAllVolunteers = asyncHandler(async (req, res) => {
	const allVolunteers = await Volunteer.find({}).select('-password')
	res.json(allVolunteers)
})

const getVolunteerById = asyncHandler(async (req, res) => {
	const id = req.params.id
	const volunteer = await Volunteer.findById(id)
	res.json(volunteer)
})

const getVolunteerByLoc = asyncHandler(async (req, res) => {
	const loc = req.params.loc
	const volunteer = await Volunteer.find({ locality: loc })
	res.json(volunteer)
})

const createVolunteer = asyncHandler(async (req, res) => {
	const { phoneNo, password, preference, week, educational_qualification, aadhar_no, skills, locality } = req.body
	const nVol = await Volunteer.create({ phoneNo, password, preference, week, educational_qualification, aadhar_no, skills, locality })
	res.json(nVol)
})

const updateVolunteer = asyncHandler(async (req, res) => {
	const id = req.params.id
	const { phoneNo, password, preference, week, educational_qualification, aadhar_no, skills, locality } = req.body
	const nVol = await Volunteer.findByIdAndUpdate(id, { phoneNo, password, preference, week, educational_qualification, aadhar_no, skills, locality })
	console.log(nVol)
	res.json(nVol)
})

const deleteVolunteer = asyncHandler(async (req, res) => {
	const id = req.params.id
	const vol = await Volunteer.findByIdAndDelete(id)
	res.json(vol)
})

module.exports = {
	getAllVolunteers,
	getVolunteerById,
	getVolunteerByLoc,
	createVolunteer,
	updateVolunteer,
	deleteVolunteer
}
