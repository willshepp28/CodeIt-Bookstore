'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      return await queryInterface.bulkInsert("Authors", [
        { firstname: "Robert", lastname: "Martin", image_url: "https://images-na.ssl-images-amazon.com/images/I/61b7VTCUEfL._US230_.jpg", createdAt: new Date(), updatedAt: new Date()},
        { firstname: "Matt", lastname: "Frisbie", image_url: "https://images-na.ssl-images-amazon.com/images/I/51MS64S4SFL._US230_.jpg", createdAt: new Date(), updatedAt: new Date()},
        { firstname: "Mario", lastname: "Casciaro", image_url: "https://images-na.ssl-images-amazon.com/images/I/B1bnIhmbpFS._US230_.jpg", createdAt: new Date(), updatedAt: new Date()},
        { firstname: "David", lastname: "Herron", image_url: "https://images-na.ssl-images-amazon.com/images/I/51w4A+hnbCL._US230_.jpg", createdAt: new Date(), updatedAt: new Date()},
        { firstname: "Jonathan", lastname: "Wexler", image_url: "https://images-na.ssl-images-amazon.com/images/I/81xjxyYx1KL._US230_.jpg", createdAt: new Date(), updatedAt: new Date()},
        { firstname: "David", lastname: "Flanagan", image_url: "https://images-na.ssl-images-amazon.com/images/I/61ONpOKBYiL._US230_.jpg", createdAt: new Date(), updatedAt: new Date()},
        { firstname: "Eric", lastname: "Freeman", image_url: "https://images-na.ssl-images-amazon.com/images/I/811zfTU4RoL._US230_.jpg", createdAt: new Date(), updatedAt: new Date()},
        { firstname: "Ben", lastname: "Forta", image_url: "https://images-na.ssl-images-amazon.com/images/I/61MFKZA6jHL._US230_.jpg", createdAt: new Date(), updatedAt: new Date()}
      ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Authors", null, {});
  }
};
