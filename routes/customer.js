const handleUploadCustomers = require('../controllers/customers.js');

const customerRoutes = app => {
  app.post('/upload-customers', (req, res) => {
    console.log('UPLOAD CUSTOMERS CALLED');
    const customers = req.body;

    console.log('HANDLE CUSTOMERS', customers);
    handleUploadCustomers(customers);

    res.send('Customers uploaded');
  });

  app.get('/customers', (req, res) => {
    //getAllCustomer()
    const customers = [{}];
    res.send(`Fetching all the customers ${JSON.stringify(customers)}`);
  });
};

module.exports = customerRoutes;
