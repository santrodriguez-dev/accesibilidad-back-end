// import express from "express";
// import path from "path";
// const router = express.Router();
// import SocketIO from "socket.io";

// // import * as solicitudesRouter from "./solicitudes";
// // import * as usuariosRouter from "./usuarios";
// import * as pacientesRouter from "./pacientes";
// // import * as categoriasRouter from "./categorias";
// // import * as clasificacionesRouter from "./clasificaciones";
// // import * as seguim_solicitudRouter from "./seguim_solicitud";

// export default (app: any) => {
//   app.use('/', index);
//   // app.use('/solicitudes', solicitudesRouter.routes);
//   // app.use('/usuarios', usuariosRouter.routes);
//   app.use('/pacientes', pacientesRouter.routes);
//   // app.use('/categorias', categoriasRouter.routes);
//   // app.use('/clasificaciones', clasificacionesRouter.routes);
//   // app.use('/seguimsolicitud', seguim_solicitudRouter.routes);
// };

// const index = router.get('/', (req, res, next) => {
//   // socketNuevaSolicitud.emit('new_message', {
//   //   msj: "Mensaje del socket listener 333",
//   //   status: "Correcto"
//   // });
//   res.send('Servidor funcionando correctamente');

//   // res.sendfile(path.join(__dirname, '..', 'views', 'index.html'));
// });

// // router.get('/prueba', (req, res, next) => {
// //   // socketNuevaSolicitud.emit('new_message', {
// //   // msj: "Mensaje del socket listener 333",
// //   //   status: "Correcto"
// //   // });
// //   res.send('La prueba funciona correctamente');

// //   // res.sendfile(path.join(__dirname, '..', 'views', 'index.html'));
// // });

// const io = SocketIO.listen(3000, {
//   origins: '*:*',
// });

// const funSocket = (socket: SocketIO.Socket) => {
//   console.log('++++ Nuevo cliente conectado ++++')
//   socket.on('disconnect', function () {
//     console.log('>>>> Se ha desconectado un cliente');
//   });

// }

// export const socketNuevaSolicitud = io.on('connection', funSocket);
import express from "express";
import * as patientRouter from "./patient";
import * as clinicHistoryRouter from "./clinic-history";
import * as medicalCenterRouter from "./medical-center";
import * as medicalEmergencyRouter from "./medical-emergency";
import * as userAdminRouter from "./user-admin";

export function registerRoutes(app: express.Express) {
  app.use('/patient', patientRouter.routes);
  app.use('/clinic-history', clinicHistoryRouter.routes);
  app.use('/medical-center', medicalCenterRouter.routes);
  app.use('/medical-emergency', medicalEmergencyRouter.routes);
  app.use('/user-admin', userAdminRouter.routes);
}