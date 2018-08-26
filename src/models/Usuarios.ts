import Sequelize, { DefineAttributes } from "sequelize";
import { Credenciales, Usuario } from "../dto/Usuario";
import { sequelize } from ".";

const attributes: DefineAttributes = {
    nom_usuario: { type: Sequelize.STRING, allowNull: false, primaryKey: true, unique: true },
    contrasena: Sequelize.STRING,
    nombre: Sequelize.STRING,
    telefono: Sequelize.STRING,
    direccion: Sequelize.STRING,
    foto: Sequelize.STRING,
}
export const UsuariosModel = sequelize.define<Usuario, Usuario>('usuario', attributes)