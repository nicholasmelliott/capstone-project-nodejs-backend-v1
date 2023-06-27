'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('People', [{
        fName:  'Jacob',
        lName: 'Brown',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        fName: 'Ava',
        lName: 'Davis',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        fName: 'Michael',
        lName: 'Wilson',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        fName: 'Mia',
        lName: 'Taylor',
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
        fName: 'William',
        lName: 'Clark',
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});

  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('People', null, {});
  }
};
