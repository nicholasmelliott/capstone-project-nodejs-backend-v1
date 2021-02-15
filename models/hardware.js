'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hardware extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hardware.belongsTo(models.Product, { 
        as: 'hardware',
        foreignKey: {
          fieldName: 'productId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      Hardware.hasOne(models.Location, {
        foreignKey: {
          fieldname: 'hardwareId',
          allowNull: true
        }
      });
      Hardware.hasOne(models.Dimension, {
        foreignKey: {
          fieldname: 'hardwareId',
          allowNull: true
        }
      });
    }
  };
  Hardware.init({
    type: DataTypes.STRING,
    material: DataTypes.STRING,
    color: DataTypes.STRING,
    comments: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Hardware',
  });
  return Hardware;
};