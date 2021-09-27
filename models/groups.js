const Group = (connection, Sequelize) => {
  return connection.define('textGroups', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // createDate: { type: Sequelize.DATE }
    groupName: { type: Sequelize.STRING },
    isActive: { type: Sequelize.ENUM('Y', 'N') },
    lastOrderDate: { type: Sequelize.DATE },
    lastOrderPrice: { type: Sequelize.DECIMAL },

  })
}

module.exports = Group
