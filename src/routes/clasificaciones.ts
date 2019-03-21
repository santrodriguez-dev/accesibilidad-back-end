// import { Request, Response } from "express";
// import express, { NextFunction } from "express";
// import { OperClasificacionesIm } from "../dao/implementaciones";

// const router = express.Router();

// router.get('/getAll', async (req: Request, res: Response, next: NextFunction) => {
//   const opClasifi = new OperClasificacionesIm();
//   const resBD = await opClasifi.getAll();
//   res.json(resBD);
// });

// router.get('/get/:id', async (req: Request, res: Response, next: NextFunction) => {
//   const id = req.params.id;
//   const opClasifi = new OperClasificacionesIm();
//   const resBD = await opClasifi.get(id);
//   res.json(resBD);
// });

// export let routes = router;