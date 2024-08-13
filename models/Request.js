const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
  },
  hotel: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    enum: ["Deluxe", "Non-Deluxe"],
    required: true,
  },
  bedCount: {
    type: String,
    required: true,
  },
  extraServices: {
    type: String,
    enum: [
      "Extra Bed",
      "Spa Services",
      "Fitness Centre",
      "Tours and Excursions",
      "Laundary and Dry Cleaning",
      "Valet Parking",
      "Transportation",
      "Conference Room",
      "Pet Services",
    ],
    default: [],
  },
  price: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    enum: ["Cash", "Online Payment"],
    required: true,
  },
  paying: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    validate: {
      validator: function(v) {
       
        if (this.Method === 'Online Payment' && !v) {
          return false;
        }
        return true;
      },
      message: 'TransactionId is required for online payment',
    },
  },
  comments: {
    type: String,
    default:"",
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Available", "Booked"],
  },
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
