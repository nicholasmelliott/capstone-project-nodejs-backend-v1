'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Locations', [{
        frameId: 5,
        bottomLeftToTop: 10.00,
        bottomRightToTop: 10.00,       
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        frameId: 6,
        bottomLeftToTop: 6.125,
        bottomRightToTop: 6.125,   
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Locations', null, {});

  }
};

