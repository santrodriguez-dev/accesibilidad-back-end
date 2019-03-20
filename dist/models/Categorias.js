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
const categoriasM = _1.sequelize.define('categorias', attributes);
// categoriasM.hasOne(ClasificacionesModel, { as: 'categoria', foreignKey: 'categoria_id' });
exports.CategoriasModel = categoriasM;
//# sourceMappingURL=Categorias.js.map