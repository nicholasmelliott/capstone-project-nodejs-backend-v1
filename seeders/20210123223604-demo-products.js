'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
        quantity: 2,
        type:'storm window',
        service: 'build',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        quantity: 4,
        type:'glass',
        service: 'cut glass',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        quantity: 3,
        type:'storm screen',
        service: 'repair',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {  
        quantity: 19,
        type:'screen',
        service: 'repair',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        quantity: 12,
        type:'window',
        service: 'build',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        quantity: 8,
        type:'glass',
        service: 'cut glass',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        quantity: 5,
        type:'window',
        service: 'build',
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Products', null, {});

  }
};

