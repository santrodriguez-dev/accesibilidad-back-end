"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("./server-response");
const patient_1 = require("../models/patient");
const clinic_history_1 = require("../models/clinic-history");
class PatientIm {
    constructor() {
        this.serverResponse = new server_response_1.ServerResponse;
    }
    getAll() {
        return patient_1.Patient.findAll({
            order: [['createdAt', 'DESC']],
            include: [
                { model: clinic_history_1.ClinicHistory, order: [['createdAt', 'DESC']] }
            ]
        }).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    get(id) {
        return patient_1.Patient.findByPk(id).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    login(email, password) {
        return patient_1.Patient.findOne({ where: { email: email, password: password } }).then(response => {
            if (!response) {
                return this.serverResponse.throwError('Usuario o contraseña inválido');
            }
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    create(patient) {
        return patient_1.Patient.create(patient).then(response => {
            if (!response) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    update(patient) {
        return patient_1.Patient.update(patient, { where: { id: patient.id } }).then(response => {
            if (response[0] === 0) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    deleteP(id) {
        return patient_1.Patient.destroy({ where: { id: id } }).then(response => {
            if (response === 0) {
                return this.serverResponse.throwError('No se ha eliminado ningun registro');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
}
exports.PatientIm = PatientIm;
//# sourceMappingURL=patientIm.js.map