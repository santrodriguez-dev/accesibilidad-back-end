"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pacientes_1 = require("../../models/Pacientes");
const Solicitudes_1 = require("../../models/Solicitudes");
const manejoRespuesta_1 = require("./manejoRespuesta");
class OperPacientesIm {
    constructor() {
        this.resp = new manejoRespuesta_1.ManejoRespuesta;
    }
    obtenerPacientesConSolicitudes() {
        return new Promise(resolve => {
            Pacientes_1.PacientesModel.findAll({
                include: [
                    { model: Solicitudes_1.SolicitudesModel, as: "solicitudes" }
                ]
            }).then(resBD => {
                const res = this.resp.respSatisfactoria(resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            });
        });
    }
    login(paciente) {
        return new Promise(resolve => {
            Pacientes_1.PacientesModel.find({ where: { nom_usuario: paciente.nom_usuario, contrasena: paciente.contrasena } })
                .then(resBD => {
                const res = this.resp.respSatisfactoria(resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            });
        });
    }
    getAll() {
        return new Promise(resolve => {
            Pacientes_1.PacientesModel.findAll().then(resBD => {
                const res = this.resp.respSatisfactoria(resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            });
        });
    }
    get(id) {
        return new Promise(resolve => {
            Pacientes_1.PacientesModel.findById(id, {
                include: [
                    { model: Solicitudes_1.SolicitudesModel, as: "solicitudes" }
                ]
            }).then(resBD => {
                const res = this.resp.respSatisfactoria(resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            });
        });
    }
    create(paciente) {
        return new Promise(resolve => {
            Pacientes_1.PacientesModel.create(paciente).then(resBD => {
                const res = this.resp.respSatisfactoria(resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            });
        });
    }
    update(paciente) {
        try {
            return new Promise(resolve => {
                Pacientes_1.PacientesModel.update(paciente, { where: { nom_usuario: paciente.nom_usuario } })
                    .then(resBD => {
                    const res = this.resp.respSatisfactoria(!!resBD[0]);
                    return resolve(res);
                }).catch(err => {
                    resolve(this.resp.lanzarError(err.message));
                });
            });
        }
        catch (err) {
            return err;
        }
    }
    delete(id) {
        return new Promise(resolve => {
            Pacientes_1.PacientesModel.destroy({
                where: { nom_usuario: id }
            }).then(resBD => {
                if (resBD > 0) {
                    const res = this.resp.respSatisfactoria(true);
                    resolve(res);
                }
                else {
                    resolve(this.resp.lanzarError('No se ha eliminado el registro'));
                }
            }).catch(err => {
                console.log(err);
                resolve(this.resp.lanzarError(err.message));
            });
        });
    }
}
exports.OperPacientesIm = OperPacientesIm;
//# sourceMappingURL=OperPacientesIm.js.map