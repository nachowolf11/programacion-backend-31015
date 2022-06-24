const http = require('http')

const server = http.createServer((peticion, respuesta)=>{
    respuesta.end('...')
})

const conectedServer = server.listen(8080, () => {
    console.log('Server running...');
})