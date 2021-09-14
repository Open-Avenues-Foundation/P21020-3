const models = require('../models')
const Groups = require('../models/textmessages')

const TextMessage = (connection, Sequelize) => {
    return connection.define('textmessages', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      subject: { type: Sequelize.STRING },
      messageBody: { type: Sequelize.STRING },
      nextRemindDate: { type: Sequelize.STRING },
      isRead: { type: Sequelize.ENUM('Y','N') }
    })
  }
  
  module.exports = TextMessage