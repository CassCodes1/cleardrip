const asyncHandler = require('express-async-handler');

// @desc Auth user/set token (Login user)
// route POST /api/v1/account/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Login user' });
});

// @desc Register new user
// route POST /api/v1/account/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'Register user' });
});

// @desc Logout user
// route POST /api/v1/account/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logout user' });
});

// @desc Get user profile
// route GET /api/v1/account/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Display user profile' });
});

// @desc Update user profile
// route PUT /api/v1/account/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update user profile' });
});

// @desc Update user profile
// route DELETE /api/v1/account/profile
// @access Private
const deleteUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Delete user profile' });
});

module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
