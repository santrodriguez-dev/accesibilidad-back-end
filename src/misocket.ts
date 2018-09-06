import SocketIO from "socket.io";

var funcion = null;


import { Observable, BehaviorSubject } from 'rxjs';

const h = new Observable(ob => {
  ob.next('')
})

const cambioCargando = new BehaviorSubject<boolean>(false);



const funSocket = (socket: SocketIO.Socket) => {
  console.log('++++ Nuevo cliente conectado2 ++++')
  socket.on('disconnect', function () {
    console.log('>>>> Se ha desconectado un cliente2');
  });


  h.subscribe(res => {
    socket.emit('nuevaSolicitud', ['resBD']);

  })
  // socket.emit('nuevaSolicitud', 'resBD');

  funcion = function Ejecutar(data: any) {
    //Codigo funcion
  }
}

// if(funcion){
//   funcion('dato');
// }

var misocket: SocketIO.Socket;


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
