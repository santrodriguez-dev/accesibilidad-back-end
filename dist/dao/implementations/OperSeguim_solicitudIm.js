// import { RespuestaServidor, Seguim_solicitud } from "../../dto";
// import { ManejoRespuesta } from "./manejoRespuesta";
// import { OperSeguimSolicitud } from "../interfaces/OperSeguimSolicitud";
// import { Seguim_solicitudModel } from "../../models/Seguim_solicitud";
// export class OperSeguim_solicitudIm implements OperSeguimSolicitud {
//     private resp: ManejoRespuesta = new ManejoRespuesta;
//     getAll(idSolicitud: number): Promise<RespuestaServidor<Seguim_solicitud[]>> {
//         return new Promise(resolve => {
//             Seguim_solicitudModel.findAll({ where: { solicitud_id: idSolicitud } })
//                 .then(resBD => {
//                     const res = this.resp.respSatisfactoria(resBD)
//                     resolve(res);
//                 }).catch(err => {
//                     resolve(this.resp.lanzarError(err.message));
//                 })
//         });
//     }
//     crearSeguim(seguim: Seguim_solicitud): Promise<RespuestaServidor<boolean>> {
//         return new Promise(resolve => {
//             Seguim_solicitudModel.create(seguim)
//                 .then(resBD => {
//                     if (resBD) {
//                         const res = this.resp.respSatisfactoria(true);
//                         resolve(res);
//                         return;
//                     }
//                     resolve(this.resp.lanzarError('No se insertó el seguimiento'));
//                 }).catch(err => {
//                     resolve(this.resp.lanzarError(err.message));
//                 })
//         });
//     }
//     actualizarSeguim(seguim: Seguim_solicitud): Promise<RespuestaServidor<boolean>> {
//         return new Promise(resolve => {
//             Seguim_solicitudModel.update(seguim)
//                 .then(resBD => {
//                     if (resBD) {
//                         const res = this.resp.respSatisfactoria(true);
//                         resolve(res);
//                         return;
//                     }
//                     resolve(this.resp.lanzarError('No se actualizó el seguimiento'));
//                 }).catch(err => {
//                     resolve(this.resp.lanzarError(err.message));
//                 })
//         });
//     }
//     eliminarSeguim(id: number): Promise<RespuestaServidor<boolean>> {
//         return new Promise(resolve => {
//             Seguim_solicitudModel.destroy({
//                 where: { id: id }
//             }).then(resBD => {
//                 if (resBD > 0) {
//                     const res = this.resp.respSatisfactoria(true);
//                     resolve(res);
//                 } else {
//                     resolve(this.resp.lanzarError('No se ha eliminado el registro'));
//                 }
//             }).catch(err => {
//                 console.log(err)
//                 resolve(this.resp.lanzarError(err.message));
//             })
//         });
//     }
// }
//# sourceMappingURL=OperSeguim_solicitudIm.js.map