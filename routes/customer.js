
// eslint-disable-next-line max-len
const { getAllCustomers, customerRoute, createNewCustomer, getCustomerById } = require('../controllers/customers')


const customerRoutes = (app) => {
  app.post('/customerUploads', customerRoute)
  app.post('/newCustomer', createNewCustomer)

  app.get('/customers', getAllCustomers)
  app.get('/customers/:id', getCustomerById)
}

module.exports = customerRoutes
