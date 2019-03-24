import { Request, Response } from "express";
import express, { NextFunction } from "express";
import { MedicalEmergencyIm } from "../dao/implementations";

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

export let routes = router;