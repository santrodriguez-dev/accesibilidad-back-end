import { Request, Response } from "express";
import express, { NextFunction } from "express";
import { OperPacientesIm } from "../dao/implementaciones";
import { Paciente } from "../dto";

const router = express.Router();

router.get('/getAll', async (req: Request, res: Response, next: NextFunction) => {
  const opPacientes = new OperPacientesIm();
  const resBD = await opPacientes.getAll();
  res.json(resBD);
});

router.get('/get/:id', async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const opPacientes = new OperPacientesIm();
  const resBD = await opPacientes.get(id);
  res.json(resBD);
});

router.post('/new', async (req: Request, res: Response, next: NextFunction) => {
  const paciente: Paciente = req.body;
  const opPacientes = new OperPacientesIm();
  const resBD = await opPacientes.create(paciente);
  res.json(resBD);
});

router.put('/update', async (req: Request, res: Response, next: NextFunction) => {
  const paciente: Paciente = req.body;
  const opPacientes = new OperPacientesIm();
  const resBD = await opPacientes.update(paciente);
  res.json(resBD);
});

router.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const opPacientes = new OperPacientesIm();
  const resBD = await opPacientes.delete(id);
  res.json(resBD);
});

export let routes = router;