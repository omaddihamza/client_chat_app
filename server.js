const express = require('express');
const app = express();

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
    res.sendStatus(200)
})

const server = app.listen(3000, ()=>{
    console.log('server is listening on port', server.address().port)
})