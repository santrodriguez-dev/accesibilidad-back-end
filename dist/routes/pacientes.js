"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const implementaciones_1 = require("../dao/implementaciones");
const router = express_1.default.Router();
router.get('/getAll', async (req, res, next) => {
    const opPacientes = new implementaciones_1.OperPacientesIm();
    const resBD = await opPacientes.getAll();
    res.json(resBD);
});
router.get('/get/:id', async (req, res, next) => {
    const id = req.params.id;
    const opPacientes = new implementaciones_1.OperPacientesIm();
    const resBD = await opPacientes.get(id);
    res.json(resBD);
});
router.post('/new', async (req, res, next) => {
    const paciente = req.body;
    const opPacientes = new implementaciones_1.OperPacientesIm();
    const resBD = await opPacientes.create(paciente);
    res.json(resBD);
});
router.put('/update', async (req, res, next) => {
    const paciente = req.body;
    const opPacientes = new implementaciones_1.OperPacientesIm();
    const resBD = await opPacientes.update(paciente);
    res.json(resBD);
});
router.delete('/delete/:id', async (req, res, next) => {
    const id = req.params.id;
    const opPacientes = new implementaciones_1.OperPacientesIm();
    const resBD = await opPacientes.delete(id);
    res.json(resBD);
});
exports.routes = router;
//# sourceMappingURL=pacientes.js.map