import Sequelize, { DefineAttributes } from "sequelize";
import { sequelize } from ".";
import { Clasificacion } from "../dto";
import { SolicitudesModel } from "./Solicitudes";

const attributes: DefineAttributes = {
    id: { type: Sequelize.NUMERIC, allowNull: false, primaryKey: true, unique: true },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
}

const clasificacionesM = sequelize.define<Clasificacion, Clasificacion>('clasificacione', attributes)
// clasificacionesM.hasOne(SolicitudesModel, { as: 'clasificacion', foreignKey: 'clasificacion_id' });

export const ClasificacionesModel = clasificacionesM
