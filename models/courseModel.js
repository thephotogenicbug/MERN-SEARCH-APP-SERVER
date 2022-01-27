const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  university: {
    type: String,
    required: [true, "Please enter university name"],
    trim: true,
  },
  coursename: {
    type: String,
    required: [true, "Please enter course name"],
  },
  specialization: {
    type: String,
    required: [true, "Please enter specialization"],
  },
  campus: {
    type: String,
    required: [true, "Please enter campus details"],
  },
  country: {
    type: String,
    required: [true, "Please enter country details"],
  },
  program: {
    type: String,
    required: [true, "Please enter program details"],
  },
  duration: {
    type: String,
    required: [true, "Please enter program duration details"],
  },
  entryrequirement: {
    type: String,
    required: [true, "Please enter entry requirement details"],
  },
  applicationstatus: {
    type: String,
    required: [true, "Please enter application status mode"],
  },
  applicationfee: {
    type: Number,
    required: [true, "Please enter application fee details"],
  },
  firstyear: {
    type: String,
    required: [true, "Please enter first year fee details"],
  },
  secondyear: {
    type: String,
    required: [true, "Please enter second year fee details"],
  },
  thirdyear: {
    type: String,
    required: [true, "Please enter third year fee details"],
  },
  fourthyear: {
    type: String,
    required: [true, "Please enter fourth year fee details"],
  },
  price: {
    type: Number,
    required: [true, "Please enter total tution fee details"],
  },
  scholarshipstatus: {
    type: String,
    required: [true, "Please enter scholarship status mode"],
  },
  scholarship: {
    type: String,
    required: [true, "Please enter scholarship details"],
  },
  applicationmode: {
    type: String,
    required: [true, "Please enter application mode"],
  },
  remarks: {
    type: String,
    required: [true, "Please enter remarks details"],
  },
  totalfee: {
    type: String,
    required: [true, "Please enter total fee details"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Course", courseSchema);
