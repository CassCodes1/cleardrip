const express = require('express');
const router = express.Router();

const {
  getBookings,
  createBooking,
  selectBooking,
  updateBooking,
  deleteBooking,
} = require('../../controller/adminControllers/bookingController');

router.get('/admin/bookings', getBookings);
router.post('/admin/bookings', createBooking);
router.get('/admin/bookings/:id', selectBooking);
router.put('/admin/bookings/:id', updateBooking);
router.delete('/admin/bookings/:id', deleteBooking);

module.exports = router;
