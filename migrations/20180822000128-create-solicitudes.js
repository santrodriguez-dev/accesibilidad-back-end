'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('solicitudes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      paciente_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'pacientes',
          key: 'nom_usuario'
        }
      },
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'categorias',
          key: 'id'
        }
      },
      clasificacion_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'clasificaciones',
          key: 'id'
        }
      },
      descripcion: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      direccion: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      coordLat: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      coordLong: {
        allowNull: true,
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('solicitudes');
  }
};