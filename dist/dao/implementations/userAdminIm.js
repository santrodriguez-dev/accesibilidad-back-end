"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_response_1 = require("./server-response");
const user_administrator_1 = require("../../models/user-administrator");
class UserAdminIm {
    constructor() {
        this.serverResponse = new server_response_1.ServerResponse;
    }
    getAll() {
        return user_administrator_1.UserAdministrator.findAll().then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    get(id) {
        return user_administrator_1.UserAdministrator.findByPk(id).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
    login(email, password) {
        return user_administrator_1.UserAdministrator.findOne({ where: { email: email, password: password } }).then(response => {
            if (!response) {
                return this.serverResponse.throwError('Usuario o contraseña inválido');
            }
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }
}
exports.UserAdminIm = UserAdminIm;
//# sourceMappingURL=userAdminIm.js.map