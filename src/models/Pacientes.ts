import Sequelize, { DefineModelAttributes } from "sequelize";
import { sequelize } from ".";
import { Paciente } from "../dto/Paciente";

const attributes: DefineModelAttributes<Paciente> = {
    nom_usuario: { type: Sequelize.STRING, allowNull: false, primaryKey: true, unique: true },
    contrasena: Sequelize.STRING,
    documento: Sequelize.STRING,
    nombre: Sequelize.STRING,
    telefono: Sequelize.STRING,
    direccion: Sequelize.STRING,
    foto: Sequelize.STRING,
}
const pacientesM = sequelize.define<Paciente, Paciente>('paciente', attributes)

// pacientesM.hasMany(SolicitudesModel, { foreignKey: 'paciente_id' });

export const PacientesModel = pacientesM;