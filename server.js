const express = require('express')
const app = express()
const mysql = require('mysql')
// save for later
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ZRnQ79X!t_',
  database: 'Test'
})


app.get('/', (request, response) => {
  return response.send('It works!')
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err
  // eslint-disable-next-line no-console
  console.log('The solution is:', rows[0].solution)
})
connection.end()

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on 1337…') // eslint-disable-line no-console
})

