'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.addColumn('Orders', 'complete', 'boolean');
  
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('Orders', 'complete');

  }
};
