const { getAllCustomers, customerRoutes, getCustomerById, createNewCustomer } = require('../controllers/customers')


app.post('/customerUploads', customerRoutes)
app.post('/newCustomer', createNewCustomer)

app.get('/customers', getAllCustomers)
app.get ('/customers/:id', getCustomerById)

