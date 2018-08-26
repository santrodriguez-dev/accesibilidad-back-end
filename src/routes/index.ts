import express from "express";
const router = express.Router();

import * as solicitudesRouter from "./solicitudes";
import * as usuariosRouter from "./usuarios";
import * as pacientesRouter from "./pacientes";
import * as categoriasRouter from "./categorias";
import * as clasificacionesRouter from "./clasificaciones";

export default (app: any) => {
  app.use('/', index);
  app.use('/solicitudes', solicitudesRouter.routes);
  app.use('/usuarios', usuariosRouter.routes);
  app.use('/pacientes', pacientesRouter.routes);
  app.use('/categorias', categoriasRouter.routes);
  app.use('/clasificaciones', clasificacionesRouter.routes);
};

const index = router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});