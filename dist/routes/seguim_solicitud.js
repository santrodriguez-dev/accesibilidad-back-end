"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OperSeguim_solicitudIm_1 = require("../dao/implementaciones/OperSeguim_solicitudIm");
const router = express_1.default.Router();
router.get('/getAll/:id', async (req, res, next) => {
    const opSeguimS = new OperSeguim_solicitudIm_1.OperSeguim_solicitudIm();
    const id = req.params.id;
    const resBD = await opSeguimS.getAll(id);
    res.send(resBD);
});
router.post('/crearSeguim', async (req, res, next) => {
    const seguim = req.body;
    const opSeguimS = new OperSeguim_solicitudIm_1.OperSeguim_solicitudIm();
    const resBD = await opSeguimS.crearSeguim(seguim);
    res.send(resBD);
});
router.put('/actualizarSeguim', async (req, res, next) => {
    const segum = req.body;
    const opSeguimS = new OperSeguim_solicitudIm_1.OperSeguim_solicitudIm();
    const resBD = await opSeguimS.actualizarSeguim(segum);
    res.send(resBD);
});
router.delete('/eliminarSeguim/:id', async (req, res, next) => {
    const id = req.params.id;
    const opSeguimS = new OperSeguim_solicitudIm_1.OperSeguim_solicitudIm();
    const resBD = await opSeguimS.eliminarSeguim(id);
    res.send(resBD);
});
exports.routes = router;
//# sourceMappingURL=seguim_solicitud.js.map