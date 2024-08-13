
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  invoice: {
    type: String,
    required: true,
    unique: true,
  },
  total: {
    type: String,
    required: true,
  },
  paid: {
    type: String,
    required: true,
  },
  balance: {
    type: String,
    required: true,
  },
  paying: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    enum: ["Cash", "Online Payment"],
    required: true,
  },
  transaction: {
    type: String,
    
  },
  notes: {
    type: String,
    default: "",
  },
  status:{
    type:String,
  },
  createdAt: {
    type: Date,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
