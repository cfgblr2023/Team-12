const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const ObjectId = require('mongoose').Types.ObjectId;

const Admin = require('../models/Admin');

const getAdmin = asyncHandler(async (req, res) => {
    const id = req.params.id
  if (!id) return res.status(400).json({ message: 'ID not specified' });

  const admin = await Admin.findById(id).select('-password').lean().exec();
  if (!admin) return res.status(400).json({ message: 'Admin not found' });

  res.json(admin);
});

const createAdmin = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email)
    return res.status(400).json({ message: 'All fields are required' });

  const dup = await Admin.findOne({ username }).lean().exec();
  if (dup) return res.status(409).json({ message: 'Username already exists' });

  const hashedPwd = await bcrypt.hash(password, 10);
  const adminObj = { username, password: hashedPwd, email };
  const newAdmin = await Admin.create(adminObj);

  if (newAdmin) return res.status(201).json({ message: 'Admin created' });
  res.status(400).json({ message: 'Admin not created' });
});

const updateAdmin = asyncHandler(async (req, res) => {
  const { id, username, password, email } = req.body;

  if (!id)
    return res.status(400).json({ message: 'ID required' });

  const admin = await Admin.findById(id).exec();
  if (!admin) return res.status(400).json({ message: 'Admin not found' });

  const dup = await Admin.findOne({ username }).lean().exec();
  if (dup && dup?._id.toString() !== id) return res.status(409).json({ message: 'Duplicate username' });

  if (username) admin.username = username;
  if (email) admin.email = email;
  if (password) admin.password = await bcrypt.hash(password, 10);

  const updatedAdmin = await admin.save();
  res.json({ message: 'Admin updated' });
});

const deleteAdmin = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) return res.status(400).json({ message: 'ID required' });

  const admin = await Admin.findById(id).exec();
  if (!admin) return res.status(400).json({ message: 'Admin not found' });

  const result = await admin.deleteOne();
  res.json({ message: 'Admin deleted' });
});

module.exports = {
  getAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin
};
