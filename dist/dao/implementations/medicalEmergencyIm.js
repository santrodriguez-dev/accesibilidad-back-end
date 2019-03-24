"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("./server-response");
const medical_emergency_1 = require("../../models/medical-emergency");
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
}
exports.MedicalEmergencyIm = MedicalEmergencyIm;
//# sourceMappingURL=medicalEmergencyIm.js.map