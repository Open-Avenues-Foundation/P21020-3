const express = require('express')
const app = express()
const { serverSetup, errorNotFound } = require('./controllers/data')

app.get('/', serverSetup)

app.all('*', errorNotFound)

app.listen(1337, () => {
  console.log('Listening on 1337…') // eslint-disable-line no-console
})

