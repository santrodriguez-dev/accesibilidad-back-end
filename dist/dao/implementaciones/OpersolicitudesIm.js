"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Solicitudes_1 = require("../../models/Solicitudes");
const Categorias_1 = require("../../models/Categorias");
const Pacientes_1 = require("../../models/Pacientes");
const Clasificaciones_1 = require("../../models/Clasificaciones");
class OperSolicitudesIm {
    getAll() {
        return new Promise(resolve => {
            Solicitudes_1.SolicitudesModel
                .findAll({
                include: [
                    { model: Categorias_1.CategoriasModel, as: "categoria" },
                    { model: Clasificaciones_1.ClasificacionesModel, as: "clasificacion" },
                    { model: Pacientes_1.PacientesModel, as: "paciente" }
                ]
            })
                .then(resBD => {
                resolve(resBD);
            }).catch(err => {
                console.log(err);
                resolve(err.message);
            });
        });
    }
    get(id) {
        return new Promise(resolve => {
            Solicitudes_1.SolicitudesModel.findById(id).then(resBD => {
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
exports.OperSolicitudesIm = OperSolicitudesIm;
//# sourceMappingURL=OpersolicitudesIm.js.map