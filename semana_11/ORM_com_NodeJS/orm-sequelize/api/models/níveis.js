'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Níveis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Níveis.init({
    descr_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Níveis',
  });
  return Níveis;
};