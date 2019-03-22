import * as Sequelize from 'sequelize';
import { ModelAttributes } from "sequelize/types";
import { sequelizeBD } from '../models';

export interface PacienteAttributes {
    id?: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    comments?: any;
    posts?: any;
    upvotedComments?: any;
};

const attr: ModelAttributes = {
    nom_usuario: { type: Sequelize.STRING, allowNull: false, primaryKey: true, unique: true },
    contrasena: Sequelize.STRING,
    documento: Sequelize.STRING,
    nombre: Sequelize.STRING,
    telefono: Sequelize.STRING,
    direccion: Sequelize.STRING,
    foto: Sequelize.STRING,
}

export const pacienteModel = sequelizeBD.define('paciente', attr);

// pacienteModel.has