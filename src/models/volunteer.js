const mongoose = require('mongoose');
const validator = require('validator');

const volunteerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid');
      }
    },
  },
  gender: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
})


const Volunteer = mongoose.model("Volunteer",volunteerSchema);
module.exports = Volunteer;
