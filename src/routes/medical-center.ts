import { Request, Response } from "express";
import express, { NextFunction } from "express";
import { MedicalCenterIm } from "../dao/implementations/medicalCenterIm";
import { MedicalCenter } from "../dao/models/medical-center";

const router = express.Router();
const opMedicalCenter = new MedicalCenterIm();

router.get('/getAll', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resBD = await opMedicalCenter.getAll();
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.get('/get/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const resBD = await opMedicalCenter.get(id);
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});
router.get('/getWithEmergencies/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const resBD = await opMedicalCenter.getWithEmergencies(id);
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.post('/save', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const medicalCenter: MedicalCenter = req.body;
    let resBD: any;
    if (medicalCenter.id) {
      resBD = await opMedicalCenter.update(medicalCenter);
    } else {
      resBD = await opMedicalCenter.create(medicalCenter);
    }
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const resBD = await opMedicalCenter.delete(id);
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

export let routes = router;