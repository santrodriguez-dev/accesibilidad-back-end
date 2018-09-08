"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const _1 = require(".");
const Solicitudes_1 = require("./Solicitudes");
const attributes = {
    id: { type: sequelize_1.default.NUMERIC, autoIncrement: true, allowNull: false, primaryKey: true, unique: true },
    solicitud_id: { type: sequelize_1.default.STRING, },
    diagnostico: { type: sequelize_1.default.STRING },
    observacion: { type: sequelize_1.default.STRING },
};
const seguim_solicitudM = _1.sequelize.define('seguim_solicitud', attributes, { tableName: 'seguim_solicitud' });
seguim_solicitudM.belongsTo(Solicitudes_1.SolicitudesModel, { foreignKey: "solicitud_id" });
exports.Seguim_solicitudModel = seguim_solicitudM;
//# sourceMappingURL=Seguim_solicitud.js.map