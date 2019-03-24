"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("./server-response");
const medical_emergency_1 = require("../models/medical-emergency");
class MedicalEmergencyIm {
    constructor() {
        this.serverResponse = new server_response_1.ServerResponse;
    }
    getAll() {
        return medical_emergency_1.MedicalEmergency.findAll().then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    get(id) {
        return medical_emergency_1.MedicalEmergency.findByPk(id).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    getByPatientId(patientId) {
        return medical_emergency_1.MedicalEmergency.findAll({ where: { patient_id: patientId } }).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    create(patient) {
        return medical_emergency_1.MedicalEmergency.create(patient).then(response => {
            if (!response) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    update(patient) {
        return medical_emergency_1.MedicalEmergency.update(patient, { where: { id: patient.id } }).then(response => {
            if (response.length > 0) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    delete(id) {
        return medical_emergency_1.MedicalEmergency.destroy({ where: { id: id } }).then(response => {
            if (response === 0) {
                return this.serverResponse.throwError('No se ha eliminado ningun registro');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
}
exports.MedicalEmergencyIm = MedicalEmergencyIm;
//# sourceMappingURL=medicalEmergencyIm.js.map