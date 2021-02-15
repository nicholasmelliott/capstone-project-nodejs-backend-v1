'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Hardware', [{
        productId: 4,
        type: 'plunger',
        material: 'metal',
        color: 'black',  
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        productId: 4,
        type: 'plunger',
        material: 'metal',
        color: 'black',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        productId: 4,
        type: 'plunger',
        material: 'metal',
        color: 'black',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        productId: 4,
        type: 'plunger',
        material: 'metal',
        color: 'black',
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Hardware', null, {});

  }
};

