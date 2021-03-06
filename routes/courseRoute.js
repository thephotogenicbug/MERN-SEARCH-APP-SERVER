const express = require('express')
const { getAllCourse, createCourse, updateCourse, getCourseDetails, deleteCourse } = require('../controllers/courseController')
const router = express.Router()

router.route('/courses').get(getAllCourse)
router.route('/course/new').post(createCourse)
router.route('/course/:id').get(getCourseDetails)
module.exports = router