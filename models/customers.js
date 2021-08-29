const customers = (connection, Sequelize) => {
  return connection.define('customers', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstname: { type: Sequelize.STRING },
    lastname: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    phonenumber: { type: Sequelize.INTEGER },
  }, { paranoid: true })
}

module.exports = customers
