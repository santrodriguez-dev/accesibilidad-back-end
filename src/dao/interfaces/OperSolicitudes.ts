import { Solicitud } from "../../dto";

export interface OperSolicitudes {
    getAll(): Promise<Solicitud[]>;
    get(id: number): Promise<Solicitud>;
}