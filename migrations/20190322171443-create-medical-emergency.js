'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('medical_emergencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'patients',
          key: 'id',
        }
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'doctors',
          key: 'id',
        }
      },
      medical_center_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'medical_centers',
          key: 'id',
        }
      },
      date: {
        type: Sequelize.DATE
      },
      priority: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      patient_description: {
        type: Sequelize.STRING
      },
      doctor_description: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      coordLat: {
        type: Sequelize.STRING
      },
      coordLong: {
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
    return queryInterface.dropTable('medical_emergencies');
  }
};