const express = require("express");
const {
  loginUser,
  forgotPassword,
  logout,
  resetPassword,
  registerUser,
  getUserDetails,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/profile").get(isAuthenticatedUser, getUserDetails);

module.exports = router;
