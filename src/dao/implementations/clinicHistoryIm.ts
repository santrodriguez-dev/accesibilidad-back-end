import { ServerResponse } from "./server-response";
import { ClinicHistory } from "../models/clinic-history";

export class ClinicHistoryIm {

    constructor() { }

    private serverResponse = new ServerResponse;

    getAll() {
        return ClinicHistory.findAll().then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    get(id: number) {
        return ClinicHistory.findByPk(id).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    getByPatientId(patient_id: number) {
        return ClinicHistory.findAll({ where: { patient_id: patient_id } }).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    create(clinicHistory: ClinicHistory) {
        return ClinicHistory.create(clinicHistory).then(response => {
            if (!response) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    update(clinicHistory: ClinicHistory) {
        return clinicHistory.update(clinicHistory, { where: { id: clinicHistory.id } }).then(response => {
            if (response[0] === 0) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    deleteP(id: number) {
        return ClinicHistory.destroy({ where: { id: id } }).then(response => {
            if (response === 0) {
                return this.serverResponse.throwError('No se ha eliminado ningun registro');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

}

