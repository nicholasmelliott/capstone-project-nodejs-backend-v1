'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Person, { 
        as: 'orders',
        foreignKey: {
          fieldName: 'personId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      Order.belongsTo(models.Company, { 
        as: 'companyOrders',
        foreignKey: {
          fieldName: 'companyId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      Order.belongsToMany(models.Product, {
        as: 'products',
        through: 'OrderProduct',
        foreignKey: 'orderId'
      });
    }
  };
  Order.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: DataTypes.STRING,
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    personId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
    totalId: DataTypes.INTEGER,
    comments: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};