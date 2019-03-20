import * as Sequelize from 'C:/repos/Backup/emergencias-back-end/node_modules/@types/sequelize'
// import * as Sequelize from 'C:/repos/Backup/emergencias-back-end/node_modules/@types/sequelize';

// import { Sequelize } from "sequelize/types";

// import { Sequelize } from "sequelize";
// import * as Sequelize from 'sequelize'

// import { Sequelize } from "sequelize";
// import Sequelize from 'sequelize'
const env = process.env.NODE_ENV || "production";
const config = require(__dirname + "./../../config/config.json")[env];

export const sequelizeBD = new Sequelize.Sequelize(config.database, config.username, config.password, config);