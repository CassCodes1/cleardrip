const express = require('express');
const router = express.Router();

const {
  startSubscription,
  endSubscription,
} = require('../controller/subscriptionController');

router.post('/start', startSubscription);

router.post('/end', endSubscription);

module.exports = router;
