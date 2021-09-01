const Customer = (connection, Sequelize) => {
  return connection.define('customers', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    phoneNumber: { type: Sequelize.STRING },
    city: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING },
    lastOrderPrice: { type: Sequelize.DECIMAL },
    lastOrderDate: { type: Sequelize.DATE }
  })
}

module.exports = Customer
