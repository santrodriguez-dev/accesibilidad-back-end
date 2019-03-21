// import { OperCategorias } from "../interfaces/OperCategorias";
// import { Categoria } from "../../dto";
// import { UserFactory } from "../../models/Categorias";
// import { sequelizeBD } from "models/index";
// // import { sequelizeBD } from ".";

// export class OperCategoriasIm implements OperCategorias {

//     model: any;

//     constructor() {
//         this.model = UserFactory(sequelizeBD);
//     }

//     getAll(): Promise<Categoria[]> {
//         return new Promise(resolve => {
//             this.model.findAll().then(resBD => {
//                 resolve(resBD)
//             }).catch(err => {
//                 console.log(err)
//                 resolve(err.message);
//             })
//         });
//     }

//     get(id: number): Promise<Categoria> {
//         return new Promise(resolve => {
//             CategoriasModel.findById(id).then(resBD => {
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

