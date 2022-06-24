const express = require('express')

const app = express()
const PORT = 8080

app.get('/',(request,response) => {
    response.send({mensaje: 'Saludos a mi'})
})
app.get('/tutores',(request,response) => {
    response.send({mensaje: 'Saludos a los tutores'})
})

const server = app.listen(PORT, () => {
    console.log(`Server listening [${PORT}]...`);
})
server.on('error', e => console.log(`Error on server`,e))