const Course = require("../models/courseModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");

// get all course
exports.getAllCourse = catchAsyncError(async (req, res) => {
  const courses = await Course.find();
  res.status(200).json({
    success: true,
    courses,
  });
});

// create course
exports.createCourse = catchAsyncError(async (req, res, next) => {
  const course = await Course.create(req.body);
  res.status(201).json({
    success: true,
    course,
  });
});

// update course
exports.updateCourse = catchAsyncError(async (req, res) => {
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
});

// get course details
exports.getCourseDetails = catchAsyncError(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
   return next(new ErrorHandler("Course not found", 404));
  }
  res.status(200).json({
    success: true,
    course,
  });
});

// delete course data
exports.deleteCourse = catchAsyncError(async (req, res) => {
  const course = await Course.findById(req, params.id);

  if (course) {
    return res.status(500).json({
      success: false,
      message: "Course not found",
    });
  }
  await course.remove();

  res.status(200).json({
    success: true,
    message: "Course deleted successfully...",
  });
});
