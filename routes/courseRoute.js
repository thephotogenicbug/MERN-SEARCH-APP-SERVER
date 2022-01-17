const express = require('express')
const { getAllCourse } = require('../controllers/courseController')
const router = express.Router()

router.route('/courses').get(getAllCourse)

module.exports = router