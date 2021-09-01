/* eslint-disable no-console */
const express = require('express')
const customerRoutes = require('./routes/customer.js')

const app = express()
const port = 7000


app.use(express.json())

customerRoutes(app)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
