const Customer = (connection, Sequelize) => {
  // Add rest of the fields to the customer model.
  return connection.define('customers', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    firstName: {type: Sequelize.STRING},
    lastName: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    phoneNumber: {type: Sequelize.STRING},
    city: {},
    lastOrderPrice: {type: Sequelize.NUMBER},
  });
};

module.exports = Customer;
