'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Frames', [{
        productId: 4,
        type: 'standard',
        material: 'aluminum',
        color: 'bronze', 
        mitre: false,  
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        productId: 3,
        type: 'storm window',
        material: 'aluminum',
        color: 'bright', 
        mitre: true,  
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        productId: 1,
        type: 'storm screen',
        material: 'aluminum',
        color: 'white', 
        mitre: true,  
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        productId: 5, 
        type: 'standard',
        material: 'aluminum',
        color: 'almond', 
        mitre: false,  
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
       productId: 4,
       type: 'center brace',
       material: 'aluminum',
       color: 'bronze', 
       mitre: false,  
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       productId: 5, 
       type: 'center brace',
       material: 'aluminum',
       color: 'almond', 
       mitre: false,  
       createdAt: new Date(),
       updatedAt: new Date()
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Frames', null, {});

  }
};

