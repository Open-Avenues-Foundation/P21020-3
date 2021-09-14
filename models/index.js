const Sequelize = require('sequelize')
const customers = require('./customer')
const textmessages = require('./textmessages')

const connection = new Sequelize('customers', 'admin', 'jHkSbJcP_3', {
  host: 'localhost', dialect: 'mysql'
})

const Customer = customers(connection, Sequelize)
const TextMessage = textmessages(connection, Sequelize)

module.exports = { Customer, TextMessage }
