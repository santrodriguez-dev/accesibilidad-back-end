"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// import { Sequelize } from "sequelize";
// import Sequelize from 'sequelize'
const env = process.env.NODE_ENV || "production";
const config = require(__dirname + "./../../config/config.json")[env];
exports.sequelizeBD = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
//# sourceMappingURL=index.js.map