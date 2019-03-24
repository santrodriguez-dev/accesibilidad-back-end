import { Request, Response } from "express";
import express, { NextFunction } from "express";
import { UserAdminIm } from "../dao/implementations/userAdminIm";

const router = express.Router();
const opUserAdmin = new UserAdminIm();

router.get('/getAll', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resBD = await opUserAdmin.getAll();
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

router.get('/get/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const resBD = await opUserAdmin.get(id);
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

interface Credentials {
  user: string,
  password: string;
}

router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const credentials: Credentials = req.body;
    const resBD = await opUserAdmin.login(credentials.user, credentials.password);
    res.json(resBD);
  } catch (e) {
    next(e);
  }
});

export let routes = router;