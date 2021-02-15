'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Companies', [{
        name: 'Island Protector Inc.',
        comments: 'We believe we need to protect the island at all costs.',        
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        name: 'Leader Company',
        comments: "We lead even when we don't want to.",
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        name: "Everybody's Friend Services",
        comments: "We are everyone's friend. And don't you forget it!",       
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});

  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Companies', null, {});
  }
};