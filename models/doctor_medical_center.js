'use strict';
module.exports = (sequelize, DataTypes) => {
  const doctor_medical_center = sequelize.define('doctor_medical_center', {
    doctor_id: DataTypes.STRING,
    medical_center_id: DataTypes.STRING
  }, {});
  doctor_medical_center.associate = function(models) {
    // associations can be defined here
  };
  return doctor_medical_center;
};