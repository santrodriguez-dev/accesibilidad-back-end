import { OperCategorias } from "../interfaces/OperCategorias";
import { Categoria } from "../../dto";
import { CategoriasModel } from "../../models/Categorias";

export class OperCategoriasIm implements OperCategorias {

    getAll(): Promise<Categoria[]> {
        return new Promise(resolve => {
            CategoriasModel.findAll().then(resBD => {
                resolve(resBD)
            }).catch(err => {
                console.log(err)
                resolve(err.message);
            })
        });
    }

    get(id: number): Promise<Categoria> {
        return new Promise(resolve => {
            CategoriasModel.findById(id).then(resBD => {
                if (resBD)
                    resolve(resBD);
                else
                    resolve();
            }).catch(err => {
                console.log(err)
                resolve(err.message);
            })
        });
    }

}

