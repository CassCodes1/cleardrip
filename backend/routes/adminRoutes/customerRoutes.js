const express = require('express');
const router = express.Router();

const {
  getCustomers,
  selectCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../../controller/adminControllers/customerController');

router.get('/admin/customers', getCustomers);
router.get('/admin/customers/:id', selectCustomer);
router.put('/admin/customers/:id', updateCustomer);
router.delete('/admin/customers/:id', deleteCustomer);

module.exports = router;
