"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("./server-response");
const clinic_history_1 = require("../../models/clinic-history");
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
}
exports.ClinicHistoryIm = ClinicHistoryIm;
//# sourceMappingURL=clinicHistoryIm.js.map