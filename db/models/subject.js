'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Subject.hasMany(models.Books)
    }
  };
  Subject.init({
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imageUrl: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};