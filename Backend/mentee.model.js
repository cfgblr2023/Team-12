const mongoose = require('mongoose');
const MenteeSchema = new mongoose.Schema({
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
  education:{
    type:String,
    required: true
  },
  my_intrests:{
    type:String,
    required: true
  },
  mode:{
    type: Boolean,
    required: true
  },
});


const MenteeModel = mongoose.model('Mentee', MenteeSchema);

module.exports = MenteeModel;