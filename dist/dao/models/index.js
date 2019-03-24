"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const patient_1 = require("./patient");
const clinic_history_1 = require("./clinic-history");
const doctor_1 = require("./doctor");
const medical_center_1 = require("./medical-center");
const user_administrator_1 = require("./user-administrator");
const doctor_medical_center_1 = require("./doctor-medical.center");
const medical_emergency_1 = require("./medical-emergency");
const env = process.env.NODE_ENV || "production";
const config = require(__dirname + "./../../../config/config.json")[env];
// export const sequelizeBD = new Sequelize({
//     database: config.database,
//     dialect: config.dialect,
//     operatorsAliases: Op,
//     username: config.username,
//     password: config.password,
// });
exports.sequelizeBD = new sequelize_typescript_1.Sequelize(config.database, config.username, config.password, config);
const models = [
    patient_1.Patient,
    clinic_history_1.ClinicHistory,
    doctor_1.Doctor,
    user_administrator_1.UserAdministrator,
    medical_center_1.MedicalCenter,
    doctor_medical_center_1.DoctorMedicalCenter,
    medical_emergency_1.MedicalEmergency
];
exports.sequelizeBD.addModels(models);
//# sourceMappingURL=index.js.map