const customerGroup = (connection, Sequelize, Customers, Groups) => {
  return connection.define('customergroups', {
    customerId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: Customers, key: 'id' } },
    groupId: {
      type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: Groups, key: 'id' }
      },
  },
  { paranoid: true} )
}

module.exports = customerGroup
