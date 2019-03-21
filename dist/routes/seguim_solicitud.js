// import { Request, Response } from "express";
// import express, { NextFunction } from "express";
// import { Seguim_solicitud } from "../dto";
// import { OperSeguim_solicitudIm } from "../dao/implementaciones/OperSeguim_solicitudIm";
// const router = express.Router();
// router.get('/getAll/:id', async (req: Request, res: Response, next: NextFunction) => {
//   const opSeguimS = new OperSeguim_solicitudIm();
//   const id = req.params.id;
//   const resBD = await opSeguimS.getAll(id);
//   res.send(resBD);
// });
// router.post('/crearSeguim', async (req: Request, res: Response, next: NextFunction) => {
//   const seguim: Seguim_solicitud = req.body;
//   const opSeguimS = new OperSeguim_solicitudIm();
//   const resBD = await opSeguimS.crearSeguim(seguim);
//   res.send(resBD);
// });
// router.put('/actualizarSeguim', async (req: Request, res: Response, next: NextFunction) => {
//   const segum: Seguim_solicitud = req.body;
//   const opSeguimS = new OperSeguim_solicitudIm();
//   const resBD = await opSeguimS.actualizarSeguim(segum);
//   res.send(resBD);
// });
// router.delete('/eliminarSeguim/:id', async (req: Request, res: Response, next: NextFunction) => {
//   const id = req.params.id;
//   const opSeguimS = new OperSeguim_solicitudIm();
//   const resBD = await opSeguimS.eliminarSeguim(id);
//   res.send(resBD);
// });
// export let routes = router;
//# sourceMappingURL=seguim_solicitud.js.map