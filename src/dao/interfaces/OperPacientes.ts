import { Paciente } from "../../dto/Paciente";

export interface OperPacientes {
    getAll(): Promise<Paciente[]>;
    get(id: string): Promise<Paciente | undefined>;
    create(paciente: Paciente): Promise<boolean>;
    update(paciente: Paciente): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}