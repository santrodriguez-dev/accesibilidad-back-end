'use strict';
module.exports = (sequelize, DataTypes) => {
  var categorias = sequelize.define('categorias', {
    id: DataTypes.NUMBER,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {});
  categorias.associate = function(models) {
    // associations can be defined here
  };
  return categorias;
};