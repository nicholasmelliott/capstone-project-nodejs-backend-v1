'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bottomLeftToRight: {
        type: Sequelize.FLOAT
      },
      bottomRightToLeft: {
        type: Sequelize.FLOAT
      },
      bottomLeftToTop: {
        type: Sequelize.FLOAT
      },
      bottomRightToTop: {
        type: Sequelize.FLOAT
      },
      topLeftToRight: {
        type: Sequelize.FLOAT
      },
      topRightToLeft: {
        type: Sequelize.FLOAT
      },
      topLeftToBottom: {
        type: Sequelize.FLOAT
      },
      topRightToBottom: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Locations');
  }
};