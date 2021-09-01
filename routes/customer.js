const customerController = require('../controllers/customers')
const { getAllCustomers } = require('../controllers/customers')

const customerRoutes = app => {
  app.post('/customerUploads', (req, res) => {
    const { customers } = req.body

    customerController.handleUploadCustomers(customers)

    res.send('Customers uploaded')
  })


  app.get('/customers', getAllCustomers)
}

module.exports = customerRoutes
