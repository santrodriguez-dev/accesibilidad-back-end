'use strict';
module.exports = (sequelize, DataTypes) => {
  const patient = sequelize.define('patient', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    identification: DataTypes.STRING,
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {});
  patient.associate = function(models) {
    // associations can be defined here
  };
  return patient;
};