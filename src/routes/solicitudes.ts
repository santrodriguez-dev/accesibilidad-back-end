// import express from "express";
// import { Request, Response } from "express";
// import { OperSolicitudesIm } from "../dao/implementaciones";
// import { Solicitud } from "../dto";

// const router = express.Router();

// router.get('/getAll', async (req: Request, res: Response) => {
//     const opSolicitudes = new OperSolicitudesIm();
//     const resBD = await opSolicitudes.getAll();
//     res.json(resBD);
// });

// router.get('/get/:id', async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const opSolicitudes = new OperSolicitudesIm();
//     const resBD = await opSolicitudes.get(id);
//     res.json(resBD);
// });

// router.get('/paciente/:id', async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const opSolicitudes = new OperSolicitudesIm();
//     const resBD = await opSolicitudes.solicitudesPorPaciente(id);
//     res.json(resBD);
// });

// router.post('/crear', async (req: Request, res: Response) => {
//     const solicititud: Solicitud = req.body;
//     const opSolicitudes = new OperSolicitudesIm();
//     const resBD = await opSolicitudes.crearSolicitud(solicititud);
//     res.json(resBD);
// });

// export let routes = router;
