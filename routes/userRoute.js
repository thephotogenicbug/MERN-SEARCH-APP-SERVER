const express = require('express')
const { loginUser, forgotPassword, logout, resetPassword, registerUser } = require('../controllers/userController')
const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route("/password/forgot").post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword)
router.route("/logout").get(logout);

module.exports = router