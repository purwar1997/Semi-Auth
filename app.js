// dotenv is a module that will load all the environment variables of .env file into process.env object
// config() will read the contents of the .env file and load them inside process.env object

require("dotenv").config({ path: "./.env" });
const express = require("express");
const User = require("./model/user");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1 style='text-align:center'>Welcome to iNeuron</h1>");
});

app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  // to check whether user has filled all the input fields or not
  if (!(firstname && lastname && email && password)) {
    res.status(400).send("All the fields are required");
  }

  // to check whether user already has an account or not
  if (await User.findOne(email)) {
    res.status(400).send("User already exists");
  }
});

module.exports = app;
