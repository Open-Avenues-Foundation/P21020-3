const customerGroup = (connection, Sequelize, Customer, Group) => {
  return connection.define('customergroups', {
    customerId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: { model: Customer, key: 'id' }
    },
    groupId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: { model: Group, key: 'id' }
    },
  },
  { paranoid: true })
}

module.exports = customerGroup
