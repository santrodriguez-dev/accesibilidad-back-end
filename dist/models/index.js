"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// import { Sequelize } from "sequelize/types";
// import * as Sequelize from 'C:/repos/Backup/emergencias-back-end/node_modules/@types/sequelize'
// import * as Sequelize from 'C:/repos/Backup/emergencias-back-end/node_modules/@types/sequelize';
// import { Sequelize } from "sequelize/types";
// import { Sequelize } from "sequelize";
// import * as Sequelize from 'sequelize'
// import { Sequelize } from "sequelize";
// import Sequelize from 'sequelize'
const env = process.env.NODE_ENV || "production";
const config = require(__dirname + "./../../config/config.json")[env];
exports.sequelizeBD = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
exports.sequelizeBD
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
//# sourceMappingURL=index.js.map