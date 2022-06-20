const fs = require ('fs')

class Contenedor{
    constructor(nombre){
        this.nombre = nombre
    }
    async getAll() {
        try {
            const arr = await fs.promises.readFile(this.nombre, 'utf-8');
            const arrParsed = JSON.parse(arr);
            return arrParsed;
        } catch (err) {
            console.log(err);
        }
    }
    async save(objeto){
        let producto = {}
        let lastId = 0
        try {
            const arr = await this.getAll()
            if(arr.length > 0) lastId = arr[arr.length - 1].id
            if(arr){
                producto = {title: objeto.title,price: objeto.price, thumbnail: objeto.thumbnail, id: lastId + 1}
                arr.push(producto)
                await fs.promises.writeFile(this.nombre,JSON.stringify(arr))
                return producto.id
            }
        } catch (error) {
            console.log(error);
        }
        
    }
    async getById(number){
        try {
            const arr = await this.getAll()
            let producto = null
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === number) {
                    producto = arr[i]
                }
            }
            return producto
        } catch (error) {
            console.log('Hubo un error al encontrar el producto.');
        }
    }
    async deleteById(number){
        try {
            let arr = await this.getAll()
            let newArr = []
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id !== number) {
                    newArr.push(arr[i])
                }
            }
            fs.promises.writeFile(this.nombre,JSON.stringify(newArr))
        } catch (error) {
            console.log('Hubo un error al borrar el producto.');
        }
    }
    async deleteAll(){
        try {
            fs.promises.writeFile(this.nombre,'[]')
        } catch (error) {
            console.log('No se han podido borrar todos los objetos.');
        }
    }
}

let contenedor1 = new Contenedor('productos.txt')

let object = {
    title: 'Lapiz',
    price: 500,
    thumbnail: 'url de la foto del producto'
}



async function mostrarDesafio(){
    const id = await contenedor1.save(object);
    console.log(id);
    let productos = await contenedor1.getAll();
    console.log(productos);
    const producto = await contenedor1.getById(3);
    console.log(producto);
}
mostrarDesafio();

// contenedor1.deleteById()
// contenedor1.deleteAll()
