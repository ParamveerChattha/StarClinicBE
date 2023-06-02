const express = require("express");
const patientModel = require("./models/patientModel");
const appointmentModel = require("./models/appointmentModel");
const _ = require("lodash");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.post("/addPatient", async (req, res) => {
  const patient = new patientModel(req.body);
  const name = req.body.name;
  const id = {
    _id: req.body.phoneNumber + (name.substring(0, name.indexOf(" ")) || name),
  };

  console.log("id: ", id);

  Object.assign(patient, id);

  console.log("patient", patient);
  try {
    await patient.save();
    res.send(patient);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/findAppointments", async (req, res) => {
  const phoneNumber = req.query.phoneNumber;
  const name = req.query.name;

  const findPatients = {
    projection: { name: name, phoneNumber: phoneNumber },
  };

  const appointments = await appointmentModel.find();

  try {
    res.send(appointments);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/addAppointment", async (req, res) => {
  const appointment = new appointmentModel(req.body);

  console.log("appointment body ", req.body);

  try {
    await appointment.save();
    res.send(appointment);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/searchPatient", async (req, res) => {
  const phoneNumber = req.query.phoneNumber;
  const name = req.query.name;
  let patientRecord;

  if (phoneNumber === "null" && name) {
    patientRecord = await patientModel.find(
      { name: name },
      { name: 1, gender: 1, phoneNumber: 1, diagnosis: 1, procedure: 1 }
    );
  } else if (phoneNumber && name === "null") {
    patientRecord = await patientModel.find(
      { phoneNumber: phoneNumber },
      { name: 1, gender: 1, phoneNumber: 1, diagnosis: 1, procedure: 1 }
    );
  } else if (name && phoneNumber) {
    const patientId =
      phoneNumber + (name.substring(0, name.indexOf(" ")) || name);
    patientRecord = await patientModel.find({ _id: patientId });
  }

  console.log("patientRecord $$$$: ", patientRecord);

  res.send(patientRecord);
});

module.exports = app;
