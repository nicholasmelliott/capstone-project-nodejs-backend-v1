'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dimensions', [{
        splineId: 1,
        width: 0.180,       
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        splineId: 3,
        width: 0.145,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        splineId: 4,
        width: 0.160,
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Dimensions', null, {});

  }
};

