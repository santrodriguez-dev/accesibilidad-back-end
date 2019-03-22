'use strict';
module.exports = (sequelize, DataTypes) => {
  const clinic_history = sequelize.define('clinic_history', {
    patient_id: DataTypes.STRING,
    diagnosis: DataTypes.STRING,
    severity_level: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  clinic_history.associate = function(models) {
    // associations can be defined here
  };
  return clinic_history;
};