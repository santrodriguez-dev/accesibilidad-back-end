import { OperPacientes } from "../interfaces/OperPacientes";
import { Paciente } from "../../dto";
import { PacientesModel } from "../../models/Pacientes";
import { SolicitudesModel } from "../../models/Solicitudes";

export class OperPacientesIm implements OperPacientes {

    getAll(): Promise<Paciente[]> {
        return new Promise(resolve => {
            PacientesModel.findAll({
                include: [
                    { model: SolicitudesModel, as: "solicitudes" }
                ]
            }).then(resBD => {
                resolve(resBD)
            }).catch(err => {
                console.log(err)
                resolve(err.message);
            })
        });
    }

    get(id: string): Promise<Paciente> {
        return new Promise(resolve => {
            PacientesModel.findById(id, {
                include: [
                    { model: SolicitudesModel, as: "solicitudes" }
                ]
            }).then(resBD => {
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

    create(paciente: Paciente): Promise<boolean> {
        return new Promise(resolve => {
            PacientesModel.create(paciente).then(resBD => {
                resolve(true);
            }).catch(err => {
                console.log(err)
                resolve(err.message);
            })
        });
    }

    update(paciente: Paciente): Promise<boolean> {
        try {
            return new Promise(resolve => {
                PacientesModel.update(paciente, { where: { nom_usuario: paciente.nom_usuario } }).then(resBD => {
                    resolve(true);
                }).catch(err => {
                    console.log(err)
                    resolve(err.message);
                })
            });

        } catch (err) {
            return err;
        }
    }
    delete(id: string): Promise<boolean> {
        return new Promise(resolve => {
            PacientesModel.destroy({
                where: { nom_usuario: id }
            }).then(resBD => {
                resolve(true);
            }).catch(err => {
                console.log(err)
                resolve(err.message);
            })
        });
    }


}

