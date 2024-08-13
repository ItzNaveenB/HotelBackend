const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other']
  },
  address: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true
  },
  room:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rooms',
  },
  roomType: {
    type: String,
    enum: ['Deluxe room', 'Non-Deluxe room'],
    required: true
  },
  comments: {
    type: String
  }
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
