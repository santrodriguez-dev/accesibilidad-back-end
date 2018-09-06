"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manejoRespuesta_1 = require("./manejoRespuesta");
const Seguim_solicitud_1 = require("../../models/Seguim_solicitud");
class OperSeguim_solicitudIm {
    constructor() {
        this.resp = new manejoRespuesta_1.ManejoRespuesta;
    }
    getAll(idSolicitud) {
        return new Promise(resolve => {
            Seguim_solicitud_1.Seguim_solicitudModel.findAll({ where: { solicitud_id: idSolicitud } })
                .then(resBD => {
                const res = this.resp.respSatisfactoria(resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            });
        });
    }
    crearSeguim(seguim) {
        return new Promise(resolve => {
            Seguim_solicitud_1.Seguim_solicitudModel.create(seguim)
                .then(resBD => {
                if (resBD) {
                    const res = this.resp.respSatisfactoria(true);
                    resolve(res);
                    return;
                }
                resolve(this.resp.lanzarError('No se insertó el seguimiento'));
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            });
        });
    }
    actualizarSeguim(seguim) {
        return new Promise(resolve => {
            Seguim_solicitud_1.Seguim_solicitudModel.update(seguim)
                .then(resBD => {
                if (resBD) {
                    const res = this.resp.respSatisfactoria(true);
                    resolve(res);
                    return;
                }
                resolve(this.resp.lanzarError('No se actualizó el seguimiento'));
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            });
        });
    }
    eliminarSeguim(id) {
        return new Promise(resolve => {
            Seguim_solicitud_1.Seguim_solicitudModel.destroy({
                where: { id: id }
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
exports.OperSeguim_solicitudIm = OperSeguim_solicitudIm;
