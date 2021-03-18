
const express=require('express');
const http = require('http');
const socketio= require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        //http Server
        this.server= http.createServer(this.app);
        //socket
        this.io =socketio(this.server,{/*Configuraciones*/})
    }

    configurarSockets(){
        new Sockets(this.io);

    }
    middleware(){
        this.app.use(express.static(path.resolve(__dirname,'../public')));
    }

    execute(){
        this.middleware();
        this.configurarSockets();
        this.server.listen(this.port,()=>{
            console.log('Server corriendo en :'+this.port)
        });
    }
}
module.exports = Server;