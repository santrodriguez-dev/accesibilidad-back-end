"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = require("./routes");
const models_1 = require("./dao/models");
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = require("http");
class MedicalEmergenciesServer {
    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }
    createApp() {
        this.app = express_1.default();
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default('dev'));
        this.app.use(cookie_parser_1.default());
        this.app.use(express_1.default.json());
        routes_1.registerRoutes(this.app);
        this.app.use('/movies', (req, res, next) => {
            this.io.emit('message', 'Hola mundo');
            res.send({ hola: 'hola' });
        });
    }
    createServer() {
        this.server = http_1.createServer(this.app);
    }
    config() {
        this.port = process.env.PORT || MedicalEmergenciesServer.PORT;
    }
    sockets() {
        this.io = socket_io_1.default(this.server);
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
        this.io.on('connect', (socket) => {
            console.log('Connected client on port %s.', this.port);
            socket.on('message', (m) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('message', m);
            });
            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }
    getApp() {
        return this.app;
    }
}
MedicalEmergenciesServer.PORT = 5000;
exports.MedicalEmergenciesServer = MedicalEmergenciesServer;
models_1.sequelizeBD.sync({ force: false }).then(() => {
    const app = new MedicalEmergenciesServer();
    app.getApp;
}).catch(err => {
    console.log('err');
});
//# sourceMappingURL=index.js.map