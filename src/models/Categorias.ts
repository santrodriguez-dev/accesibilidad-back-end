import Sequelize, { DefineAttributes } from "sequelize";
import { sequelize } from ".";
import { Categoria } from "../dto";

const attributes: DefineAttributes = {
    id: { type: Sequelize.NUMERIC, allowNull: false, primaryKey: true, unique: true },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
}

const categoriasM = sequelize.define<Categoria, Categoria>('categorias', attributes)
// categoriasM.hasOne(ClasificacionesModel, { as: 'categoria', foreignKey: 'categoria_id' });

export const CategoriasModel = categoriasM;