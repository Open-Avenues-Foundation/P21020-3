const Group = (connection, Sequelize) => {
    return connection.define('groups', {
      id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true, 
        primaryKey: true },
      // createDate: { type: Sequelize.DATE }
      name: { 
        type: Sequelize.STRING },
      isActive: { type: Sequelize.ENUM('Y','N')}
    })
  }

  module.exports = Group
  