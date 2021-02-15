'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.removeColumn('Addresses', 'orderId');
  
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn('Addresses', 'orderId', 'integer');

  }
};
