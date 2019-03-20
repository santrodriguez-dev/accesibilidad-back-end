import Sequelize, { ModelAttributeColumnOptions } from "sequelize";
import { Usuario } from "../dto/Usuario";
import { sequelizeBD } from ".";

const attributes = {
    nom_usuario: { type: Sequelize.STRING, allowNull: false, primaryKey: true, unique: true },
    contrasena: Sequelize.STRING,
    nombre: Sequelize.STRING,
    telefono: Sequelize.STRING,
    direccion: Sequelize.STRING,
    foto: Sequelize.STRING,
}
export const UsuariosModel = sequelizeBD.define('usuario', attributes)