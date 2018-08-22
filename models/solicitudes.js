'use strict';
module.exports = (sequelize, DataTypes) => {
  var solicitudes = sequelize.define('solicitudes', {
    id: DataTypes.NUMBER,
    paciente_id: DataTypes.STRING,
    categoria_id: DataTypes.NUMBER,
    clasificacion_id: DataTypes.NUMBER
  }, {});
  solicitudes.associate = function(models) {
    // associations can be defined here
  };
  return solicitudes;
};