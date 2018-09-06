"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ManejoRespuesta {
    respSatisfactoria(resBD) {
        const res = {
            satisfactorio: true,
            resultado: resBD,
        };
        return res;
    }
    lanzarError(msj) {
        const res = {
            satisfactorio: false,
            mensaje: msj
        };
        return res;
    }
}
exports.ManejoRespuesta = ManejoRespuesta;
