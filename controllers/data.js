const models = require('../models')

const serverSetup = (request, response) => {
    return response.send('It works!')
    }
const errorNotFound = (request, response) => {
    return response.sendStatus(404)
  }

  module.exports = { serverSetup, errorNotFound }