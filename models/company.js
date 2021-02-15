'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.Phone, {
        as: 'companyPhone',
        foreignKey: {
          fieldName: 'companyId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      Company.hasMany(models.Email, {
        as: 'companyEmail',
        foreignKey: {
          fieldName: 'companyId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      Company.hasMany(models.Order, {
        as: 'companyOrders',
        foreignKey: {
          fieldName: 'companyId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      Company.belongsToMany(models.Person, {
        as: 'employees',
        through: 'CompanyPerson',
        foreignKey: {
          fieldName: 'companyId',
          type: DataTypes.INTEGER,
          allowNull: true
        },
        otherKey: 'personId',
      });
    }
  };
  Company.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    comments: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};