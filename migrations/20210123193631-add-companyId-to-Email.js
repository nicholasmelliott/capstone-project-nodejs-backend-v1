'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.addColumn('Emails', 'companyId', 'integer');
  
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('Emails', 'companyId');

  }
};
