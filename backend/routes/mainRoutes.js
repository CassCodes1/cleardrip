const express = require('express');
const router = express.Router();

const {
  getHomePage,
  getAboutPage,
  getServicesPage,
} = require('../controller/mainController');

router.get('/', getHomePage);
router.get('/about', getAboutPage);
router.get('/services', getServicesPage);

module.exports = router;
