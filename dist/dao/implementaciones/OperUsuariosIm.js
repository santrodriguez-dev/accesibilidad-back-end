"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuarios_1 = require("../../models/Usuarios");
const manejoRespuesta_1 = require("./manejoRespuesta");
class OperUsuariosIm {
    constructor() {
        this.resp = new manejoRespuesta_1.ManejoRespuesta;
    }
    login(crede) {
        return new Promise(resolve => {
            Usuarios_1.UsuariosModel.find({ where: { nom_usuario: crede.nom_usuario, contrasena: crede.contrasena } })
                .then(resBD => {
                const res = this.resp.respSatisfactoria(resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            });
        });
    }
}
exports.OperUsuariosIm = OperUsuariosIm;
