'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('OrderProducts', [{
        orderId: 1,
        productId: 4,       
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        orderId: 2,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        orderId: 3,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        orderId: 4,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        orderId: 5,
        productId: 5, 
        createdAt: new Date(),
        updatedAt: new Date()
     }
     ,
     {
        orderId: 1,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        orderId: 2,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        orderId: 3,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        orderId: 4,
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        orderId: 5,
        productId: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        orderId: 4,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        orderId: 5,
        productId: 2, 
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      orderId: 6,
      productId: 5, 
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
         orderId: 7,
         productId: 7, 
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         orderId: 8,
         productId: 2, 
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         orderId: 8,
         productId: 6, 
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         orderId: 9,
         productId: 3, 
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         orderId: 9,
         productId: 4, 
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         orderId: 10,
         productId: 4, 
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         orderId: 10,
         productId: 3, 
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         orderId: 10,
         productId: 2, 
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         orderId: 10,
         productId: 1, 
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         orderId: 10,
         productId: 5, 
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         orderId: 11,
         productId: 6, 
         createdAt: new Date(),
         updatedAt: new Date()
      },{
         orderId: 11,
         productId: 7, 
         createdAt: new Date(),
         updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('OrderProducts', null, {});

  }
};

