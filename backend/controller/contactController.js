const asyncHandler = require('express-async-handler');
const { main } = require('../utils/nodemailer');
require('dotenv').config();

// @desc Auth user/set token (Login user)
// route POST /api/v1/contact/email-enquiry
// @access Public
const sendEmail = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, contactNo, enquiryType, message } =
    req.body;

  // Validate user input
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);

  const nameRegex = /^[a-zA-Z-'\s]+$/;
  const isValidFirstName = nameRegex.test(firstName);
  const isValidLastName = nameRegex.test(lastName);

  const numberRegex = /^[0-9]{11,}$/; // Minimum 11 characters
  const isValidNumber = numberRegex.test(contactNo);

  if (!firstName) {
    res.status(400);
    throw new Error('First name is required');
  }
  if (!isValidFirstName) {
    res.status(400);
    throw new Error('Please enter a valid first name');
  }

  if (!lastName) {
    res.status(400);
    throw new Error('Last name is required');
  }
  if (!isValidLastName) {
    res.status(400);
    throw new Error('Please enter a valid last name');
  }

  if (!email) {
    res.status(400);
    throw new Error('Email is required');
  }
  if (!isValidEmail) {
    res.status(400);
    throw new Error('Email address invalid');
  }

  if (!contactNo) {
    res.status(400);
    throw new Error('Phone number is required');
  }
  if (!isValidNumber) {
    res.status(400);
    throw new Error('Please check phone number');
  }

  if (!enquiryType) {
    res.status(400);
    throw new Error('Please choose enquiry type');
  }

  if (!message) {
    res.status(400);
    throw new Error('Message cannot be empty');
  }

  // Send email once validation checks complete
  const sendData = () => {
    const sender = firstName + ' ' + lastName + ' ' + email;
    const recipient = process.env.EMAIL_RECIPIENT;
    const body = message;

    main(
      sender,
      recipient,
      enquiryType,
      firstName,
      lastName,
      contactNo,
      body
    ).catch((e) => console.log(e));

    res.status(200).json({ message: 'Send email' });
  };

  sendData();
});

// @desc Make
// route POST /api/v1/contact/booking-request
// @access Public
const submitBookingRequest = (req, res) => {
  res.status(200).json({ message: 'Submit booking request' });
};

module.exports = {
  sendEmail,
  submitBookingRequest,
};
