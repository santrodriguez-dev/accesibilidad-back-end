"use strict";
// import * as Sequelize from 'C:/repos/Backup/emergencias-back-end/node_modules/@types/sequelize';
// import { sequelizeBD } from ".";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// export interface CommentAttributes {
//     id?: number;
//     text: string;
//     createdAt?: Date;
//     updatedAt?: Date;
//     post?: any;
//     author?: any;
//     upvoters?: any;
// };
// export interface CommentInstance extends Sequelize.Instance<CommentAttributes>, CommentAttributes {
//     countUpvoters: Sequelize.BelongsToManyCountAssociationsMixin;
// };
// export const CommentFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) => {
//     const attributes = {
//         text: {
//             type: DataTypes.STRING(1000)
//         }
//     };
//     const Comment = sequelizeBD.define('Comment', attributes);
//     return Comment;
// };
const sequelize_1 = __importDefault(require("sequelize"));
const _1 = require(".");
// import { SolicitudesModel } from "./Solicitudes";
const attributes = {
    nom_usuario: { type: sequelize_1.default.STRING, allowNull: false, primaryKey: true, unique: true },
    contrasena: sequelize_1.default.STRING,
    documento: sequelize_1.default.STRING,
    nombre: sequelize_1.default.STRING,
    telefono: sequelize_1.default.STRING,
    direccion: sequelize_1.default.STRING,
    foto: sequelize_1.default.STRING,
};
const pacientesM = _1.sequelizeBD.define('paciente', attributes);
// pacientesM.hasMany(SolicitudesModel, { as: 'solicitudes' });
exports.PacientesModel = pacientesM;
//# sourceMappingURL=Pacientes.js.map