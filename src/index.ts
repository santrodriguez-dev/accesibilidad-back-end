import express from "express";
import cors from "cors";
import createError from "http-errors";
import logger from "morgan";
import cookieParser from "cookie-parser";
import { registerRoutes } from "./routes";
import { sequelizeBD } from "./dao/models";
import socketIo from 'socket.io';

import { createServer, Server } from 'http';

export class MedicalEmergenciesServer {
  public static readonly PORT: number = 5000;
  private app: express.Application;
  private server: Server;
  public io: SocketIO.Server;
  private port: string | number;

  constructor() {
    this.createApp();
    this.config();
    this.createServer();
    this.sockets();
    this.listen();
  }

  private createApp() {
    this.app = express();
    this.app.use(cors());
    this.app.use(logger('dev'));
    this.app.use(cookieParser());
    this.app.use(express.json());
    registerRoutes(this.app);
    this.app.use('/movies', (req: any, res: any, next: any) => {

      this.io.emit('message', 'Hola mundo')
      res.send({ hola: 'hola' });

    });
  }

  private createServer(): void {
    this.server = createServer(this.app);
  }

  private config(): void {
    this.port = process.env.PORT || MedicalEmergenciesServer.PORT;
  }

  private sockets(): void {
    this.io = socketIo(this.server);
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });

    this.io.on('connect', (socket: any) => {
      console.log('Connected client on port %s.', this.port);

      socket.on('message', (m: any) => {
        console.log('[server](message): %s', JSON.stringify(m));
        this.io.emit('message', m);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }

  public getApp(): express.Application {
    return this.app;
  }
}

sequelizeBD.sync({ force: false }).then(() => {
  const app = new MedicalEmergenciesServer();
  app.getApp;
}).catch(err => {
  console.log('err');
});