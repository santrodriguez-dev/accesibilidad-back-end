import * as Sequelize from 'sequelize';
import { ModelAttributes } from "sequelize/types";
import { sequelizeBD } from '.';
// import * as db from '../models';

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

export default (sequalize: Sequelize.Sequelize) => {
    const attributes: ModelAttributes = {
        id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        email: { type: Sequelize.STRING, },
        name: { type: Sequelize.STRING, },
        speciality: { type: Sequelize.STRING },
        phone: { type: Sequelize.STRING },
        photo: { type: Sequelize.STRING },
    };
    return sequelizeBD.define("doctor", attributes, {});
};