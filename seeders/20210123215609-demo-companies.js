'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Companies', [{
         name: 'Local Heroes Handyman',
         comments: "We go above and beyond to help you with all your home repair needs.",
         createdAt: new Date(),
         updatedAt: new Date()
     },
     {
         name: 'DryShield Roofing',
         comments: "We keep your house dry and protected with our top-notch roofing solutions.",
         createdAt: new Date(),
         updatedAt: new Date()
     },
     {
         name: 'City of Carmont',
         comments: 'We are dedicated to promoting sustainable development and preserving the natural beauty of our city.',
         createdAt: new Date(),
         updatedAt: new Date()
     }], {});

  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Companies', null, {});
     // Reset auto-increment counter for Companies
     await queryInterface.sequelize.query("ALTER TABLE Companies AUTO_INCREMENT = 1");
  }
};