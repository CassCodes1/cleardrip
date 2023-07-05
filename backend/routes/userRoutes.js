const express = require('express');
const router = express.Router();

const {
  authUser,
  logoutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} = require('../controller/userController');

router.post('/account/login', authUser);

router.post('/account/logout', logoutUser);

router.post('/account/register', registerUser);

router.get('/account/profile', getUserProfile);

router.put('/account/profile', updateUserProfile);

router.delete('/account/profile', deleteUserProfile);

module.exports = router;
