/* eslint-disable max-len */
'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customers', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      phoneNumber: { type: Sequelize.STRING },
      city: { type: Sequelize.STRING },
      state: { type: Sequelize.STRING },
      lastOrderPrice: { type: Sequelize.DECIMAL },
      lastOrderDate: { type: Sequelize.DATEONLY },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE }
    })

    await
    queryInterface.createTable('textmessages', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      messageRecipient: { type: Sequelize.STRING },
      messageBody: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE }
    })


    return queryInterface.createTable('customerTextmessages', {
      customerId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'customers', key: 'id' }
      },
      textMessageId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'textmessages', key: 'id' }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('customerTextmessages')
    await queryInterface.dropTable('textmessages')

    return queryInterface.dropTable('customers')
  }
}
