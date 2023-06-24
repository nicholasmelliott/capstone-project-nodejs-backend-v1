'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.addColumn('Frames', 'productId', 'integer');
  
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('Frames', 'productId');

  }
};
