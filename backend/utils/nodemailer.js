'use strict';
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.sendinblue.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  // logger: true,
  // debug: true,
});

async function main(
  sender,
  recipient,
  subject,
  firstName,
  lastName,
  contactNo,
  body
) {
  const info = await transporter.sendMail({
    from: sender,
    to: recipient,
    subject: subject,
    // text: body,
    text: `
    You have a new message from:

    Name: 
    ${firstName} ${lastName}

    Phone Number: 
    ${contactNo}
    
    Message:
    ${body}
    `,
  });

  console.log('Message sent: %s', info.messageId);
}

module.exports = {
  main,
};
