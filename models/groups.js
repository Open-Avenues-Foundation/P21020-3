const models = require('../models')
const Groups = require('../models/groups')

const Group = (connection, Sequelize) => {
    return connection.define('groups', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      createDate: { type: Sequelize.DATETIME },
      isActive: { type: Sequelize.ENUM('Y','N')}
    })
  }

  module.exports = Group
  