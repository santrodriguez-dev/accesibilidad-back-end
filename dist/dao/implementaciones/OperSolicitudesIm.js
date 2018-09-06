"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Solicitudes_1 = require("../../models/Solicitudes");
const Categorias_1 = require("../../models/Categorias");
const Pacientes_1 = require("../../models/Pacientes");
const Clasificaciones_1 = require("../../models/Clasificaciones");
const manejoRespuesta_1 = require("./manejoRespuesta");
// import { socketNuevaSolicitud } from "../../routes";
class OperSolicitudesIm {
    constructor() {
        this.resp = new manejoRespuesta_1.ManejoRespuesta;
    }
    crearSolicitud(solicitud) {
        return new Promise(resolve => {
            Solicitudes_1.SolicitudesModel.create(solicitud).then(resBD => {
                const res = this.resp.respSatisfactoria(true);
                // socketNuevaSolicitud.emit('nuevaSolicitud', resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            });
        });
    }
    solicitudesPorPaciente(idPaciente) {
        return new Promise(resolve => {
            Solicitudes_1.SolicitudesModel
                .findAll({ where: { paciente_id: idPaciente } })
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
            Solicitudes_1.SolicitudesModel
                .findAll({
                include: [
                    { model: Categorias_1.CategoriasModel, as: "categoria" },
                    { model: Clasificaciones_1.ClasificacionesModel, as: "clasificacion" },
                    { model: Pacientes_1.PacientesModel, as: "paciente" }
                ],
                order: [['createdAt', 'DESC']]
            })
                .then(resBD => {
                const res = this.resp.respSatisfactoria(resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            });
        });
    }
    get(id) {
        return new Promise(resolve => {
            Solicitudes_1.SolicitudesModel.findById(id).then(resBD => {
                const res = this.resp.respSatisfactoria(resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            });
        });
    }
}
exports.OperSolicitudesIm = OperSolicitudesIm;
