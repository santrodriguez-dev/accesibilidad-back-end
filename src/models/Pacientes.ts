// import * as Sequelize from 'C:/repos/Backup/emergencias-back-end/node_modules/@types/sequelize';
// import { sequelizeBD } from ".";

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

import Sequelize from "sequelize";
import { sequelizeBD } from ".";
import { Paciente } from "../dto/Paciente";
// import { SolicitudesModel } from "./Solicitudes";

const attributes = {
    nom_usuario: { type: Sequelize.STRING, allowNull: false, primaryKey: true, unique: true },
    contrasena: Sequelize.STRING,
    documento: Sequelize.STRING,
    nombre: Sequelize.STRING,
    telefono: Sequelize.STRING,
    direccion: Sequelize.STRING,
    foto: Sequelize.STRING,
}
const pacientesM = sequelizeBD.define('paciente', attributes)

// pacientesM.hasMany(SolicitudesModel, { as: 'solicitudes' });

export const PacientesModel = pacientesM;