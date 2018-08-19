import express from "express";
import * as autenticacionController from "../dao/autenticacion";

const router = express.Router();

router.post('/', autenticacionController.iniciarSesion);

export let routes = router;