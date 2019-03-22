import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || "production";
const config = require(__dirname + "./../../config/config.json")[env];

console.log(config);

export const sequelizeBD = new Sequelize(config.database, config.username, config.password, config);

sequelizeBD
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });