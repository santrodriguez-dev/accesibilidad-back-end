"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// import socketIO from 'socket.io'; // socket.io
const index_1 = __importDefault(require("./routes/index")); //ubicacion de rutas raiz
const sequelize_1 = __importDefault(require("sequelize"));
// import SocketIO from "socket.io";
const env = process.env.NODE_ENV || "production";
// const config = require(__dirname + "./../../config/config.json")[env];
const config = {
    username: "atscwvlynimdsj",
    password: "c24b33df53e4b49f64d6ab1c0a0e8caae0d7e0a3e04ed4b24589cc8b5f9db846",
    database: "dd6s6sevdeocps",
    host: "ec2-50-17-194-129.compute-1.amazonaws.com",
    port: 5432,
    dialectOptions: {
        ssl: true,
        dialect: "postgres",
    },
    logging: true
};
exports.sequelizeBD = new sequelize_1.default.Sequelize(config.database, config.username, config.password, config.dialectOptions);
exports.sequelizeBD
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
// Create Express server
const app = express_1.default();
app.use(cors_1.default());
// const io = socketIO.listen(app)
// io.on("connection", SocketIO)
// view engine setup
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//Rutas index
index_1.default(app);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(http_errors_1.default(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
//# sourceMappingURL=app.js.map