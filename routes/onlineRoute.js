const express = require("express");
const { createOnline } = require("../controllers/OnlineSkillsController");
const router = express.Router();

router.route("/createform").post(createOnline);
module.exports = router;
