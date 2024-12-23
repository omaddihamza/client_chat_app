const express = require('express');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)

const messages = [
    {name:"tom", message:"hello"},
    {name:"john",message:"bonjour"}
]

app.use(express.static(__dirname))
app.use(express.json())

app.get("/message", (req, res)=>{
    res.send(messages)
})

app.post("/message",(req, res)=>{
  messages.push(req.body)
  io.emit("message",req.body)
    res.sendStatus(200)
})

io.on('connection',(socket)=>{
    console.log("a user connected")
})

const server = http.listen(3000, ()=>{
    console.log('server is listening on port', server.address().port)
})