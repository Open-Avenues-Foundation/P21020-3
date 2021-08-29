const Sequelize = require('sequelize')
const customerModel = require('customers')

const connection = new Sequelize('customers', 'users', 'a1b2c3', {
  host: 'localhost', dialect: 'mysl'
})

const Customer = customerModel(connection, Sequelize)

module.exports = { Customer }
