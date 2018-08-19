import { Request, Response } from "express";
import express, { NextFunction } from "express";

const router = express.Router();

export const getAll = router.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log(req.param)
  res.json({ holamundo: 'terriculas' });
});
