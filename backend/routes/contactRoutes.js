const express = require('express');
const router = express.Router();

const {
  sendEmail,
  submitBookingRequest,
} = require('../controllers/contactController');

router.post('/email-enquiry', sendEmail);

router.post('/booking-request', submitBookingRequest);

module.exports = router;
