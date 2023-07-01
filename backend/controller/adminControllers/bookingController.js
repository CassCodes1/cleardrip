const asyncHandler = require('express-async-handler');

// @desc Display all bookings
// route GET /api/v1/admin/bookings
// @access Private
const getBookings = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Display all bookings' });
});

// @desc Create new booking
// route POST /api/v1/admin/bookings
// @access Private
const createBooking = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'Create new booking' });
});

// @desc View/select booking
// route GET /api/v1/admin/bookings/:id
// @access Private
const selectBooking = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'View/select booking' });
});

// @desc Update booking details
// route PUT /api/v1/admin/bookings/:id
// @access Private
const updateBooking = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update booking details' });
});

// @desc Delete booking
// route DELETE /api/v1/admin/bookings/:id
// @access Private
const deleteBooking = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Delete booking' });
});

module.exports = {
  getBookings,
  createBooking,
  selectBooking,
  updateBooking,
  deleteBooking,
};
