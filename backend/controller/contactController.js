const getContactPage = (req, res) => {
  res.status(200).json({ message: 'Contact' });
};

const getNewEstimate = (req, res) => {
  res.status(200).json({ message: 'Get new estimate' });
};

const makeNewBooking = (req, res) => {
  res.status(200).json({ message: 'Make new booking' });
};

const sendEmail = (req, res) => {
  res.status(200).json({ message: 'Send email' });
};

module.exports = {
  getContactPage,
  getNewEstimate,
  makeNewBooking,
  sendEmail,
};
