"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const implementations_1 = require("../dao/implementations");
// import { OperPacientesIm } from "../dao/implementaciones";
const router = express_1.default.Router();
const opPatient = new implementations_1.PatientIm();
router.get('/getAll', async (req, res, next) => {
    try {
        const resBD = await opPatient.getAll();
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.get('/get/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const resBD = await opPatient.get(id);
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.post('/save', async (req, res, next) => {
    try {
        const patient = req.body;
        let resBD;
        if (patient.id) {
            resBD = await opPatient.update(patient);
        }
        else {
            resBD = await opPatient.create(patient);
        }
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.delete('/delete/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const resBD = await opPatient.deleteP(id);
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
// router.get('/getWithRequests', async (req: Request, res: Response, next: NextFunction) => {
//   const opPacientes = new OperPacientesIm();
//   const resBD = await opPacientes.obtenerPacientesConSolicitudes();
//   res.json(resBD);
// });
// router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
//   const paciente: Paciente = req.body;
//   const opPacientes = new OperPacientesIm();
//   const resBD = await opPacientes.login(paciente);
//   res.json(resBD);
// });
// router.post('/new', async (req: Request, res: Response, next: NextFunction) => {
//   const paciente: Paciente = req.body;
//   const opPacientes = new OperPacientesIm();
//   const resBD = await opPacientes.create(paciente);
//   res.json(resBD);
// });
// router.put('/update', async (req: Request, res: Response, next: NextFunction) => {
//   const paciente: Paciente = req.body;
//   const opPacientes = new OperPacientesIm();
//   const resBD = await opPacientes.update(paciente);
//   res.json(resBD);
// });
// router.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
//   const id = req.params.id;
//   const opPacientes = new OperPacientesIm();
//   const resBD = await opPacientes.delete(id);
//   res.json(resBD);
// });
exports.routes = router;
//# sourceMappingURL=patient.js.map