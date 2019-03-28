import { Request, Response } from "express";
import express, { NextFunction } from "express";
import { ClinicHistoryIm } from "../dao/implementations";
import { ClinicHistory } from "../dao/models/clinic-history";

const router = express.Router();
const opClinicHistory = new ClinicHistoryIm();

router.get('/getAll', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resBD = await opClinicHistory.getAll();
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.get('/get/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const resBD = await opClinicHistory.get(id);
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.get('/getByPatientId/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const patientId = req.params.id;
    const resBD = await opClinicHistory.getByPatientId(patientId);
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.post('/save', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const clinicHist: ClinicHistory = req.body;
    let resBD: any;
    if (clinicHist.id) {
      resBD = await opClinicHistory.update(clinicHist);
    } else {
      resBD = await opClinicHistory.create(clinicHist);
    }
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const resBD = await opClinicHistory.deleteP(id);
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

export let routes = router;