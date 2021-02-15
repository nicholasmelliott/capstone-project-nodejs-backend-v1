'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Order, {
        as: 'products',
        through: 'OrderProduct',
        foreignKey: 'productId'
      });
      Product.hasOne(models.Dimension, {
        foreignKey: {
          fieldname: 'productId',
          allowNull: true
        }
      });
      Product.hasOne(models.Spline, {
        foreignKey: {
          fieldname: 'productId',
          allowNull: true
        }
      });
      Product.hasMany(models.Hardware, {
        as: 'hardware',
        foreignKey: {
          fieldName: 'productId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      Product.hasMany(models.Frame, {
        as: 'frames',
        foreignKey: {
          fieldName: 'productId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
    }
  };
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: DataTypes.INTEGER,
    type: DataTypes.STRING,
    comments: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};