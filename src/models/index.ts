// import { Sequelize } from "sequelize";
import Sequelize from 'sequelize'
const env = process.env.NODE_ENV || "production";
const config = require(__dirname + "./../../config/config.json")[env];

export const sequelize = new Sequelize(config.database, config.username, config.password, config);