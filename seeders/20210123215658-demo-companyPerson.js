'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('CompanyPerson', [{
        personId: 1,
        companyId: 1,       
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 3,
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 2,
        companyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 6,
        companyId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 5,
        companyId: 3, 
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('CompanyPerson', null, {});

  }
};

