const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  dob: Date,
});

const customerModel = mongoose.model("customers", customerSchema);

module.exports = customerModel;
