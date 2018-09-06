import express from "express";
import path from "path";
const router = express.Router();
import SocketIO from "socket.io";

import * as solicitudesRouter from "./solicitudes";
import * as usuariosRouter from "./usuarios";
import * as pacientesRouter from "./pacientes";
import * as categoriasRouter from "./categorias";
import * as clasificacionesRouter from "./clasificaciones";
import * as seguim_solicitudRouter from "./seguim_solicitud";

export default (app: any) => {
  app.use('/', index);
  app.use('/solicitudes', solicitudesRouter.routes);
  app.use('/usuarios', usuariosRouter.routes);
  app.use('/pacientes', pacientesRouter.routes);
  app.use('/categorias', categoriasRouter.routes);
  app.use('/clasificaciones', clasificacionesRouter.routes);
  app.use('/seguimsolicitud', seguim_solicitudRouter.routes);
};

const index = router.get('/', (req, res, next) => {
  // socketNuevaSolicitud.emit('new_message', {
  //   msj: "Mensaje del socket listener 333",
  //   status: "Correcto"
  // });
  res.sendfile(path.join(__dirname, '..', 'views', 'index.html'));
});

// const io = SocketIO.listen(3000);

// const funSocket = (socket: SocketIO.Socket) => {
//   console.log('++++ Nuevo cliente conectado ++++')
//   socket.on('disconnect', function () {
//     console.log('>>>> Se ha desconectado un cliente');
//   });

//   socket.emit('nuevaSolicitud', 'resBD');

// }

// function dd(socket: SocketIO.Socket){
//   console.log('++++ Nuevo cliente conectado ++++')
//   socket.on('disconnect', function () {
//     console.log('>>>> Se ha desconectado un cliente');
//   });

//   socket.emit('nuevaSolicitud', 'resBD');

// }

// // SocketIO.



// export const socketNuevaSolicitud = io.on('connection', dd);