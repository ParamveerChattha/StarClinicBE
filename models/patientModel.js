const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  diagnosis: {
    type: String,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
    default: "female",
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  procedure: {
    type: String,
  },
});

const patient = mongoose.model("Patients", PatientSchema);

module.exports = patient;
