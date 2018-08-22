import { OperSolicitudes } from "../interfaces/OperSolicitudes";
import { Solicitud } from "../../dto";
import { SolicitudesModel } from "../../models/Solicitudes";
import { CategoriasModel } from "../../models/Categorias";
import { PacientesModel } from "../../models/Pacientes";
import { ClasificacionesModel } from "../../models/Clasificaciones";

export class OperSolicitudesIm implements OperSolicitudes {

    getAll(): Promise<Solicitud[]> {
        return new Promise(resolve => {
            SolicitudesModel
                .findAll({
                    include: [
                        { model: CategoriasModel, as: "categoria" },
                        { model: ClasificacionesModel, as: "clasificacion" },
                        { model: PacientesModel, as: "paciente" }
                    ]
                })
                .then(resBD => {
                    resolve(resBD)
                }).catch(err => {
                    console.log(err)
                    resolve(err.message);
                })
        });
    }

    get(id: number): Promise<Solicitud> {
        return new Promise(resolve => {
            SolicitudesModel.findById(id).then(resBD => {
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
