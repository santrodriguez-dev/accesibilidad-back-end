"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { CommentFactory } from "../../models/Pacientes";
// import { SolicitudesModel } from "../../models/Solicitudes";
const manejoRespuesta_1 = require("./manejoRespuesta");
// import { sequelizeBD } from "models/index";
const pacienteModel = __importStar(require("../../models"));
class OperPacientesIm {
    constructor() {
        this.resp = new manejoRespuesta_1.ManejoRespuesta;
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
    getAll() {
        console.log(pacienteModel);
        // return sequelizeBD;
        // pacienteModel.findByPk(null).then((res: any) => {
        //     console.log(res);
        // })
        // Project.findAll().then(project => {
        //     // project will be an instance of Project and stores the content of the table entry
        //     // with id 123. if such an entry is not defined you will get null
        //     console.log(project);
        // })
        return [0, 1, 2, 3];
        // PacientesModel.
        // return new Promise(resolve => {
        // PacientesModel.findAll().then(resBD => {
        //     const res = this.resp.respSatisfactoria(resBD);
        //     resolve(res);
        // }).catch(err => {
        //     resolve(this.resp.lanzarError(err.message))
        // })
        // });
    }
}
exports.OperPacientesIm = OperPacientesIm;
//# sourceMappingURL=OperPacientesIm.js.map