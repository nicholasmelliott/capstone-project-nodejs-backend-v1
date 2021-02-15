'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.belongsTo(models.Hardware);
      Location.belongsTo(models.Frame);
    }
  };
  Location.init({
    bottomLeftToRight: DataTypes.FLOAT,
    bottomRightToLeft: DataTypes.FLOAT,
    bottomLeftToTop: DataTypes.FLOAT,
    bottomRightToTop: DataTypes.FLOAT,
    topLeftToRight: DataTypes.FLOAT,
    topRightToLeft: DataTypes.FLOAT,
    topLeftToBottom: DataTypes.FLOAT,
    topRightToBottom: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};