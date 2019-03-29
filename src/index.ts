import express from "express";
import cors from "cors";
import createError from "http-errors";
import logger from "morgan";
import cookieParser from "cookie-parser";
import { registerRoutes } from "./routes";
import { sequelizeBD } from "./dao/models";
import * as socketio from "socket.io";

class Server {
  // propierties
  public app: express.Express;

  // builder
  constructor(private port: number) {
    this.app = express();
    this.app.use(logger('dev'));
    this.app.use(cookieParser());
    this.app.use(express.json());
    this.app.use(cors());
    // this.app.use((req, res, next) => {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Expose-Headers", "x-total-count");
    //   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
    //   res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

    //   next();
    // });

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
    this.app.listen(process.env.PORT || this.port, callback());
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


  // let io = require("socket.io")(server);
  // io.on("connection", function (socket: any) {
  //   console.log("a user connected");
  //   // whenever we receive a 'message' we log it out
  //   socket.on("message", function (message: any) {
  //     console.log(message);
  //   });
  // });

  // run server
  server.start(() => console.log("Server started on port: " + port));

  // createServer(app).listen(port, () => console.info(`Server running on port ${port}`));
})();
