const express = require('express');
const router = express.Router();

const {
  startSubscription,
  endSubscription,
} = require('../controller/subscriptionController');

router.post('/subscribe', startSubscription);

router.post('/unsubscribe', endSubscription);

module.exports = router;
