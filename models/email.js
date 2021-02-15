'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Email.belongsTo(models.Person, { 
        as: 'email',
        foreignKey: {
          fieldName: 'personId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      Email.belongsTo(models.Company, { 
        as: 'companyEmail',
        foreignKey: {
          fieldName: 'companyId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
    }
  };
  Email.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    personId: {
      type: DataTypes.INTEGER
    },
    companyId: {
      type: DataTypes.INTEGER
    },
    emailAddress: DataTypes.STRING,
    type: DataTypes.STRING,
    comments: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Email',
  });
  return Email;
};