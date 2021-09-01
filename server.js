/* eslint-disable no-console */
const express = require('express')
const customerRoutes = require('./routes/customer.js')

const app = express()
const port = 7000


app.use(express.json())

// Set up the routes to upload the customer data.
// The datastructure of that data is going to be something like
// Array of customers' objects
// [
//    {
//      first_name: 'first',
//      last_name: 'last',
//      phone_number: '1111111111',
//      ...
//    }
// ]
customerRoutes(app)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
