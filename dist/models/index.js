"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const patient_1 = require("./patient");
const clinic_history_1 = require("./clinic-history");
const doctor_1 = require("./doctor");
const medical_center_1 = require("./medical-center");
const user_administrator_1 = require("./user-administrator");
const doctor_medical_center_1 = require("./doctor-medical.center");
const medical_emergency_1 = require("./medical-emergency");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "./../../config/config.json")[env];
exports.sequelizeBD = new sequelize_typescript_1.Sequelize({
    database: config.database,
    dialect: config.dialect,
    operatorsAliases: sequelize_1.Op,
    username: config.username,
    password: config.password,
    storage: ':memory:',
});
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