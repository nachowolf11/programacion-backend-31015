class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor:autor})
    }
    getBookNames(){
        let nombres = []
        for (let i = 0; i < this.libros.length; i++) {
            nombres.push(this.libros[i].nombre)
        }
        return nombres
    }
}

let usuario1 = new Usuario ('Nacho', 'Wolf',[{nombre:'The Analyst', autor:'John Katzenbach'}],['Wanda'])
usuario1.addMascota('Po')
usuario1.addMascota('Lala')

console.log(usuario1.getFullName())
console.log(usuario1.countMascotas())

usuario1.addBook('Games of Thrones','Martin George R.R')

console.log(usuario1.getBookNames())
