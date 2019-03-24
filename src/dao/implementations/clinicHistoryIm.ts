import { ServerResponse } from "./server-response";
import { ClinicHistory } from "../../models/clinic-history";

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

}

