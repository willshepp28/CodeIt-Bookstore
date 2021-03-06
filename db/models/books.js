'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Books.belongsTo(models.Subject, { onDelete: "CASCADE"});
      models.Books.belongsTo(models.Author, { onDelete: "CASCADE"});
    }
  };
  Books.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    overview: DataTypes.TEXT,
    subjectId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    pages: DataTypes.INTEGER,
    price:{
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    image_url: {
      type: DataTypes.TEXT
    },
    purchase_url: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};