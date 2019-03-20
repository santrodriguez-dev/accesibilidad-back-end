"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = __importStar(require("sequelize"));
const _1 = require(".");
exports.User = _1.sequelizeBD.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING
});
// import Sequelize, { DefineModelAttributes } from "sequelize";
// import { sequelize } from ".";
// import { Paciente } from "../dto/Paciente";
// import { SolicitudesModel } from "./Solicitudes";
// const attributes: DefineModelAttributes<Paciente> = {
//     nom_usuario: { type: Sequelize.STRING, allowNull: false, primaryKey: true, unique: true },
//     contrasena: Sequelize.STRING,
//     documento: Sequelize.STRING,
//     nombre: Sequelize.STRING,
//     telefono: Sequelize.STRING,
//     direccion: Sequelize.STRING,
//     foto: Sequelize.STRING,
// }
// const pacientesM = sequelize.define<Paciente, Paciente>('paciente', attributes)
// // pacientesM.hasMany(SolicitudesModel, { as: 'solicitudes' });
// export const PacientesModel = pacientesM;
//# sourceMappingURL=Pacientes.js.map