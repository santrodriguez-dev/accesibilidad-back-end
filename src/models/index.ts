import { Sequelize } from "sequelize";
import productFactory from "./Pacientes";

const env = process.env.NODE_ENV || "production";
const config = require(__dirname + "./../../config/config.json")[env];

console.log(config);

export const sequelizeBD = new Sequelize(config.database, config.username, config.password, config);

sequelizeBD.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// export const database = db;

const db = {
    sequelizeBD,
    Sequelize,
    modelTest: productFactory(sequelizeBD),
    // Product: initProduct(sequelize),
};

Object.values(db).forEach((model: any) => {
    if (model.associate) {
        model.associate(db);
    }
});

// export default productFactory(sequelizeBD);
