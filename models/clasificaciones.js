'use strict';
module.exports = (sequelize, DataTypes) => {
  var clasificaciones = sequelize.define('clasificaciones', {
    id: DataTypes.NUMBER,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {});
  clasificaciones.associate = function(models) {
    // associations can be defined here
  };
  return clasificaciones;
};