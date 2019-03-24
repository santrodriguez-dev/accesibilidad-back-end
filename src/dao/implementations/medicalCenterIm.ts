import { ServerResponse } from "./server-response";
import { MedicalCenter } from "../models/medical-center";

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

    // private pacientes = CommentFactory(null, null);

    // obtenerPacientesConSolicitudes(): Promise<RespuestaServidor<Paciente[]>> {
    //     return new Promise(resolve => {
    //         this.pacientes.findAll({
    //             include: [
    //                 { model: SolicitudesModel, as: "solicitudes" }
    //             ]
    //         }).then(resBD => {
    //             const res = this.resp.respSatisfactoria(resBD)
    //             resolve(res);
    //         }).catch(err => {
    //             resolve(this.resp.lanzarError(err.message))
    //         })
    //     });
    // }

    // login(paciente: Paciente): Promise<RespuestaServidor<Paciente | null>> {
    //     return new Promise(resolve => {
    //         PacientesModel.find({ where: { nom_usuario: paciente.nom_usuario, contrasena: paciente.contrasena } })
    //             .then(resBD => {
    //                 const res = this.resp.respSatisfactoria(resBD);
    //                 resolve(res);
    //             }).catch(err => {
    //                 resolve(this.resp.lanzarError(err.message))
    //             })
    //     });
    // }



    // get(id: string): Promise<RespuestaServidor<Paciente | null>> {
    //     return new Promise(resolve => {
    //         PacientesModel.findById(id, {
    //             include: [
    //                 { model: SolicitudesModel, as: "solicitudes" }
    //             ]
    //         }).then(resBD => {
    //             const res = this.resp.respSatisfactoria(resBD);
    //             resolve(res);
    //         }).catch(err => {
    //             resolve(this.resp.lanzarError(err.message))
    //         })
    //     });
    // }

    // create(paciente: Paciente): Promise<RespuestaServidor<Paciente>> {
    //     return new Promise(resolve => {
    //         PacientesModel.create(paciente).then(resBD => {
    //             const res = this.resp.respSatisfactoria(resBD);
    //             resolve(res);
    //         }).catch(err => {
    //             resolve(this.resp.lanzarError(err.message));
    //         })
    //     });
    // }

    // update(paciente: Paciente): Promise<RespuestaServidor<boolean>> {
    //     try {
    //         return new Promise(resolve => {
    //             PacientesModel.update(paciente, { where: { nom_usuario: paciente.nom_usuario } })
    //                 .then(resBD => {
    //                     const res = this.resp.respSatisfactoria(!!resBD[0]);
    //                     return resolve(res);
    //                 }).catch(err => {
    //                     resolve(this.resp.lanzarError(err.message));
    //                 })
    //         });

    //     } catch (err) {
    //         return err;
    //     }
    // }

    // delete(id: string): Promise<RespuestaServidor<boolean>> {
    //     return new Promise(resolve => {
    //         PacientesModel.destroy({
    //             where: { nom_usuario: id }
    //         }).then(resBD => {
    //             if (resBD > 0) {
    //                 const res = this.resp.respSatisfactoria(true);
    //                 resolve(res);
    //             } else {
    //                 resolve(this.resp.lanzarError('No se ha eliminado el registro'));
    //             }
    //         }).catch(err => {
    //             console.log(err)
    //             resolve(this.resp.lanzarError(err.message));
    //         })
    //     });
    // }


}
