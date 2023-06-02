const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
  },

  reasons: {
    type: [],

    default: undefined,
  },

  date: {
    type: Date,
  },
});

const appointment = mongoose.model("appointmentDetails", appointmentSchema);

module.exports = appointment;
