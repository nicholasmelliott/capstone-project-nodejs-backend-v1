'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Emails', [{
        personId: 1,
        emailAddress: 'john@locke.com',  
        type: 'work',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 6,
        emailAddress: 'hugo@reyes.com',
        type: 'home',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 6,
        emailAddress: 'hurley@reyes.com',
        type: 'work',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 2,
        emailAddress: 'jack@shepard.com',
        type: 'work',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        companyId: 1,
        emailAddress: 'contact@islandprotector.com',
        type: 'work',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        companyId: 2,
        emailAddress: 'contact@leadercompany.com',
        type: 'work',
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Emails', null, {});

  }
};

