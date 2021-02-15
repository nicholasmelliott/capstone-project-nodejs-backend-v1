'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Phones', [{
        personId: 1,
        areaCd: '481',
        number: '5162342',
        type: 'cell',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 6,
        areaCd: '555',
        number: '1111111',
        type: 'cell',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 6,
        areaCd: '555',
        number: '2222222',
        type: 'home',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 2,
        areaCd: '555',
        number: '0000000',
        type: 'cell',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        companyId: 1,
        areaCd: '555',
        number: '5555552',
        type: 'home',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        companyId: 2,
        areaCd: '555',
        number: '5555551',
        type: 'cell',
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Phones', null, {});

  }
};
