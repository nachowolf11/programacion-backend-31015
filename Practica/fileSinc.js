const fs = require('fs');
const fechaActual = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`


try {
    fs.writeFileSync('./Archivos/fyh.txt',fechaActual,'utf-8');
    const data = fs.readFileSync('./Archivos/fyh.txt','utf-8');
    console.log(data);
} catch (error) {
    console.log(error)
}
