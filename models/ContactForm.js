const mongoose = require('mongoose');

const contactFormSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  mobile: {
    type: String,
    required: [true, "Please Enter Your MobileNo"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email ID"],
  },
  country: {
    type: String,
    required: [true, "Please Enter Your Country Details"],
  },
  state: {
    type: String,
    required: [true, "Please Enter Your State Details"],
  },
  city: {
    type: String,
    required: [true, "Please Enter Your City Details"],
  },
  altmobile: {
    type: String,
    required: [true, "Please Enter Your Alternative Mobile No"],
  },
  qualification: {
    type: String,
    required: [true, "Please Enter Your Qualification Details"],
  },
  program: {
    type: String,
    required: [true, "Please Choose Your Program"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("ContactForm", contactFormSchema)