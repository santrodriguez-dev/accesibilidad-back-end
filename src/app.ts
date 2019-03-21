import express from "express";
import createError from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
// import socketIO from 'socket.io'; // socket.io
import routes from './routes/index'; //ubicacion de rutas raiz
import Sequelize, { Options } from 'sequelize';
// import SocketIO from "socket.io";

const env = process.env.NODE_ENV || "production";
// const config = require(__dirname + "./../../config/config.json")[env];

const config: Options = {
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
}

export const sequelizeBD = new Sequelize.Sequelize(config.database,
  config.username,
  config.password,
  config.dialectOptions);

sequelizeBD
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
// Create Express server

const app = express();
app.use(cors());

// const io = socketIO.listen(app)
// io.on("connection", SocketIO)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Rutas index
routes(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
