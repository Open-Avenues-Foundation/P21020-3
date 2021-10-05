const customerTextmessage = (connection, Sequelize, Customer, TextMessage) => {
  return connection.define('customerTextmessages', {
    customerId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: { model: Customer, key: 'id' }
    },
    textMessageId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: { model: TextMessage, key: 'id' }
    },
  },
  { paranoid: true })
}

module.exports = customerTextmessage
