const Customer = (connection, Sequelize) => {
  // Add rest of the fields to the customer model.
  return connection.define('customers', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    phoneNumber: { type: Sequelize.STRING },
    city: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING },
    lastOrderPrice: { type: Sequelize.DECIMAL }
  })
}

module.exports = Customer
