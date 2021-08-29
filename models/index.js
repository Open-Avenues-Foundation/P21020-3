const Sequelize = require('sequelize')
const customers = require('./data')

const connection = new Sequelize('customers', 'admin', 'jHkSbJcP_3', {
  host: 'localhost', dialect: 'mysql', define: { timestamps: false }
})

const Customers = customers(connection, Sequelize)

module.exports = { Customers }
