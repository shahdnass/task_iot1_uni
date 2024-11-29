const express = require("express");
const instance = express();
const port = 4401;

 
const server = instance.listen(port ,()=>{
   console.log("the server is connected");
})


const ws = require("ws").Server;
const WebSocket = new ws ({server});
let userList = [];
WebSocket.on("connection",function(wss){
    console.log("a new client connected");
    
    wss.on("message",function(msg){
        console.log(msg.toString());
        wss.send(msg.toString());
    })
    
})

 


instance.get("/",(req,res)=>{
    res.sendFile(__dirname +"/task_iot1.html");
})


/*instance.get("/:id",(req,res)=>{
    res.send("shahd "+req.params.id);
})*/