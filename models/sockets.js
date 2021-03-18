


class Sockets{
    constructor(io){
        this.io=io;

        this.socketsEvents();

    }
    socketsEvents(){

        //on Connection
        this.io.on('connection',( socket )=>{

            //eventos

            socket.on('msg-to-server', (data) => {
               console.log('en el server'+data.msg)
        
                this.io.emit('msg-from-server',{msg:data.msg})
            })
        
        
        });
    }
}

module.exports=Sockets;