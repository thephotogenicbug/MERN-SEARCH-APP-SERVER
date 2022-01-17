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
  totalfee: {
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
  collegelogo: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Course", courseSchema);
