'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Frame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Frame.belongsTo(models.Product, { 
        as: 'frames',
        foreignKey: {
          fieldName: 'productId',
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      Frame.hasOne(models.Dimension, {
        foreignKey: {
          fieldname: 'frameId',
          allowNull: true
        }
      });
      Frame.hasOne(models.Location, {
        foreignKey: {
          fieldname: 'frameId',
          allowNull: true
        }
      });
    }
  };
  Frame.init({
    type: DataTypes.STRING,
    material: DataTypes.STRING,
    color: DataTypes.STRING,
    mitre: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Frame',
  });
  return Frame;
};