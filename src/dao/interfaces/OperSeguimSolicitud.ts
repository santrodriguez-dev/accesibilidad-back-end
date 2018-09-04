import { RespuestaServidor, Seguim_solicitud } from "../../dto";

export interface OperSeguimSolicitud {
    getAll(idSolicitud: number): Promise<RespuestaServidor<Seguim_solicitud[]>>;
    crearSeguim(seguim: Seguim_solicitud): Promise<RespuestaServidor<boolean>>;
    actualizarSeguim(seguim: Seguim_solicitud): Promise<RespuestaServidor<boolean>>;
    eliminarSeguim(id: number): Promise<RespuestaServidor<boolean>>;
}