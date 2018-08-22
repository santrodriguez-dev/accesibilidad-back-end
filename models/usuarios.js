'use strict';
module.exports = (sequelize, DataTypes) => {
  var usuarios = sequelize.define('usuarios', {
    nom_usuario: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    nombre: DataTypes.STRING,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {});
  usuarios.associate = function(models) {
    // associations can be defined here
  };
  return usuarios;
};