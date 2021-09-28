const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const customers = require('./customer')
const textmessages = require('./textmessages')
const groups = require('./groups')
const customergroups = require('./customerGroups')

// const connection = new Sequelize('users', 'admin', 'jHkSbJcP_3', {
//   host: 'localhost', dialect: 'mysql'
const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]


const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect

})

const Customer = customers(connection, Sequelize)
const TextMessage = textmessages(connection, Sequelize)
const Group = groups(connection, Sequelize)
const CustomerGroup = customergroups(connection, Sequelize)

Customer.hasMany(TextMessage)
TextMessage.belongsTo(Customer)

Customer.belongsToMany(Group, { through: CustomerGroup })
Group.belongsToMany(Customer, { through: CustomerGroup })

module.exports = { Customer, TextMessage, Group, CustomerGroup }
