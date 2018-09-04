import { RespuestaServidor, Paciente } from "../../dto";

export interface OperPacientes {
    getAll(): Promise<RespuestaServidor<Paciente[]>>;
    obtenerPacientesConSolicitudes(): Promise<RespuestaServidor<Paciente[]>>;
    get(id: string): Promise<Paciente | undefined>;
    login(paciente: Paciente): Promise<RespuestaServidor<Paciente | null>>;
    create(paciente: Paciente): Promise<RespuestaServidor<Paciente>>;
    update(paciente: Paciente): Promise<RespuestaServidor<boolean>>;
    delete(id: string): Promise<RespuestaServidor<boolean>>;
}