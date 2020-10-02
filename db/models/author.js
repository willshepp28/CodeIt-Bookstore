'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Author.hasMany(models.Books);
    }
  };
  Author.init({
    firstname: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please enter the authors first name"
        }
      }
    },
    lastname: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Please enter the authors last name"
        }
      }
    },
    image_url: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    bio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};