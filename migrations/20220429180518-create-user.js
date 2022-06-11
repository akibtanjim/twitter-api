'use strict';

/**
 *  Create/Delete Users Table
 */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '-',
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '-',
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '-',
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'user',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
    await queryInterface.addIndex('users', ['email'], {
      type: 'UNIQUE',
      name: 'email_index',
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
