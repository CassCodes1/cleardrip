const asyncHandler = require('express-async-handler');

// @desc Display all customers
// route GET /api/v1/admin/customers
// @access Private
const getCustomers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Display all customers' });
});

// @desc Create new customer record
// route POST /api/v1/admin/customers
// @access Private
const createCustomer = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'Create new customer record' });
});

// @desc View/select customer record
// route GET /api/v1/admin/customers/:id
// @access Private
const selectCustomer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'View/select customer record' });
});

// @desc Update customer record
// route PUT /api/v1/admin/customers/:id
// @access Private
const updateCustomer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update customer record' });
});

// @desc Delete customer record
// route DELETE /api/v1/admin/customers/:id
// @access Private
const deleteCustomer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Delete customer record' });
});

module.exports = {
  createCustomer,
  getCustomers,
  selectCustomer,
  updateCustomer,
  deleteCustomer,
};
