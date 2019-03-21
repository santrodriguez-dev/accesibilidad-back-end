// import Sequelize, { DefineModelAttributes } from "sequelize";
// import { sequelize } from ".";
// import { Seguim_solicitud } from "../dto";
// import { SolicitudesModel } from "./Solicitudes";
// const attributes: DefineModelAttributes<Seguim_solicitud> = {
//     id: { type: Sequelize.NUMBER, autoIncrement: true, allowNull: false, primaryKey: true, unique: true },
//     solicitud_id: { type: Sequelize.STRING, },
//     diagnostico: { type: Sequelize.STRING },
//     observacion: { type: Sequelize.STRING },
// }
// const seguim_solicitudM = sequelize.define<Seguim_solicitud, Seguim_solicitud>('seguim_solicitud', attributes, { tableName: 'seguim_solicitud' });
// seguim_solicitudM.belongsTo(SolicitudesModel, { foreignKey: "solicitud_id" });
// export const Seguim_solicitudModel = seguim_solicitudM;
//# sourceMappingURL=Seguim_solicitud.js.map