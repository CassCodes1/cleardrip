const express = require('express');
const router = express.Router();

const {
  startSubscription,
  endSubscription,
} = require('../controller/subscriberController');

router.post('/subscribe', startSubscription);

router.post('/unsubscribe', endSubscription);

module.exports = router;
