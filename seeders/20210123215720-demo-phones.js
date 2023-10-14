'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Query actual IDs from the Person and Company tables
    const [persons] = await queryInterface.sequelize.query("SELECT id FROM People");
    const [companies] = await queryInterface.sequelize.query("SELECT id FROM Companies");

    // Original phone data meant to have personId
    const phonesForPersons = [
      {
         areaCd: '481',
         number: '5162342',
         type: 'cell',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         areaCd: '555',
         number: '1111111',
         type: 'cell',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         areaCd: '555',
         number: '2222222',
         type: 'home',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         areaCd: '555',
         number: '0000000',
         type: 'cell',
         createdAt: new Date(),
         updatedAt: new Date()
      }
    ];

    // Original phone data meant to have companyId
    const phonesForCompanies = [
      {
         areaCd: '555',
         number: '5555552',
         type: 'home',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         areaCd: '555',
         number: '5555551',
         type: 'cell',
         createdAt: new Date(),
         updatedAt: new Date()
      }
    ];

    // Map phone data with actual personId
    const phonesForPersonsMapped = phonesForPersons.map((phoneData, index) => {
      return {
        personId: persons[index % persons.length].id,
        ...phoneData
      };
    });

    // Map phone data with actual companyId
    const phonesForCompaniesMapped = phonesForCompanies.map((phoneData, index) => {
      return {
        companyId: companies[index % companies.length].id,
        ...phoneData
      };
    });

    // Combine both arrays
    const phonesData = [...phonesForPersonsMapped, ...phonesForCompaniesMapped];
    
    // Now seed Phones table
    await queryInterface.bulkInsert('Phones', phonesData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Phones', null, {});
  }
};
