const TextMessage = (connection, Sequelize) => {
  return connection.define('textmessages', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    subject: { type: Sequelize.STRING },
    messageBody: { type: Sequelize.STRING },
    expiryDate: { type: Sequelize.DATE },
    nextRemindDate: { type: Sequelize.STRING },
    reminderFrequencyId: { type: Sequelize.INTEGER },
    messageStatus: { type: Sequelize.ENUM('Delivered', 'Failed') }
  },
  { paranoid: true })
}

module.exports = TextMessage
