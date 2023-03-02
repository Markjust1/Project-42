const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    required: true,
  },
  cardholder: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  cvs: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Card", cardSchema);
