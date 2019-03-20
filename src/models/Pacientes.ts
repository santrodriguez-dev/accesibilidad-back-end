import * as Sequelize from 'C:/repos/Backup/emergencias-back-end/node_modules/@types/sequelize';
import { sequelizeBD } from ".";

export interface CommentAttributes {
    id?: number;
    text: string;
    createdAt?: Date;
    updatedAt?: Date;
    post?: any;
    author?: any;
    upvoters?: any;
};

export interface CommentInstance extends Sequelize.Instance<CommentAttributes>, CommentAttributes {
    countUpvoters: Sequelize.BelongsToManyCountAssociationsMixin;
};

export const CommentFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<CommentInstance, CommentAttributes> => {
    const attributes = {
        text: {
            type: DataTypes.STRING(1000)
        }
    };

    const Comment = sequelizeBD.define<CommentInstance, CommentAttributes>('Comment', attributes);
    return Comment;
};

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