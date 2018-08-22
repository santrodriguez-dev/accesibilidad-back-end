import Sequelize, { DefineAttributes } from "sequelize";
import { Credenciales } from "../dto/Usuario";
import { sequelize } from ".";

const attributes: DefineAttributes = {
    nombre: Sequelize.STRING,
    nom_usuario: Sequelize.STRING,
    contrasena: Sequelize.STRING
}
export const UsuariosModel = sequelize.define<Credenciales, Credenciales>('usuario', attributes)