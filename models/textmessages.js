const TextMessage = (connection, Sequelize) => {
  return connection.define('textmessages', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    messageBody: { type: Sequelize.STRING },
    messageStatus: { type: Sequelize.ENUM('Delivered', 'Failed') }
  },
  { paranoid: true })
}

module.exports = TextMessage
