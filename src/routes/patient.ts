import { Request, Response } from "express";
import express, { NextFunction } from "express";
import { PatientIm } from "../dao/implementations";
import { Patient } from "../models/patient";
// import { OperPacientesIm } from "../dao/implementaciones";

const router = express.Router();
const opPatient = new PatientIm();

router.get('/getAll', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resBD = await opPatient.getAll();
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.get('/get/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const resBD = await opPatient.get(id);
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.post('/save', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const patient: Patient = req.body;
    let resBD: any;
    if (patient.id) {
      resBD = await opPatient.update(patient);
    } else {
      resBD = await opPatient.create(patient);
    }
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const resBD = await opPatient.deleteP(id);
    res.json(resBD);
  } catch (e) {
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

export let routes = router;