const mongoose = require('mongoose');
const validator = require('validator')

const onlineSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter You FullName"],
  },
  mobileno: {
    type: String,
    required: [true, "Please Enter Your MobileNo"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email ID"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  country: {
    type: String,
    required: [true, "Please Enter Your Country details"],
  },
  state: {
    type: String,
    required: [true, "Please Enter Your State details"],
  },
  location: {
    type: String,
    required: [true, "Please Enter Your Location details"],
  },
  course: {
    type: String,
    required: [true, "Please Choose Your Preferred Course details"],
  },
  createdAt:{
      type:Date,
      default:Date.now
  }
});

module.exports = mongoose.model("OnlineForm", onlineSchema);