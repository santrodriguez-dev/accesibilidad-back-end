import { Credenciales, Usuario } from "../../dto/Usuario";
import { RespuestaServidor } from "../../dto";

export interface OperUsuarios {
    login(cred: Credenciales): Promise<RespuestaServidor<Usuario | null>>;
}