//Funcion que recibe una lista y dice si esta vacia, sino muestra el resultado.

// let lista = [1,2,3,4,5]

// function mostrarLista(lista) {
//     return lista.length > 0 ? console.log(lista) : console.log('lista vacía')
// }

// mostrarLista(lista)

//Funcion anónima invocada inmediatamente

// let lista = [1,2,3];

// (function () {
//     if(lista.length > 0){
//         console.log(lista)
//     }else{
//         console.log('lista vacia')
//     }
// })()

// Funcion que recibe un numero y devuelve una funcion anonima que recibe un segundo numero y los multiplica

// function crearMultiplicador(valor1) {
//     return function (valor2) {
//         return valor1 * valor2
//     }
// }

// const duplicar = crearMultiplicador(2)
// const triplicar = crearMultiplicador(3)
// console.log(resultado)