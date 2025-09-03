// ARRAY FUNCTIONS

/* Método every(): permite comprobar si todos y cada uno de los elementos de un array cumplen la condición que se especifica
(Sintaxis: arr.every(callback(element[, index[, array]])[, thisArg]) */
const edades = [43, 22, 89, 40,];
function verificarEdades(edad){
    return edad > 21;
}
console.log(edades.every(verificarEdades));

/* Método some(): comprueba si al menos uno de los elementos del array, cumplen la condición definida 
(Sintaxis: arr.some(callback(element[, index[, array]])[, thisArg]) */
const letras = ["a", "b", "c", "d", "f", "g",];
const verificarLetras = function(letra){
    return letra == "q";
}
console.log(letras.some(verificarLetras));

/* Método map(): devuelve un nuevo array donde cada uno de sus elementos será lo que devuelva la llamada a la función
por cada uno de los elementos del array original
(Sintaxis: arr.map(function callback(currentValue, index, array) { Elemento devuelto de nuevo_array}[, thisArg])) */
const numeros = [12, 45, 150, 20,];
function doble(x){
    return x * 2;
}
console.log(numeros.map(doble));

/* Método filter(): crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada. 
 (Sintaxis: arr.filter(callback(currentValue[, index[, array]])[, thisArg])) */
const filtrarNumeros = [6, 50, 3, 89, 20, 4, 61,];
function filtrar(elemento){
    return elemento >= 10;
}
console.log(filtrarNumeros.filter(filtrar));

/* Método find(): devuelve el elemento que cumple la condición implementada por la función dada. 
(Sintaxis:arr.find(callback(element[, index[, array]])[, thisArg])) */
const frutas = ["manzana", "cereza", "banana", "kiwi", "mango", ];
function encontrar(fruta){
    return fruta == "mango";
}
console.log(frutas.find(encontrar));

/* Método findIndex(): devuelve el índice o posición del elemento que cumple la condición implementada por la función dada.
(Sintaxis: arr.findIndex(callback( element[, index[, array]] )[, thisArg]))
*/
const usuarios = ["Mónica", "Dwayne", "Jessica", "William", "Jasmine", ];
const encontrarIndice = usuario => {
    return usuario == "Jasmine";
}
console.log(usuarios.findIndex(encontrarIndice));

/* Método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
(Sintaxis: arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])) */
const puntuacion = [4.5, 2.9, 1.1, 3.3,];
function resultado(a, b){
    return a + b;
}
console.log(puntuacion.reduce(resultado));

/* Método reduceRight(): ejecuta una función reductora sobre cada elemento de un array, pero en orden de derecha a izquierda.
(Sintaxis: array.reduceRight(funcion[,valorInicial])) */
const valores = [175, 50, 25,];
function miFuncion(a, b){
    return a - b;
}
console.log(valores.reduceRight(miFuncion));