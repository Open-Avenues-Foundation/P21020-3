const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  return response.send('It works!')
})


app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on 1337…') // eslint-disable-line no-console
})

