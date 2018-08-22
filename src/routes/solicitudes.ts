import express from "express";
import { Request, Response } from "express";
import { OperSolicitudesIm } from "../dao/implementaciones";

const router = express.Router();

router.get('/getAll', async (req: Request, res: Response) => {
    const opSolicitudes = new OperSolicitudesIm();
    const resBD = await opSolicitudes.getAll();
    res.json(resBD);
});

router.get('/get/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const opSolicitudes = new OperSolicitudesIm();
    const resBD = await opSolicitudes.get(id);
    res.json(resBD);
});

export let routes = router;
