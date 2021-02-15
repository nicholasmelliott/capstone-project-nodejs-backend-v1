'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.addColumn('Phones', 'companyId', 'integer');
    await queryInterface.addColumn('Phones', 'orderId', 'integer');
  
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('Phones', 'companyId');
    await queryInterface.removeColumn('Phones', 'orderId');

  }
};