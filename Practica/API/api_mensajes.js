const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const mensajes = [
    {id: 1, body:"Esto es un mensaje"},
    {id: 2, body:"Otro mensaje"}
]

app.get('/api/mensajes',(req,res)=>{
    if(Object.entries(req.query).length > 0){
        const mensaje = mensaje.find(m => m.id == req.query.id)
        res.json(mensaje)
    }else{
        res.json(mensajes)
    }
})

app.post('/api/mensajes',(req,res)=>{
    console.log('POST Recibido');
    mensajes.push(req.body)
    res.json("Recibido")
})

app.listen(8080)