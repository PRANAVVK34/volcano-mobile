
const app = require('express')()


const server = require('http').Server(app)


const io = require('socket.io')(server)


var count=0

io.on("connection",(socket)=>{
    count++
    console.log("a user connected",count);
    

 io.emit("send", (count))

 socket.on("disconnect", ()=>{
     count--
     console.log("disconnected",count);
     
 })
 

})


server.listen(3000,(err)=>{
    if(err) throw err
    console.log("server started");
})