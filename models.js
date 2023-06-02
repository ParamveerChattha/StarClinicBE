const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  patient_name: String,
  age: Number,
});

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
