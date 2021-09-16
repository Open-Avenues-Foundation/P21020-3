const Sequelize = require('sequelize')
const customers = require('./customer')

const connection = new Sequelize('customers', 'admin', 'jHkSbJcP_3', {
  host: 'localhost', dialect: 'mysql'
})

const Customers = customers(connection, Sequelize)

module.exports = { Customers }
