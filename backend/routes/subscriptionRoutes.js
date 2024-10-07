const express = require("express");
const router = express.Router();

const { startSubscription } = require("../controllers/subscriptionController");

router.post("/start", startSubscription);

module.exports = router;
