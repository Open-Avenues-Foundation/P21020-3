const TextMessage = (connection, Sequelize, Customer) => {
  return connection.define('textmessages', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    messageRecipient: { type: Sequelize.STRING },
    messageBody: { type: Sequelize.STRING },
    // customerId: { type: Sequelize.INTEGER, references: { model: Customer, key: 'id' } }
  },
  { paranoid: true })
}

module.exports = TextMessage
