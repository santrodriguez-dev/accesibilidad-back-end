// import { Request, Response } from "express";
// import express, { NextFunction } from "express";
// import { OperCategoriasIm } from "../dao/implementaciones";

// const router = express.Router();

// router.get('/getAll', async (req: Request, res: Response, next: NextFunction) => {
//   const opCatego = new OperCategoriasIm();
//   const resBD = await opCatego.getAll();
//   res.json(resBD);
// });

// router.get('/get/:id', async (req: Request, res: Response, next: NextFunction) => {
//   const id = req.params.id;
//   const opCatego = new OperCategoriasIm();
//   const resBD = await opCatego.get(id);
//   res.json(resBD);
// });

// export let routes = router;