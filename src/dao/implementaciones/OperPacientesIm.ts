import { OperPacientes } from "../interfaces/OperPacientes";
import { Paciente, RespuestaServidor } from "../../dto";
import { PacientesModel } from "../../models/Pacientes";
import { SolicitudesModel } from "../../models/Solicitudes";
import { ManejoRespuesta } from "./manejoRespuesta";

export class OperPacientesIm implements OperPacientes {

    private resp: ManejoRespuesta = new ManejoRespuesta;

    obtenerPacientesConSolicitudes(): Promise<RespuestaServidor<Paciente[]>> {
        return new Promise(resolve => {
            PacientesModel.findAll({
                include: [
                    { model: SolicitudesModel, as: "solicitudes" }
                ]
            }).then(resBD => {
                const res = this.resp.respSatisfactoria(resBD)
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message))
            })
        });
    }

    login(paciente: Paciente): Promise<RespuestaServidor<Paciente | null>> {
        return new Promise(resolve => {
            PacientesModel.find({ where: { nom_usuario: paciente.nom_usuario, contrasena: paciente.contrasena } })
                .then(resBD => {
                    const res = this.resp.respSatisfactoria(resBD);
                    resolve(res);
                }).catch(err => {
                    resolve(this.resp.lanzarError(err.message))
                })
        });
    }

    getAll(): Promise<RespuestaServidor<Paciente[]>> {
        return new Promise(resolve => {
            PacientesModel.findAll().then(resBD => {
                const res = this.resp.respSatisfactoria(resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message))
            })
        });
    }

    get(id: string): Promise<RespuestaServidor<Paciente | null>> {
        return new Promise(resolve => {
            PacientesModel.findById(id, {
                include: [
                    { model: SolicitudesModel, as: "solicitudes" }
                ]
            }).then(resBD => {
                const res = this.resp.respSatisfactoria(resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message))
            })
        });
    }

    create(paciente: Paciente): Promise<RespuestaServidor<Paciente>> {
        return new Promise(resolve => {
            PacientesModel.create(paciente).then(resBD => {
                const res = this.resp.respSatisfactoria(resBD);
                resolve(res);
            }).catch(err => {
                resolve(this.resp.lanzarError(err.message));
            })
        });
    }

    update(paciente: Paciente): Promise<RespuestaServidor<boolean>> {
        try {
            return new Promise(resolve => {
                PacientesModel.update(paciente, { where: { nom_usuario: paciente.nom_usuario } })
                    .then(resBD => {
                        const res = this.resp.respSatisfactoria(!!resBD[0]);
                        return resolve(res);
                    }).catch(err => {
                        resolve(this.resp.lanzarError(err.message));
                    })
            });

        } catch (err) {
            return err;
        }
    }

    delete(id: string): Promise<RespuestaServidor<boolean>> {
        return new Promise(resolve => {
            PacientesModel.destroy({
                where: { nom_usuario: id }
            }).then(resBD => {
                if (resBD > 0) {
                    const res = this.resp.respSatisfactoria(true);
                    resolve(res);
                } else {
                    resolve(this.resp.lanzarError('No se ha eliminado el registro'));
                }
            }).catch(err => {
                console.log(err)
                resolve(this.resp.lanzarError(err.message));
            })
        });
    }


}

