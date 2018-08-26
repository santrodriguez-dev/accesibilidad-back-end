import Sequelize, { DefineAttributes } from "sequelize";
import { sequelize } from ".";
import { Solicitud } from "../dto";
import { CategoriasModel } from "./Categorias";
import { ClasificacionesModel } from "./Clasificaciones";
import { PacientesModel } from "./Pacientes";

const attributes: DefineAttributes = {
    id: { type: Sequelize.NUMERIC, autoIncrement: true, allowNull: false, primaryKey: true, unique: true },
    paciente_id: { type: Sequelize.STRING, },
    categoria_id: { type: Sequelize.NUMERIC },
    clasificacion_id: { type: Sequelize.NUMERIC },
    descripcion: { type: Sequelize.STRING }
}

const solicitudesM = sequelize.define<Solicitud, Solicitud>('solicitudes', attributes);
PacientesModel.hasMany(solicitudesM, { foreignKey: 'paciente_id', sourceKey: 'nom_usuario' });

solicitudesM.belongsTo(CategoriasModel, { foreignKey: "categoria_id" });
solicitudesM.belongsTo(ClasificacionesModel, { foreignKey: "clasificacion_id", as: "clasificacion" });
solicitudesM.belongsTo(PacientesModel, { foreignKey: "paciente_id" });


export const SolicitudesModel = solicitudesM;