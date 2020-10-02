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
  //  firstname: {
  //   allowNull: false,
  //   type: DataTypes.STRING,
  //   validate: {
  //     notEmpty: {
  //       msg: "Please enter the authors first name"
  //     }
  //   }
  // },
  // lastname: {
  //   allowNull: false,
  //   type: DataTypes.STRING,
  //   validate: {
  //     notEmpty: {
  //       msg: "Please enter the authors last name"
  //     }
  //   }
  // },
  // image_url: {
  //   allowNull: false,
  //   type: DataTypes.TEXT
  // },
  // bio: DataTypes.TEXT
      return await queryInterface.bulkInsert("Authors", [
        { firstname: "Robert", lastname: "Martin", image_url: "https://images-na.ssl-images-amazon.com/images/I/61b7VTCUEfL._US230_.jpg"},
        { firstname: "Matt", lastname: "Frisbie", image_url: "https://images-na.ssl-images-amazon.com/images/I/51MS64S4SFL._US230_.jpg"},
        { firstname: "Mario", lastname: "Casciaro", image_url: "https://images-na.ssl-images-amazon.com/images/I/B1bnIhmbpFS._US230_.jpg"},
        { firstname: "David", lastname: "Herron", image_url: "https://images-na.ssl-images-amazon.com/images/I/51w4A+hnbCL._US230_.jpg"},
        { firstname: "", lastname: "", image_url: ""},
        { firstname: "", lastname: "", image_url: ""},
        { firstname: "", lastname: "", image_url: ""}
      ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
