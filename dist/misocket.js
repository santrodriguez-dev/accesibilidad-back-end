"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var funcion = null;
const rxjs_1 = require("rxjs");
const h = new rxjs_1.Observable(ob => {
    ob.next('');
});
const funSocket = (socket) => {
    console.log('++++ Nuevo cliente conectado2 ++++');
    socket.on('disconnect', function () {
        console.log('>>>> Se ha desconectado un cliente2');
    });
    h.subscribe(res => {
        socket.emit('nuevaSolicitud', 'resBD');
    });
    // socket.emit('nuevaSolicitud', 'resBD');
    funcion = function Ejecutar(data) {
        //Codigo funcion
    };
};
// if(funcion){
//   funcion('dato');
// }
var misocket;
// var socketDin: SocketIO.Socket;
// socketDin.emit('', '')
// function dd(socket: SocketIO.Socket) {
//   console.log('++++ Nuevo cliente conectado1 ++++')
//   socket.on('disconnect', function () {
//     console.log('>>>> Se ha desconectado un cliente1');
//   });
//   socket = socketDin;
//   socket.emit('nuevaSolicitud', function () {
//     console.log('resbd');
//   });
// }
module.exports = funSocket;
