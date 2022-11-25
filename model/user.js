const mongoose = require("mongoose");

// creating Schema for a mongoose model
const userSchema = new mongoose.Schema({
  firstname: {
    // type property represents Schematype
    type: String,
    default: null,
  },
  lastname: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    min: 10,
    max: 20,
  },
  token: {
    type: String,
  },
});

// creating and exporting a mongoose model
module.exports = mongoose.model("user", userSchema);
