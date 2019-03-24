"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const http_errors_1 = __importDefault(require("http-errors"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const models_1 = require("./dao/models");
class Server {
    // builder
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default('dev'));
        this.app.use(cookie_parser_1.default());
        this.app.use(express_1.default.json());
        // this.app.use('/movies', (req: Request, res: Response, next: NextFunction) => {
        //   // socketNuevaSolicitud.emit('new_message', {
        //   //   msj: "Mensaje del socket listener 333",
        //   //   status: "Correcto"
        //   // });
        //   res.send({ hola: 'hola' });
        //   // res.sendfile(path.join(__dirname, '..', 'views', 'index.html'));
        // });
        // this.app.use('/actors', actors);
        // Registe urls app
        routes_1.registerRoutes(this.app);
        // catch 404 and forward to error handler
        this.app.use(function (req, res, next) {
            next(http_errors_1.default(404));
        });
        // // intance swagger
        // try {
        //   const swaggerDocumnet = require("../../swagger.json");
        //   this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocumnet));
        // } catch (err) {
        //   console.log(err);
        // }
    }
    // init server
    static init(port) {
        return new Server(port);
    }
    // start server on port
    start(callback) {
        this.app.listen(this.port, callback());
    }
}
// (async () => {
//   await sequelize.sync({ force: true });
//   createServer(app)
//     .listen(
//       port,
//       () => console.info(`Server running on port ${port}`)
//     );
// })();
// import { Doctor } from './patient';
// const credentials = config[get('NODE_ENV', 'development')];
(async () => {
    await models_1.sequelizeBD.sync({ force: false });
    // instance server
    const server = Server.init(3000);
    // run server
    server.start(() => console.log("Server started"));
    // createServer(app).listen(port, () => console.info(`Server running on port ${port}`));
})();
//# sourceMappingURL=index.js.map