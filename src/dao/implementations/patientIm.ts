import { ServerResponse } from "./server-response";
import { Patient } from "../models/patient";
import { ClinicHistory } from "../models/clinic-history";

export class PatientIm {

    constructor() { }

    private serverResponse = new ServerResponse;

    getAll() {
        return Patient.findAll({
            order: [['createdAt', 'DESC']],
            include: [
                { model: ClinicHistory, order: [['createdAt', 'DESC']] }
            ]
        }).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    get(id: number) {
        return Patient.findByPk(id).then(response => {
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    login(email: string, password: string) {
        return Patient.findOne({ where: { email: email, password: password } }).then(response => {
            if (!response) {
                return this.serverResponse.throwError('Usuario o contraseña inválido');
            }
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    create(patient: Patient) {
        return Patient.create(patient).then(response => {
            if (!response) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(response);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    update(patient: Patient) {
        return Patient.update(patient, { where: { id: patient.id } }).then(response => {
            if (response[0] === 0) {
                return this.serverResponse.throwError('No se ha podido guardar la información');
            }
            return this.serverResponse.successful(true);
        }).catch(err => {
            return this.serverResponse.throwError(err.message);
        });
    }

    deleteP(id: number) {
        return Patient.destroy({ where: { id: id } }).then(response => {
            if (response === 0) {
                return this.serverResponse.throwError('No se ha eliminado ningun registro');
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

