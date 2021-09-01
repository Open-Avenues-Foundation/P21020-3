const customerController = require('../controllers/customers')

const customerRoutes = app => {
  app.post('/customerUploads', (req, res) => {
    const { customers } = req.body

    customerController.handleUploadCustomers(customers)

    res.send('Customers uploaded')
  })


  app.get('/customers', (req, res) => {
    const customers = [{}]

    res.send(`Fetching all the customers ${JSON.stringify(customers)}`)
  })
}

module.exports = customerRoutes
