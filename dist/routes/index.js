"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
const socket_io_1 = __importDefault(require("socket.io"));
const solicitudesRouter = __importStar(require("./solicitudes"));
const usuariosRouter = __importStar(require("./usuarios"));
const pacientesRouter = __importStar(require("./pacientes"));
const categoriasRouter = __importStar(require("./categorias"));
const clasificacionesRouter = __importStar(require("./clasificaciones"));
const seguim_solicitudRouter = __importStar(require("./seguim_solicitud"));
exports.default = (app) => {
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
    res.sendfile(path_1.default.join(__dirname, '..', 'views', 'index.html'));
});
const io = socket_io_1.default.listen(3001);
io.origins();
const funSocket = (socket) => {
    console.log('++++ Nuevo cliente conectado ++++');
    socket.on('disconnect', function () {
        console.log('>>>> Se ha desconectado un cliente');
    });
};
// function dd(socket: SocketIO.Socket){
//   console.log('++++ Nuevo cliente conectado ++++')
//   socket.on('disconnect', function () {
//     console.log('>>>> Se ha desconectado un cliente');
//   });
//   socket.emit('nuevaSolicitud', 'resBD');
// }
// // SocketIO.
exports.socketNuevaSolicitud = io.on('connection', funSocket);
//# sourceMappingURL=index.js.map