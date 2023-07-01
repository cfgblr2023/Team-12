const mongoose = require('mongoose');
const VolunteerSchema = new mongoose.Schema({
  preference: {
    type: String,
    required: true
  },
  week: {
    type: Number,
    required: true
  },
  educational_qualification: {
    type: String,
    required: true
  },
  aadhar_no: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  uploaded_links: {
    type: [String],
    default: []
  }
});


const VolunteerModel = mongoose.model('Volunteer', VolunteerSchema);

module.exports = VolunteerModel;
