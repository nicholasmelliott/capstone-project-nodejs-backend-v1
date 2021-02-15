'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
        quantity: 2,
        type:'storm window',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        quantity: 4,
        type:'glass',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        quantity: 3,
        type:'strom screen',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {  
        quantity: 19,
        type:'screen',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {

        quantity: 12,
        type:'window',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        quantity: 1,
        type:'glass',
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Products', null, {});

  }
};

