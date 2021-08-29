const customers = (connection, Sequelize) => {
    return connection.define('teams', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      phoneNumber: { type: Sequelize.STRING }
    })
}
  module.exports = customers