const asyncHandler = require('express-async-handler');
const Subscriber = require('../models/subscriberModel');
const { main } = require('../utils/nodemailer');

// @desc Start new subscription
// route POST /api/v1//subscription/start
// @access Public
const startSubscription = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, contactNo } = req.body;

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

  // Save to database once validation checks complete
  // Check if subscriber exists
  const subscriberExists = await Subscriber.findOne({ email });

  if (subscriberExists) {
    res.status(400);
    throw new Error("Looks like you've already subscribed.");
  }

  // Create subscriber
  const subscriber = await Subscriber.create({
    firstName,
    lastName,
    email,
    contactNo,
  });

  // Send email to notify admin
  const sendData = () => {
    const sender = firstName + ' ' + lastName + ' ' + email;
    const recipient = process.env.EMAIL_RECIPIENT;
    const body = `
    New subscriber details:

    Name: 
    ${firstName} ${lastName}

    Phone Number: 
    ${contactNo}
    `;

    main(
      sender,
      recipient,
      'You Have a New Subscriber: ' + firstName + ' ' + lastName,
      body
    ).catch((e) => console.log(e));
  };

  sendData();

  if (subscriber) {
    res.status(201).json({
      _id: subscriber.id,
      name: subscriber.firstName + ' ' + subscriber.lastName,
      email: subscriber.email,
      contactNo: subscriber.contactNo,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Start end subscription
// route POST /api/v1//subscription/end
// @access Public
const endSubscription = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'unsubscribe' });
});

module.exports = {
  startSubscription,
  endSubscription,
};
