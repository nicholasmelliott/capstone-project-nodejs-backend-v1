'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Locations', [{
        hardwareId: 1,
        bottomLeftToTop: 5.125,       
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        hardwareId: 2,
        bottomRightToTop: 5.125,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        hardwareId: 3,
        topLeftToRight: 4.125,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        hardwareId: 4,
        topRightToLeft: 4.125,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Locations', null, {});

  }
};

