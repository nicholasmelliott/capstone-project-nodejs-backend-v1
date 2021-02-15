'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dimensions', [{
        hardwareId: 1,
        width: 0.1875,       
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        hardwareId: 2,
        width: 0.1875,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        hardwareId: 3,
        width: 0.1875,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        hardwareId: 4,
        width: 0.1875,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Dimensions', null, {});

  }
};

