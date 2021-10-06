/* eslint-disable no-console */
const express = require('express')
const path = require('path')
const cors = require('cors')
const customerRoutes = require('./routes/customer.js')
const groupRoutes = require('./routes/groups')
const textmessageRoutes = require('./routes/textmessages')

const app = express()
const port = 7000

app.use(cors())
app.use(express.static('client/build'))

app.use(express.json())

customerRoutes(app)
groupRoutes(app)
textmessageRoutes(app)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
