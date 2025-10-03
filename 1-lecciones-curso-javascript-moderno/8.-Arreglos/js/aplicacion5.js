// // ORDENAR ELEMENTOS DE UN ARRAY

// Método reverse(): invierte el orden de los elementos de un array. (Sintaxis: arr.reverse())
const elementos = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K']
elementos.reverse();
console.log(elementos);

// Método sort(): ordena los elementos de un arreglo. El orden de clasificación predeterminado es ascendente.(Sintaxis: arr.sort())
const nombres = [`Alexa`, `Bob`, `Brianna`, `Thomas`, `Lia`, `Mike`, `Linda`, `Billie`]
nombres.sort();
console.log(nombres);

// Ordenar valores numéricos de forma ascendente
const numeros = [20, 10, 100, 16, 9, 12, 23 ,99]
numeros.sort(function(a, b) {
    return a - b
})
console.log(numeros);

// Ordenar valores numéricos de forma descendente
const numeros2 = [20, 10, 100, 16, 9, 12, 23 ,99]
numeros2.sort(function(a, b) {
    return b - a
})
console.log(numeros2);

// Ordenar objetos dentro de un array
const objetosArreglos = [
    { nombre: `Edward`, edad: 30},
    { nombre: `Nathalie`, edad: 29},
    { nombre: `Luis`, edad: 45},
    { nombre: `Martha`, edad: 32},
    { nombre: `Ernie`, edad: 35},
    { nombre: `Jessica`, edad: 38},
]

objetosArreglos.sort(function(a, b) {
    return a.edad - b.edad
})
console.log(objetosArreglos);
