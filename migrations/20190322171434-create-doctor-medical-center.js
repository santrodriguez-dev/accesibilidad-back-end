'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('doctor_medical_centers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'doctors', // name of Target model
          key: 'id', // key in Target model that we're referencing
        }
      },
      medical_center_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'medical_centers', // name of Target model
          key: 'id', // key in Target model that we're referencing
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('doctor_medical_centers');
  }
};