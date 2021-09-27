const { app } = require('express')
// eslint-disable-next-line max-len
const { getAllCustomers, customerRoutes, createNewCustomer, getCustomerById } = require('../controllers/customers')


app.post('/customerUploads', customerRoutes)
app.post('/newCustomer', createNewCustomer)

app.get('/customers', getAllCustomers)
app.get('/customers/:id', getCustomerById)

module.exports = {
  getAllCustomers, customerRoutes, createNewCustomer, getCustomerById
}
