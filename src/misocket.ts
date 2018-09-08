import { Socket } from "socket.io";
import { BehaviorSubject } from 'rxjs';

const observableSocket = new BehaviorSubject<any>('');

const funSocket = (socket: Socket) => {
  console.log('++++ Nuevo cliente conectado ++++')
  socket.on('disconnect', function () {
    console.log('>>>> Se ha desconectado un cliente2');
  });

  observableSocket.subscribe(observ => {
    socket.emit('nuevaSolicitud', 'ResBD Observable' + observ);
  })
}

export const ob = observableSocket;
module.exports = funSocket;
