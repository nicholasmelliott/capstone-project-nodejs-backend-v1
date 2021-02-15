'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dimensions', [{
        productId: 4,
        width: 10.00,
        height: 20.00,
        depth: 0.125,       
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        productId: 3,
        width: 32.125,
        height: 28.125,
        depth: 0.3135, 
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        productId: 1,
        width: 20.00,
        height: 20.00,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        productId: 2,
        width: 10.00,
        height: 20.00,
        depth: 0.125, 
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        productId: 5, 
        width: 10.00,
        height: 10.70,
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Dimensions', null, {});

  }
};

