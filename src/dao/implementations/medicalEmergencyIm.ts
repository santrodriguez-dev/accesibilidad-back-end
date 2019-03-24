import { ServerResponse } from "./server-response";
import { MedicalEmergency } from "../../models/medical-emergency";

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

}

