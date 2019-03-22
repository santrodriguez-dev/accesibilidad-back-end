'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_administrator = sequelize.define('user_administrator', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    identification: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {});
  user_administrator.associate = function(models) {
    // associations can be defined here
  };
  return user_administrator;
};