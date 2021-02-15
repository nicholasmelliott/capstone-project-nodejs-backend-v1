'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [{
        personId: 1,
        type:'Build',
        comments: 'Building 4 screens.',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 6,
        type:'Repair',
        comments: 'Repairing 20 screens.',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 6,
        complete: true,
        type:'Repair',
        comments: 'Repairing strom window.',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 2,
        type:'Cut Glass',
        comments: 'Cutting glass 10 x 20.',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        companyId: 1,
        type:'Build',
        complete: true,
        comments: 'Building frame without glass.', 
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        companyId: 2,
        type:'Cut Glass',
        comments: 'Cutting 15 pieces of glass @ 34 x 72.', 
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Orders', null, {});

  }
};

