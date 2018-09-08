"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const observableSocket = new rxjs_1.BehaviorSubject('');
const funSocket = (socket) => {
    console.log('++++ Nuevo cliente conectado ++++');
    socket.on('disconnect', function () {
        console.log('>>>> Se ha desconectado un cliente2');
    });
    observableSocket.subscribe(observ => {
        socket.emit('nuevaSolicitud', 'ResBD Observable' + observ);
    });
};
exports.ob = observableSocket;
module.exports = funSocket;
//# sourceMappingURL=misocket.js.map