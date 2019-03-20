"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const _1 = require(".");
const attributes = {
    id: { type: sequelize_1.default.NUMBER, allowNull: false, primaryKey: true, unique: true },
    nombre: sequelize_1.default.STRING,
    descripcion: sequelize_1.default.STRING,
};
const clasificacionesM = _1.sequelize.define('clasificacione', attributes);
// clasificacionesM.hasOne(SolicitudesModel, { as: 'clasificacion', foreignKey: 'clasificacion_id' });
exports.ClasificacionesModel = clasificacionesM;
//# sourceMappingURL=Clasificaciones.js.map