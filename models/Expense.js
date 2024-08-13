
const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  expenseName: {
    type: String,
  },
  Hotel: {
    type: String,
    required: true,
  },
  expenseCategory: {
    type: String,
    enum: ["Electricity", "Water tax", "Land tax"],
    required: true,
  },
  expenseAmount: {
    type: String,
    required: true,
  },
  expenseDetails: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ["Online payment"],
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },

  expenseDate: {
    type: Date,
    required: true,
  },
  referenceNumber: {
    type: String,
  },
  expenseReceipt: {
    type: String,
  },
  notes: {
    type: String,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
