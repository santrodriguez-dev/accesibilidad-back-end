"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const clinic_history_1 = require("./clinic-history");
const medical_emergency_1 = require("./medical-emergency");
let Patient = class Patient extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Patient.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => clinic_history_1.ClinicHistory),
    __metadata("design:type", Array)
], Patient.prototype, "clinicHistories", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => medical_emergency_1.MedicalEmergency),
    __metadata("design:type", Array)
], Patient.prototype, "medicalEmergencies", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Patient.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Patient.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Patient.prototype, "identification", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Patient.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Patient.prototype, "birthdate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Patient.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Patient.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Patient.prototype, "photo", void 0);
Patient = __decorate([
    sequelize_typescript_1.Table({ modelName: 'patient' })
], Patient);
exports.Patient = Patient;
//# sourceMappingURL=patient.js.map