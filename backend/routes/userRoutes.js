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

router.post('/users/login', authUser);

router.post('/users/logout', logoutUser);

router.post('/users/register', registerUser);

router.get('/users/profile', getUserProfile);

router.put('/users/profile', updateUserProfile);

router.delete('/users/profile', deleteUserProfile);

module.exports = router;
