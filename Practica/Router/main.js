const express = require('express')
const { Router } = express

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 8080

class Mascota {
    constructor(nombre,raza,edad){
        this.nombre = nombre
        this.raza = raza
        this.edad = edad
    }
    static mascotas = []
}

class Persona {
    constructor(nombre,apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    static personas = []
}


const router = Router()

router.get('/mascotas',(req,res)=>{
    try {
        res.json(Mascota.mascotas)
    } catch (error) {
        res.json({error: 'Error al obtener las mascotas.'});
    }
})

router.post('/mascotas',(req,res)=>{
    try {
        const mascota = new Mascota (req.body.nombre, req.body.raza, req.body.edad)
        Mascota.mascotas.push(mascota)
        res.json({Respuesta: 'Mascota creada correctamente.'})
    } catch (error) {
        res.json({error: 'Error al cargar mascota.'});
    }
})

router.get('/personas',(req,res)=>{})

app.use('/api',router)

const server = app.listen(PORT, () => {
    console.log(`Server listening [${PORT}]...`);
})
server.on('error', e => console.log(`Error on server`,e))