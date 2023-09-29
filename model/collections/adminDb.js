require("../config");
const mongoose = require("mongoose");
const schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  joinDate: {
    type: Date,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Admin", schema);
