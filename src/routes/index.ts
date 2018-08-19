import express from "express";
const router = express.Router();

import * as autenticacionRouter from "./autenticacion";
import * as solicitudesRouter from "./solicitudes";
import * as usuariosRouter from "./usuarios";
import * as pacientesRouter from "./pacientes";

export default (app: any) => {
  app.use('/', index);
  app.use('/autenticacion', autenticacionRouter.routes);
  app.use('/solicitudes', solicitudesRouter.routes);
  app.use('/usuarios', usuariosRouter.getAll);
  app.use('/pacientes', pacientesRouter.getAll);
};

const index = router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});