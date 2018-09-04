'use strict';
module.exports = (sequelize, DataTypes) => {
  var seguim_solicitud = sequelize.define('seguim_solicitud', {
    id: DataTypes.NUMBER,
    solicitud_id: DataTypes.NUMBER,
    diagnostico: DataTypes.STRING,
    observacion: DataTypes.STRING
  }, {});
  seguim_solicitud.associate = function(models) {
    // associations can be defined here
  };
  return seguim_solicitud;
};