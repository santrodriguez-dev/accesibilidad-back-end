"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OperSeguim_solicitudIm_1 = require("../dao/implementaciones/OperSeguim_solicitudIm");
const router = express_1.default.Router();
router.get('/getAll/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const opSeguimS = new OperSeguim_solicitudIm_1.OperSeguim_solicitudIm();
    const id = req.params.id;
    const resBD = yield opSeguimS.getAll(id);
    res.send(resBD);
}));
router.post('/crearSeguim', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const seguim = req.body;
    const opSeguimS = new OperSeguim_solicitudIm_1.OperSeguim_solicitudIm();
    const resBD = yield opSeguimS.crearSeguim(seguim);
    res.send(resBD);
}));
router.put('/actualizarSeguim', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const segum = req.body;
    const opSeguimS = new OperSeguim_solicitudIm_1.OperSeguim_solicitudIm();
    const resBD = yield opSeguimS.actualizarSeguim(segum);
    res.send(resBD);
}));
router.delete('/eliminarSeguim/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const id = req.params.id;
    const opSeguimS = new OperSeguim_solicitudIm_1.OperSeguim_solicitudIm();
    const resBD = yield opSeguimS.eliminarSeguim(id);
    res.send(resBD);
}));
exports.routes = router;
//# sourceMappingURL=seguim_solicitud.js.map