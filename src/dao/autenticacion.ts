import { Request, Response } from "express";
import { Credenciales } from "../dto/Usuario";

export const iniciarSesion = (req: Request, res: Response) => {
    const cred: Credenciales = req.body;
    res.json(cred);
};
