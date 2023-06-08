const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

const app = express();

mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 4000;

app.use(Router);

app.listen(PORT, () => console.log("app has started at: ", PORT));

//const Router = require("./routes")

const username = "Cluster58077";
const password = "VURzYUJJb3Bp";
const cluster = "cluster58077.ykygdvw";
const dbname = "patient_details";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("connection successfull"));
