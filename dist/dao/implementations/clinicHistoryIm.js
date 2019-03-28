"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("./server-response");
const clinic_history_1 = require("../models/clinic-history");
class ClinicHistoryIm {
    constructor() {
        this.serverResponse = new server_response_1.ServerResponse;
    }
    getAll() {
        return clinic_history_1.ClinicHistory.findAll().then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    get(id) {
        return clinic_history_1.ClinicHistory.findByPk(id).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    getByPatientId(patient_id) {
        return clinic_history_1.ClinicHistory.findAll({ where: { patient_id: patient_id } }).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    create(clinicHistory) {
        return clinic_history_1.ClinicHistory.create(clinicHistory).then(response => {
            if (!response) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    update(clinicHistory) {
        return clinicHistory.update(clinicHistory, { where: { id: clinicHistory.id } }).then(response => {
            if (response[0] === 0) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    deleteP(id) {
        return clinic_history_1.ClinicHistory.destroy({ where: { id: id } }).then(response => {
            if (response === 0) {
                return this.serverResponse.throwError('No se ha eliminado ningun registro');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
}
exports.ClinicHistoryIm = ClinicHistoryIm;
//# sourceMappingURL=clinicHistoryIm.js.map