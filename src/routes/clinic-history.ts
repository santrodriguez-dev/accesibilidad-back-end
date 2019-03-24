import { Request, Response } from "express";
import express, { NextFunction } from "express";
import { ClinicHistoryIm } from "../dao/implementations";

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

export let routes = router;