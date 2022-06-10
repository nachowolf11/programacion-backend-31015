class Contador {
    constructor(persona){
        this.persona = persona
        this.contador = 0
    }
    static total = 0
    obtenerResponsable(){return this.persona}
    obtenerCuentaIndividual(){return this.contador}
    static obtenerCuentaGlobal(){return Contador.total}
    contar(){
        this.contador++
        Contador.total++
    }
}

let persona1 = new Contador ('Pablo')
let persona2 = new Contador ('Nacho')

persona1.contar()
persona1.contar()
persona1.contar()
persona1.contar()

persona2.contar()
persona2.contar()
persona2.contar()

console.log(persona1.obtenerResponsable() + ' contó ' + persona1.obtenerCuentaIndividual() + ' veces.')
console.log(persona2.obtenerResponsable() + ' contó ' + persona2.obtenerCuentaIndividual() + ' veces.')
console.log('La cuenta total fue de: ' + Contador.obtenerCuentaGlobal())
