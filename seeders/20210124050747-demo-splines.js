'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Splines', [{
        productId: 4,
        type: 'screen',
        material: 'foam',
        color: 'black',  
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        productId: 3,
        type: 'window 8245',
        material: 'rubber',
        color: 'gray',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        productId: 1,
        type: 'screen',
        material: 'rubber',
        color: 'gray', 
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        productId: 5, 
        type: 'screen',
        material: 'foam',
        color: 'black', 
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Splines', null, {});

  }
};

