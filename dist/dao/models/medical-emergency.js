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
const patient_1 = require("./patient");
const doctor_1 = require("./doctor");
const medical_center_1 = require("./medical-center");
let MedicalEmergency = class MedicalEmergency extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], MedicalEmergency.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => patient_1.Patient),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], MedicalEmergency.prototype, "patient_id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => patient_1.Patient),
    __metadata("design:type", patient_1.Patient)
], MedicalEmergency.prototype, "patient", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => doctor_1.Doctor),
    sequelize_typescript_1.AllowNull(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], MedicalEmergency.prototype, "doctor_id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => doctor_1.Doctor),
    __metadata("design:type", doctor_1.Doctor)
], MedicalEmergency.prototype, "doctor", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => medical_center_1.MedicalCenter),
    sequelize_typescript_1.AllowNull(true),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], MedicalEmergency.prototype, "medical_center_id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => medical_center_1.MedicalCenter),
    __metadata("design:type", medical_center_1.MedicalCenter)
], MedicalEmergency.prototype, "medicalCenter", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MedicalEmergency.prototype, "priority", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MedicalEmergency.prototype, "state", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], MedicalEmergency.prototype, "photo", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MedicalEmergency.prototype, "patient_description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MedicalEmergency.prototype, "doctor_description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MedicalEmergency.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], MedicalEmergency.prototype, "coordLat", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], MedicalEmergency.prototype, "coordLong", void 0);
MedicalEmergency = __decorate([
    sequelize_typescript_1.Table({ modelName: 'medical_emergency' })
], MedicalEmergency);
exports.MedicalEmergency = MedicalEmergency;
//# sourceMappingURL=medical-emergency.js.map