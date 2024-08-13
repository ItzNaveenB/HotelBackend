const mongoose = require('mongoose');

const informationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  userType: {
    type: String,
    enum: ['Branch Admin', 'Staff', 'Customer Support'],
    required: true
  },
  userBranch: {
    type: String,
    required: true
  },
  userContact: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    default: ''
  },
  joinDate: {
    type: Date,
    required: true
  }
});

const Information = mongoose.model('Information', informationSchema);

module.exports = Information;