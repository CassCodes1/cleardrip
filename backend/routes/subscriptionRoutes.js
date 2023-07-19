const express = require('express');
const router = express.Router();

const {
  startSubscription,
  endSubscription,
} = require('../controller/subscriptionController');

router.post('/subscription/start', startSubscription);

router.post('/subscription/end', endSubscription);

module.exports = router;
