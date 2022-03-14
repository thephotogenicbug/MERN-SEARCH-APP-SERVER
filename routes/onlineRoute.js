const express = require("express");
const { createApplication } = require("../controllers/ContactFormController");
const { createOnline } = require("../controllers/OnlineSkillsController");
const router = express.Router();

router.route("/createform").post(createOnline);
router.route("/applicationform").post(createApplication)
module.exports = router;
