const mongoose = require("mongoose");
const express = require("express");
//const Router = require("./routes")

const username = "Cluster58077";
const password = "VURzYUJJb3Bp";
const cluster = "cluster58077.ykygdvw";
const dbname = "dbname";

const app = express();

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/?appName=mongosh+1.9.1`,
  {
    useNewUrlParser: true,
    useFindAndModiy: false,
    useUnifiedTopology: true,
  }
);
