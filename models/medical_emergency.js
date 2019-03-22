'use strict';
module.exports = (sequelize, DataTypes) => {
  const medical_emergency = sequelize.define('medical_emergency', {
    patient_id: DataTypes.STRING,
    doctor_id: DataTypes.STRING,
    medical_center_id: DataTypes.STRING,
    date: DataTypes.DATE,
    priority: DataTypes.STRING,
    state: DataTypes.STRING,
    photo: DataTypes.STRING,
    patient_description: DataTypes.STRING,
    doctor_description: DataTypes.STRING,
    address: DataTypes.STRING,
    coordLat: DataTypes.STRING,
    coordLong: DataTypes.STRING
  }, {});
  medical_emergency.associate = function(models) {
    // associations can be defined here
  };
  return medical_emergency;
};