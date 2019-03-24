"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CommentFactory } from "../../models/Pacientes";
// import { SolicitudesModel } from "../../models/Solicitudes";
const manejoRespuesta_1 = require("./manejoRespuesta");
const patient_1 = require("../../models/patient");
// import { sequelizeBD } from "../../models";
// import { sequelizeBD } from "models/index";
// import { hola, ss } from "../../models/Pacientes";
// import { Doctor } from "../../models/patient";
// import { sequelizeBD } from "../../models";     
class OperPacientesIm {
    constructor() {
        this.resp = new manejoRespuesta_1.ManejoRespuesta;
    }
    async getAll() {
        return await patient_1.Patient.findAll().then(res => res);
        // Doctor.findAll().then(res => {
        //     console.log(res);
        // })
        // fff.
        // fff.
        // const rrrr = hola(sequelizeBD)
        // console.log(ddddd);
        // const ddd = await ss.findByPk<Model<any, any>>(1).then((res: any) => console.log(res));
        // return ddd
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
