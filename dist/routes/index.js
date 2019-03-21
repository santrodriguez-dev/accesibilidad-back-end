"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const socket_io_1 = __importDefault(require("socket.io"));
// import * as solicitudesRouter from "./solicitudes";
// import * as usuariosRouter from "./usuarios";
// import * as pacientesRouter from "./pacientes";
// import * as categoriasRouter from "./categorias";
// import * as clasificacionesRouter from "./clasificaciones";
// import * as seguim_solicitudRouter from "./seguim_solicitud";
exports.default = (app) => {
    app.use('/', index);
    // app.use('/solicitudes', solicitudesRouter.routes);
    // app.use('/usuarios', usuariosRouter.routes);
    // app.use('/pacientes', pacientesRouter.routes);
    // app.use('/categorias', categoriasRouter.routes);
    // app.use('/clasificaciones', clasificacionesRouter.routes);
    // app.use('/seguimsolicitud', seguim_solicitudRouter.routes);
};
const index = router.get('/', (req, res, next) => {
    // socketNuevaSolicitud.emit('new_message', {
    //   msj: "Mensaje del socket listener 333",
    //   status: "Correcto"
    // });
    res.send('Servidor funcionando correctamente');
    // res.sendfile(path.join(__dirname, '..', 'views', 'index.html'));
});
// router.get('/prueba', (req, res, next) => {
//   // socketNuevaSolicitud.emit('new_message', {
//   // msj: "Mensaje del socket listener 333",
//   //   status: "Correcto"
//   // });
//   res.send('La prueba funciona correctamente');
//   // res.sendfile(path.join(__dirname, '..', 'views', 'index.html'));
// });
const io = socket_io_1.default.listen(3000, {
    origins: '*:*',
});
const funSocket = (socket) => {
    console.log('++++ Nuevo cliente conectado ++++');
    socket.on('disconnect', function () {
        console.log('>>>> Se ha desconectado un cliente');
    });
};
exports.socketNuevaSolicitud = io.on('connection', funSocket);
//# sourceMappingURL=index.js.map