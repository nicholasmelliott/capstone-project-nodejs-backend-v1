'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Person.hasMany(models.Phone, {
        as: 'phone',
        foreignKey: {
          fieldName: 'personId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      Person.hasMany(models.Email, {
        as: 'email',
        foreignKey: {
          fieldName: 'personId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      Person.hasMany(models.Address, {
        as: 'address',
        foreignKey: {
          fieldName: 'personId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      Person.belongsToMany(models.Company, {
        as: 'employee',
        through: 'CompanyPerson',
        foreignKey: {
          fieldName: 'personId',
          type: DataTypes.INTEGER,
          allowNull: true
        },
        otherKey: 'companyId',
      });
      Person.hasMany(models.Order, {
        as: 'orders',
        foreignKey: {
          fieldName: 'personId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
    }
  };
  Person.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fName: DataTypes.STRING,
    lName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};