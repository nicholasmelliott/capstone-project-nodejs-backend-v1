'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('People', [{
        fName: 'John',
        lName: 'Locke',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        fName: 'Jack',
        lName: 'Shepard',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        fName: 'Ben',
        lName: 'Linus',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        fName: 'Kate',
        lName: 'Austen',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        fName: 'James',
        lName: 'Ford',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        fName: 'Hugo',
        lName: 'Reyes',
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});

  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('People', null, {});
  }
};
