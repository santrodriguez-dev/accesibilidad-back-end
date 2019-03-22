"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Pacientes_1 = __importDefault(require("./Pacientes"));
const env = process.env.NODE_ENV || "production";
const config = require(__dirname + "./../../config/config.json")[env];
console.log(config);
const sequelizeBD = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
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
    Sequelize: sequelize_1.Sequelize,
    modelTest: Pacientes_1.default(sequelizeBD),
};
Object.values(db).forEach((model) => {
    if (model.associate) {
        model.associate(db);
    }
});
exports.default = Pacientes_1.default(sequelizeBD);
//# sourceMappingURL=index.js.map