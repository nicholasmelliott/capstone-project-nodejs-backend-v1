'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.addColumn('Orders', 'type', 'string');
  
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('Orders', 'type');

  }
};
