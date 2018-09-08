"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Categorias_1 = require("../../models/Categorias");
class OperCategoriasIm {
    getAll() {
        return new Promise(resolve => {
            Categorias_1.CategoriasModel.findAll().then(resBD => {
                resolve(resBD);
            }).catch(err => {
                console.log(err);
                resolve(err.message);
            });
        });
    }
    get(id) {
        return new Promise(resolve => {
            Categorias_1.CategoriasModel.findById(id).then(resBD => {
                if (resBD)
                    resolve(resBD);
                else
                    resolve();
            }).catch(err => {
                console.log(err);
                resolve(err.message);
            });
        });
    }
}
exports.OperCategoriasIm = OperCategoriasIm;
//# sourceMappingURL=OperCategoriasIm.js.map