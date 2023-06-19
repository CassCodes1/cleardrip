const express = require('express');
const router = express.Router();

const {
  getContactPage,
  getNewEstimate,
  makeNewBooking,
  sendEmail,
} = require('../controller/contactController');

router.get('/contact', getContactPage);

router.post('/contact/estimate', getNewEstimate);

router.post('/contact/booking-enquiry', makeNewBooking);

router.post('/contact/email-enquiry', sendEmail);

module.exports = router;
