"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const _1 = require(".");
const Categorias_1 = require("./Categorias");
const Clasificaciones_1 = require("./Clasificaciones");
const Pacientes_1 = require("./Pacientes");
const attributes = {
    id: { type: sequelize_1.default.NUMERIC, autoIncrement: true, allowNull: false, primaryKey: true, unique: true },
    paciente_id: { type: sequelize_1.default.STRING, },
    categoria_id: { type: sequelize_1.default.NUMERIC },
    clasificacion_id: { type: sequelize_1.default.NUMERIC },
    descripcion: { type: sequelize_1.default.STRING },
    direccion: { type: sequelize_1.default.STRING },
    coordLat: { type: sequelize_1.default.FLOAT },
    coordLong: { type: sequelize_1.default.FLOAT }
};
const solicitudesM = _1.sequelize.define('solicitudes', attributes);
Pacientes_1.PacientesModel.hasMany(solicitudesM, { foreignKey: 'paciente_id', sourceKey: 'nom_usuario' });
solicitudesM.belongsTo(Categorias_1.CategoriasModel, { foreignKey: "categoria_id" });
solicitudesM.belongsTo(Clasificaciones_1.ClasificacionesModel, { foreignKey: "clasificacion_id", as: "clasificacion" });
solicitudesM.belongsTo(Pacientes_1.PacientesModel, { foreignKey: "paciente_id" });
exports.SolicitudesModel = solicitudesM;
//# sourceMappingURL=Solicitudes.js.map