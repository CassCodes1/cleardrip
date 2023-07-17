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

router.post('/login', authUser);

router.post('/logout', logoutUser);

router.post('/register', registerUser);

router.get('/profile', getUserProfile);

router.put('/profile', updateUserProfile);

router.delete('/profile', deleteUserProfile);

module.exports = router;
