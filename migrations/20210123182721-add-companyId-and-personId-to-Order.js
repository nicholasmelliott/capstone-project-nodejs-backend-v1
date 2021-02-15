'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn('Orders', 'companyId', 'integer');
    await queryInterface.addColumn('Orders', 'personId', 'integer');

  },

  down: async (queryInterface, Sequelize) => {
      
    await queryInterface.removeColumn('Orders', 'companyId');
    await queryInterface.removeColumn('Orders', 'personId');

  }
};
