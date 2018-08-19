import express from "express";
import { Request, Response } from "express";
import { OperSolicitudesIm } from "../dao/implementaciones";

const router = express.Router();

router.get('/getAll', (req: Request, res: Response) => {
    console.log(req.body)
    const opSolicitudes = new OperSolicitudesIm();
    res.json(opSolicitudes.getAll());
});

router.get('/getSolicitud/:id', (req: Request, res: Response) => {
    console.log(req.params)
    const opSolicitudes = new OperSolicitudesIm();
    res.json(opSolicitudes.getAll());
});

export let routes = router;
