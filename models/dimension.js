'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dimension extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dimension.belongsTo(models.Product);
      Dimension.belongsTo(models.Frame);
      Dimension.belongsTo(models.Spline);
      Dimension.belongsTo(models.Hardware);
    }
  };
  Dimension.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    width: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    depth: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Dimension',
  });
  return Dimension;
};