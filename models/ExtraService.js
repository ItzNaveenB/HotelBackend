const mongoose = require("mongoose");

const extraServiceSchema = new mongoose.Schema({
  CustomerName: {
    type: String,
    required: true,
  },
  Services: {
    type: String,
    enum: [
      "Extra Bed",
      "Spa services",
      "Fitness centre",
      "Tours and Excursions",
      "Laundary and dry cleaning",
      "Valet parking",
      "Transportation",
      "Conference room",
      "Pet services",
    ],
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  Hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  Method: {
    type: String,
    enum: ["Cash", "Online payment"],
    required: true,
  },
  TransactionId: {
    type: String,
    validate: {
      validator: function(v) {
       
        if (this.Method === 'Online payment' && !v) {
          return false;
        }
        return true;
      },
      message: 'TransactionId is required for online payment',
    },
  },
  
  Paying: {
    type: String,
    required: true,
  },
  Details: {
    type: String,
    required: true,
  },
  Status:{
    type:String,
  }
});

const ExtraService = mongoose.model("ExtraService", extraServiceSchema);

module.exports = ExtraService;
