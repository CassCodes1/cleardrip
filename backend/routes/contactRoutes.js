const express = require("express");
const router = express.Router();

const { sendEmail } = require("../controllers/contactController");

router.post("/email-enquiry", sendEmail);

module.exports = router;
