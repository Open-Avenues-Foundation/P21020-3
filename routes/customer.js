const { app } = require('express')
// eslint-disable-next-line max-len
const { getAllCustomers, customerRoutes, createNewCustomer, getCustomerByIdWithTextMessage } = require('../controllers/customers')


app.post('/customerUploads', customerRoutes)
app.post('/newCustomer', createNewCustomer)

app.get('/customers', getAllCustomers)
app.get('/customers/:id', getCustomerByIdWithTextMessage)

