// import { OperUsuarios } from "../interfaces/OperUsuarios";
// import { Credenciales, Usuario } from "../../dto/Usuario";
// import { UsuariosModel } from "../../models/Usuarios";
// import { ManejoRespuesta } from "./manejoRespuesta";
// import { RespuestaServidor } from "../../dto";
// export class OperUsuariosIm implements OperUsuarios {

//     private resp: ManejoRespuesta = new ManejoRespuesta;

//     login(crede: Credenciales): Promise<RespuestaServidor<Usuario | null>> {
//         return new Promise(resolve => {
//             UsuariosModel.find({ where: { nom_usuario: crede.nom_usuario, contrasena: crede.contrasena } })
//                 .then(resBD => {
//                     const res = this.resp.respSatisfactoria(resBD);
//                     resolve(res);
//                 }).catch(err => {
//                     resolve(this.resp.lanzarError(err.message))
//                 })
//         });
//     }


// }

