'use strict';
module.exports = (sequelize, DataTypes) => {
  var pacientes = sequelize.define('pacientes', {
    nom_usuario: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    documento: DataTypes.STRING,
    nombre: DataTypes.STRING,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING
  }, {});
  pacientes.associate = function(models) {
    // associations can be defined here
  };
  return pacientes;
};