"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = __importStar(require("sequelize"));
;
const attr = {
    nom_usuario: { type: Sequelize.STRING, allowNull: false, primaryKey: true, unique: true },
    contrasena: Sequelize.STRING,
    documento: Sequelize.STRING,
    nombre: Sequelize.STRING,
    telefono: Sequelize.STRING,
    direccion: Sequelize.STRING,
    foto: Sequelize.STRING,
};
exports.default = (sequalize) => {
    const attributes = {
        id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        email: { type: Sequelize.STRING, allowNull: false },
        name: { type: Sequelize.STRING, allowNull: false },
        speciality: { type: Sequelize.STRING, allowNull: false, defaultValue: false },
        phone: { type: Sequelize.STRING, allowNull: false, defaultValue: false },
        photo: { type: Sequelize.STRING, allowNull: false, defaultValue: false },
    };
    return sequalize.define("doctor", attributes, {});
};
//# sourceMappingURL=Pacientes.js.map