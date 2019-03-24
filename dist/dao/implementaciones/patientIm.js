"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patient_1 = require("../../models/patient");
const server_response_1 = require("./server-response");
class PatientIm {
    constructor() {
        this.serverResponse = new server_response_1.ServerResponse;
    }
    getAll() {
        return patient_1.Patient.findAll().then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.successful(err.message);
        });
    }
}
exports.PatientIm = PatientIm;
