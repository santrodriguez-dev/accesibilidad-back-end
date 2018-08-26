import { OperSolicitudes } from "../interfaces/OperSolicitudes";
import { Solicitud, RespuestaServidor } from "../../dto";
import { SolicitudesModel } from "../../models/Solicitudes";
import { CategoriasModel } from "../../models/Categorias";
import { PacientesModel } from "../../models/Pacientes";
import { ClasificacionesModel } from "../../models/Clasificaciones";
import { ManejoRespuesta } from "./manejoRespuesta";

export class OperSolicitudesIm implements OperSolicitudes {

    private resp: ManejoRespuesta = new ManejoRespuesta;

    crearSolicitud(solicitud: Solicitud): Promise<RespuestaServidor<boolean>> {
        return new Promise(resolve => {
            SolicitudesModel.create(solicitud).then(resBD => {
                const res = this.resp.respSatisfactoria(true);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            })
        });
    }

    solicitudesPorPaciente(idPaciente: string): Promise<RespuestaServidor<Solicitud[]>> {
        return new Promise(resolve => {
            SolicitudesModel
                .findAll({ where: { paciente_id: idPaciente } })
                .then(resBD => {
                    const res = this.resp.respSatisfactoria(resBD)
                    resolve(res);
                }).catch(err => {
                    resolve(this.resp.lanzarError(err.message));
                })
        });
    }

    getAll(): Promise<RespuestaServidor<Solicitud[]>> {
        return new Promise(resolve => {
            SolicitudesModel
                .findAll({
                    include: [
                        { model: CategoriasModel, as: "categoria" },
                        { model: ClasificacionesModel, as: "clasificacion" },
                        { model: PacientesModel, as: "paciente" }
                    ],
                    order:[['createdAt', 'DESC']]
                })
                .then(resBD => {
                    const res = this.resp.respSatisfactoria(resBD)
                    resolve(res);
                }).catch(err => {
                    resolve(this.resp.lanzarError(err.message));
                })
        });
    }

    get(id: number): Promise<RespuestaServidor<Solicitud | null>> {
        return new Promise(resolve => {
            SolicitudesModel.findById(id).then(resBD => {
                const res = this.resp.respSatisfactoria(resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            })
        });
    }
}
