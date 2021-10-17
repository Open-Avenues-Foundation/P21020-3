/* eslint-disable no-console */
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const customerRoutes = require('./routes/customer.js')
const textmessageRoutes = require('./routes/textmessages')

const app = express()
const port = 7000

app.use(cors())
app.use(express.static('client/build'))

// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.urlencoded({ extended: false }))


customerRoutes(app)
textmessageRoutes(app)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
