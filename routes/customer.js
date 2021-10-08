
// eslint-disable-next-line max-len
const { getAllCustomers, handleUploadCustomers, createNewCustomer, getCustomerById } = require('../controllers/customers')


const customerRoutes = (app) => {
  app.post('/customerUploads', handleUploadCustomers)
  app.post('/newCustomer', createNewCustomer)

  app.get('/customers', getAllCustomers)
  app.get('/customers/:id', getCustomerById)
}

module.exports = customerRoutes
