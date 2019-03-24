import express from "express";
import { registerRoutes } from "./routes";
import cors from "cors";
import createError from "http-errors";
import logger from "morgan";
import cookieParser from "cookie-parser";
import { sequelizeBD } from "./dao/models";

class Server {
  // propierties
  public app: express.Express;

  // builder
  constructor(private port: number) {
    this.app = express();
    this.app.use(cors());
    this.app.use(logger('dev'));
    this.app.use(cookieParser());
    this.app.use(express.json());

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

    registerRoutes(this.app);

    // catch 404 and forward to error handler
    this.app.use(function (req, res, next) {
      next(createError(404));
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
  static init(port: number): Server {
    return new Server(port);
  }

  // start server on port
  start(callback: Function) {
    this.app.listen(this.port, '0.0.0.0', callback());
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
  await sequelizeBD.sync({ force: false });

  const port = 5000;

  // instance server
  const server = Server.init(port);
  // run server
  server.start(() => console.log("Server started on port: " + port));

  // createServer(app).listen(port, () => console.info(`Server running on port ${port}`));
})();
