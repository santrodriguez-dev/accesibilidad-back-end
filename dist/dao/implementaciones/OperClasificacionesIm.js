"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Clasificaciones_1 = require("../../models/Clasificaciones");
class OperClasificacionesIm {
    getAll() {
        return new Promise(resolve => {
            Clasificaciones_1.ClasificacionesModel.findAll().then(resBD => {
                resolve(resBD);
            }).catch(err => {
                console.log(err);
                resolve(err.message);
            });
        });
    }
    get(id) {
        return new Promise(resolve => {
            Clasificaciones_1.ClasificacionesModel.findById(id).then(resBD => {
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
exports.OperClasificacionesIm = OperClasificacionesIm;
//# sourceMappingURL=OperClasificacionesIm.js.map