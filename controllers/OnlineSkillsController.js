const OnlineForm = require("../models/OnlineSkills");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");

exports.createOnline = catchAsyncError(async(req,res, next) =>{
    const onlineform = await OnlineForm.create(req.body);
    res.status(201).json({
        success:true,
        onlineform,
        message:"Form Submitted Successfuly..."
    })
})