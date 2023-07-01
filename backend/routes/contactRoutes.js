const express = require('express');
const router = express.Router();

const {
  sendEmail,
  submitBookingRequest,
} = require('../controller/contactController');

router.post('/contact/email-enquiry', sendEmail);

router.post('/contact/booking-request', submitBookingRequest);

module.exports = router;
