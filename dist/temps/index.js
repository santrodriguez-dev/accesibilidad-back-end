"use strict";
// // import { Sequelize } from "sequelize";
// // import productFactory from "./Pacientes";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(config);
// export const sequelizeBD = new Sequelize(config.database, config.username, config.password, config);
// sequelizeBD.authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });
// // export const database = db;
// const db = {
//     sequelizeBD,
//     Sequelize,
//     // modelTest: productFactory(sequelizeBD),
//     // Product: initProduct(sequelize),
// };
// Object.values(db).forEach((model: any) => {
//     if (model.associate) {
//         model.associate(db);
//     }
// });
const sequelize_typescript_1 = require("sequelize-typescript");
// import { Doctor } from './patient';
// const credentials = config[get('NODE_ENV', 'development')];
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "./../config/config.json")[env];
console.log(config);
exports.sequelizeBD = new sequelize_typescript_1.Sequelize({
    database: config.database,
    dialect: config.dialect,
    username: config.username,
    password: config.password,
    storage: ':memory:',
    modelPaths: [__dirname + '/']
});
