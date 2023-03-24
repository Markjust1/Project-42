const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  joinDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  fullName: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  image: {
    type: String,
  },
  cards: [

    {
      cardNumber: {
        type: Number,
      },
      cardholder: {
        type: String,
      },
      expiryDate: {
        type: String,
      },
      cvs: {
        type: Number,
      },
    },
  ],
  cart: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      platform: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
