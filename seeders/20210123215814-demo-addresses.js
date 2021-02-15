'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Addresses', [{
        personId: 1,
        address1: '123 Nomad lane',
        city: 'Island',
        state: 'IN',
        zipCd: '00000',
        comments: '',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 6,
        address1: '42 Mansion Way',
        city: 'Texas',
        state: 'TX',
        zipCd: '11111',
        comments: "It's a mansion",
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 6,
        address1: '1 Darma Place',
        city: 'Island',
        state: 'IN',
        zipCd: '00000',
        comments: "It's the island",
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        personId: 2,
        address1: '7 Shepard Blvd',
        city: 'Island',
        state: 'IN',
        zipCd: '00000',
        comments: '',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        companyId: 1,
        address1: '45 Island Protector Place',
        city: 'Island',
        state: 'IN',
        zipCd: '00000',
        comments: '',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        companyId: 2,
        address1: '67 Leader Place',
        city: 'Island',
        state: 'IN',
        zipCd: '00000',
        comments: "It's a small company.",
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Addresses', null, {});

  }
};
