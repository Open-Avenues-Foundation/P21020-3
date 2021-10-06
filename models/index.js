const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const customers = require('./customer')
const textmessages = require('./textmessages')
const groups = require('./groups')
const customergroups = require('./customerGroups')
const customertextmessages = require('./customerTextmessages')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]


const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect

})

const Customer = customers(connection, Sequelize)
const TextMessage = textmessages(connection, Sequelize)
const Group = groups(connection, Sequelize)
const CustomerGroup = customergroups(connection, Sequelize)
const CustomerTextMessage = customertextmessages(connection, Sequelize)


Customer.belongsToMany(Group, { through: CustomerGroup })
Group.belongsToMany(Customer, { through: CustomerGroup })

Group.belongsToMany(TextMessage, { through: CustomerTextMessage })
TextMessage.belongsToMany(Group, { through: CustomerTextMessage })


module.exports = {
  Customer, TextMessage, Group, CustomerGroup, CustomerTextMessage
}
