const TextMessage = (connection, Sequelize) => {
    return connection.define('textmessages', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      subject: { type: Sequelize.STRING },
      messageBody: { type: Sequelize.STRING },
      // createDate: { type: Sequelize.DATE }
      expiryDate: { type: Sequelize.DATE},
      nextRemindDate: { type: Sequelize.STRING },
      reminderFrequencyID: { type: Sequelize.INTEGER },
      isRead: { type: Sequelize.ENUM('Y','N') }
    })
  }
  
  module.exports = TextMessage