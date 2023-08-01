const express = require('express');
const router = express.Router();

const {
  startSubscription,
  endSubscription,
} = require('../controllers/subscriptionController');

router.post('/start', startSubscription);

router.post('/end', endSubscription);

module.exports = router;
