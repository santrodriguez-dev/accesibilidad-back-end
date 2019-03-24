// import { Clasificacion } from "../../dto";
// import { OperClasificaciones } from "../interfaces/OperClasificaciones";
// import { ClasificacionesModel } from "../../models/Clasificaciones";
// export class OperClasificacionesIm implements OperClasificaciones {
//     getAll(): Promise<Clasificacion[]> {
//         return new Promise(resolve => {
//             ClasificacionesModel.findAll().then(resBD => {
//                 resolve(resBD)
//             }).catch(err => {
//                 console.log(err)
//                 resolve(err.message);
//             })
//         });
//     }
//     get(id: number): Promise<Clasificacion> {
//         return new Promise(resolve => {
//             ClasificacionesModel.findById(id).then(resBD => {
//                 if (resBD)
//                     resolve(resBD);
//                 else
//                     resolve();
//             }).catch(err => {
//                 console.log(err)
//                 resolve(err.message);
//             })
//         });
//     }
// }
