'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Query actual IDs from Person and Company tables
    const persons = await queryInterface.sequelize.query("SELECT id FROM People");
    const companies = await queryInterface.sequelize.query("SELECT id FROM Companies");

    // Prepare data for CompanyPerson using actual IDs
    const companyPersonData = persons[0].map((person, index) => {
      return {
        personId: person.id,
        companyId: companies[0][index % companies[0].length].id,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });

    // Now seed CompanyPerson table
    await queryInterface.bulkInsert('CompanyPerson', companyPersonData);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CompanyPerson', null, {});
  }
};
