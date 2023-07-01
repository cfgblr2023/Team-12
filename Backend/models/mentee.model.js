const mongoose = require('mongoose');
const MenteeSchema = new mongoose.Schema({
  phoneNo: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  my_intrests: {
    type: String,
    required: true
  },
  online: {
    type: Boolean,
    required: true
  },
  mentor_alloted: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Volunteer',
    default: null
  }
});


const MenteeModel = mongoose.model('Mentee', MenteeSchema);

module.exports = MenteeModel;