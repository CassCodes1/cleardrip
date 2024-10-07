"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

async function main(sender, recipient, subject, body) {
  const info = await transporter.sendMail({
    from: sender,
    to: recipient,
    subject: subject,
    text: body,
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = {
  main,
};
