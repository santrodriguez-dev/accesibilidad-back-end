import { ServerResponse } from "./server-response";
import { MedicalCenter } from "../models/medical-center";
import { MedicalEmergency } from "../models/medical-emergency";

export class MedicalCenterIm {

    constructor() { }

    private serverResponse = new ServerResponse;

    getAll() {
        return MedicalCenter.findAll().then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    get(id: number) {
        return MedicalCenter.findByPk(id).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    getWithEmergencies(id: number) {
        return MedicalCenter.findByPk(id, {
            include: [
                { model: MedicalEmergency },
            ]
        }).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    create(medicalEmergency: MedicalCenter) {
        return MedicalCenter.create(medicalEmergency).then(response => {
            if (!response) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    update(medicalEmergency: MedicalCenter) {
        return MedicalCenter.update(medicalEmergency, { where: { id: medicalEmergency.id } }).then(response => {
            if (response[0] === 0) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }


    delete(id: number) {
        return MedicalCenter.destroy({ where: { id: id } }).then(response => {
            if (response === 0) {
                return this.serverResponse.throwError('No se ha podido eliminar el registro');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

}