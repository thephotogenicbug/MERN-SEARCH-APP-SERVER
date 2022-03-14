const ContactForm = require('../models/ContactForm');
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");

exports.createApplication = catchAsyncError(async (req,res,next) =>{
    const contactform = await ContactForm.create(req.body);
    res.status(201).json({
      success: true,
      contactform,
      message: "Form Submitted Successfuly...",
    });
})
