/* eslint-disable no-console */
const express = require('express')
const customerRoutes = require('./routes/customer')
const groupRoutes = require('./routes/groups')
const textmessageRoutes = require('./routes/textmessages')

const app = express()
const port = 7000


app.use(express.json())

customerRoutes(app)
groupRoutes(app)
textmessageRoutes(app)


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
