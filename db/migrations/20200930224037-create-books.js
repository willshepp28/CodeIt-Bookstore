'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      overview: {
        type: Sequelize.TEXT
      },
      subjectId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Subjects",
          key: "id"
        }
      },
      authorId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Authors",
          key: "id"
        }
      },
      pages: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DOUBLE
      },
      purchase_url: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};