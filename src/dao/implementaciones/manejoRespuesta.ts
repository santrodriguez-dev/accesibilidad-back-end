import { RespuestaServidor } from "../../dto";

export class ManejoRespuesta {
    public respSatisfactoria<R>(resBD: R): RespuestaServidor<R> {
        const res: RespuestaServidor<R> = {
            satisfactorio: true,
            resultado: resBD,
        }
        return res;

    }
    public lanzarError<R>(msj: string): RespuestaServidor<R> {
        const res: RespuestaServidor<R> = {
            satisfactorio: false,
            mensaje: msj
        };
        return res;
    }
}