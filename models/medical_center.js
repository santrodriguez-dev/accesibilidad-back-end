'use strict';
module.exports = (sequelize, DataTypes) => {
  const medical_center = sequelize.define('medical_center', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    photo: DataTypes.STRING,
    description: DataTypes.STRING,
    coordLat: DataTypes.STRING,
    coordLong: DataTypes.STRING
  }, {});
  medical_center.associate = function(models) {
    // associations can be defined here
  };
  return medical_center;
};