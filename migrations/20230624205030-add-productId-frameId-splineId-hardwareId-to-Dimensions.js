'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.addColumn('Dimensions', 'productId', 'integer');
    await queryInterface.addColumn('Dimensions', 'frameId', 'integer');
    await queryInterface.addColumn('Dimensions', 'splineId', 'integer');
    await queryInterface.addColumn('Dimensions', 'hardwareId', 'integer');
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('Dimensions', 'productId');
    await queryInterface.removeColumn('Dimensions', 'frameId');
    await queryInterface.removeColumn('Dimensions', 'splineId');
    await queryInterface.removeColumn('Dimensions', 'hardwareId');
  }
};
