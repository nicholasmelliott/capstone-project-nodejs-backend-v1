'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dimensions', [{
        frameId: 1,
        depth: 0.4375,       
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        frameId: 2,
        depth: 0.375, 
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        frameId: 3,
        depth: 0.375,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        frameId: 4,
        depth: 0.3125,
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Dimensions', null, {});

  }
};

