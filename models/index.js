const Sequelize = require('sequelize')
const customers = require('./customer')
const textmessages = require('./textmessages')
const groups = require('./groups')
const customergroups = require('./customerGroups')

const connection = new Sequelize('users', 'admin', 'jHkSbJcP_3', {
  host: 'localhost', dialect: 'mysql'
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
