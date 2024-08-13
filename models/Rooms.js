const mongoose = require("mongoose");

const roomsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  price:{
    type:String,
    required:true,
  },
  roomType: {
    type: String,
    enum: ['Deluxe room', 'Non-Deluxe room'],
    required: true
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  status:{
    type:String,
    required:true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Rooms = mongoose.model("Rooms", roomsSchema);

module.exports = Rooms;