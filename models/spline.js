'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spline.belongsTo(models.Product);
      Spline.hasOne(models.Dimension, {
        foreignKey: {
          fieldname: 'splineId',
          allowNull: true
        }
      });
    }
  };
  Spline.init({
    type: DataTypes.STRING,
    material: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Spline',
  });
  return Spline;
};