'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pacientes', {
      nom_usuario: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      contrasena: {
        allowNull: false,
        type: Sequelize.STRING
      },
      documento: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telefono: {
        allowNull: false,
        type: Sequelize.STRING
      },
      direccion: {
        allowNull: true,
        type: Sequelize.STRING
      },
      foto: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pacientes');
  }
};