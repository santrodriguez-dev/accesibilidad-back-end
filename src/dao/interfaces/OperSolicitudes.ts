import { Solicitud, RespuestaServidor } from "../../dto";

export interface OperSolicitudes {
    getAll(): Promise<RespuestaServidor<Solicitud[]>>;
    get(id: number): Promise<RespuestaServidor<Solicitud | null>>;
    solicitudesPorPaciente(idPaciente: string): Promise<RespuestaServidor<Solicitud[]>>;
    crearSolicitud(solicitud: Solicitud): Promise<RespuestaServidor<boolean>>;
}