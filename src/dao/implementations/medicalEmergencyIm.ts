import { ServerResponse } from "./server-response";
import { MedicalEmergency } from "../models/medical-emergency";

export class MedicalEmergencyIm {

    constructor() { }

    private serverResponse = new ServerResponse;

    getAll() {
        return MedicalEmergency.findAll().then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    get(id: number) {
        return MedicalEmergency.findByPk(id).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    create(patient: MedicalEmergency) {
        return MedicalEmergency.create(patient).then(response => {
            if (!response) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    update(patient: MedicalEmergency) {
        return MedicalEmergency.update(patient, { where: { id: patient.id } }).then(response => {
            if (response.length > 0) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    delete(id: number) {
        return MedicalEmergency.destroy({ where: { id: id } }).then(response => {
            if (response === 0) {
                return this.serverResponse.throwError('No se ha eliminado ningun registro');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

}

