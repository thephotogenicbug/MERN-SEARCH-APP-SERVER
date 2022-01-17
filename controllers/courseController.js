const Course = require("../models/courseModel");

// get all course
exports.getAllCourse = async (req, res) => {
  const courses = await Course.find();
  res.status(200).json({
    success: true,
    courses,
  });
};

// create course
exports.createCourse = async (req, res, next) => {
  const course = await Course.create(req.body);
  res.status(201).json({
    success: true,
    course,
  });
};

// update course
exports.updateCourse = async (req, res) => {
  let course = await Course.findById(req.params.id);

  if (!course) {
    return res.status(500).json({
      success: false,
      message: "Course not found",
    });
  }

  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    course,
  });
};
