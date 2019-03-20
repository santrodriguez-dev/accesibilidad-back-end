import Sequelize, { DefineModelAttributes } from "sequelize";
import { sequelize } from ".";
import { Solicitud } from "../dto";
import { CategoriasModel } from "./Categorias";
import { ClasificacionesModel } from "./Clasificaciones";
import { PacientesModel } from "./Pacientes";

const attributes: DefineModelAttributes<Solicitud> = {
    id: { type: Sequelize.NUMBER, autoIncrement: true, allowNull: false, primaryKey: true, unique: true },
    paciente_id: { type: Sequelize.STRING, },
    categoria_id: { type: Sequelize.NUMBER },
    clasificacion_id: { type: Sequelize.NUMBER },
    descripcion: { type: Sequelize.STRING },
    direccion: { type: Sequelize.STRING },
    coordLat: { type: Sequelize.FLOAT },
    coordLong: { type: Sequelize.FLOAT }
}

const solicitudesM = sequelize.define<Solicitud, Solicitud>('solicitudes', attributes);
PacientesModel.hasMany(solicitudesM, { foreignKey: 'paciente_id', sourceKey: 'nom_usuario' });

solicitudesM.belongsTo(CategoriasModel, { foreignKey: "categoria_id" });
solicitudesM.belongsTo(ClasificacionesModel, { foreignKey: "clasificacion_id", as: "clasificacion" });
solicitudesM.belongsTo(PacientesModel, { foreignKey: "paciente_id" });


export const SolicitudesModel = solicitudesM;