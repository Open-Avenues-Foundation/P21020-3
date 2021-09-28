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
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE }
    })

    await
    queryInterface.createTable('textmessages', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      customerId: { type: Sequelize.INTEGER, references: { model: 'customers', key: 'id' } },
      subject: { type: Sequelize.STRING },
      messageBody: { type: Sequelize.STRING },
      createDate: { type: Sequelize.DATE },
      expiryDate: { type: Sequelize.DATE },
      nextRemindDate: { type: Sequelize.DATE },
      reminderFrequencyId: { type: Sequelize.INTEGER },
      isRead: { type: Sequelize.ENUM('Y', 'N') },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE }
    })

    await queryInterface.createTable('textGroups', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      groupName: { type: Sequelize.STRING },
      isActive: { type: Sequelize.ENUM('Y', 'N') },
      createDate: { type: Sequelize.DATE },
      lastOrderPrice: { type: Sequelize.DECIMAL },
      lastOrderDate: { type: Sequelize.DATE },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE }
    })

    return queryInterface.createTable('customerGroups', {
      customerId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'customers', key: 'id' }
      },
      textGroupId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'textGroups', key: 'id' }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('customerGroups')
    await queryInterface.dropTable('textGroups')
    await queryInterface.dropTable('textMessages')

    return queryInterface.dropTable('customers')
  }
}
