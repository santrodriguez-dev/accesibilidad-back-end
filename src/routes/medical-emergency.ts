import { Request, Response } from "express";
import express, { NextFunction } from "express";
import { MedicalEmergencyIm } from "../dao/implementations";
import { MedicalEmergency } from "../dao/models/medical-emergency";
import { MedicalEmergenciesServer } from "..";

const router = express.Router();
const opMedicalEmergency = new MedicalEmergencyIm();

router.get('/getAll', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resBD = await opMedicalEmergency.getAll();
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.get('/get/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const resBD = await opMedicalEmergency.get(id);
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.get('/getByPatientId/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const resBD = await opMedicalEmergency.getByPatientId(id);
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.post('/save', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const medicalEm: MedicalEmergency = req.body;
    let resBD: any;
    if (medicalEm.id) {
      resBD = await opMedicalEmergency.update(medicalEm);
    } else {
      resBD = await opMedicalEmergency.create(medicalEm);
    }
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const resBD = await opMedicalEmergency.delete(id);
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

export let routes = router;