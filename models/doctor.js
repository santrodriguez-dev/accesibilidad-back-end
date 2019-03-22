'use strict';
module.exports = (sequelize, DataTypes) => {
  const doctor = sequelize.define('doctor', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    speciality: DataTypes.STRING,
    phone: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {});
  doctor.associate = function(models) {
    // associations can be defined here
  };
  return doctor;
};