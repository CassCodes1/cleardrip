const asyncHandler = require('express-async-handler');

const startSubscription = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'subscribe' });
});

const endSubscription = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'unsubscribe' });
});

module.exports = {
  startSubscription,
  endSubscription,
};
