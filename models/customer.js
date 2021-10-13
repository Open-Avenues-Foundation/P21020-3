const Customer = (connection, Sequelize) => {
  return connection.define('customers', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    phoneNumber: { type: Sequelize.STRING },
    city: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING },
    lastOrderDate: { type: Sequelize.DATEONLY },
    lastOrderPrice: { type: Sequelize.DECIMAL }
  },
  { paranoid: true })
}

module.exports = Customer
