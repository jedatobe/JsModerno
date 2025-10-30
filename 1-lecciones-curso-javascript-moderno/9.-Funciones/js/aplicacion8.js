// ARRAY FUNCTIONS

/* Método every(): permite comprobar si todos y cada uno de los elementos de un array cumplen la condición que se especifica
(Sintaxis: arr.every(callback(element[, index[, array]])[, thisArg]) */
const edades = [42, 22, 89, 49];
const validate = edades.every((edad) => {
    return (edad >= 121)
})
console.log(validate);

/* Método some(): comprueba si al menos uno de los elementos del array, cumplen la condición definida
(Sintaxis: arr.some(callback(element[, index[, array]])[, thisArg]) */
const letras = ['a', 'c', 'd', 'e', 'f', 'g'];
const verificarLetras = letras.some((letra) => {
    return letra == 'q';
});
console.log(verificarLetras);

/* Método map(): devuelve un nuevo array donde cada uno de sus elementos será lo que devuelva la llamada a la función
por cada uno de los elementos del array original
(Sintaxis: arr.map(function callback(currentValue, index, array) { Elemento devuelto de nuevo_array}[, thisArg])) */
const numeros = [12, 45, 150, 20];
const doble = numeros.map((numero) => {
    return numero * 2;
});
console.log(doble);

/* Método filter(): crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
 (Sintaxis: arr.filter(callback(currentValue[, index[, array]])[, thisArg])) */
const filtrarNumeros = [6, 50, 3 , 89, 20 , 4 , 61];
const filtrar = filtrarNumeros.filter((numero) => {
    return numero >= 10
});
console.log(filtrar);

/* Método find(): devuelve el elemento que cumple la condición implementada por la función dada.
(Sintaxis:arr.find(callback(element[, index[, array]])[, thisArg])) */
const frutas = ['manzana', ' cereza', 'banana', 'kiwi', 'mango'];
const encontrar = frutas.find((fruta) => {
    return fruta == 'mango';
});
console.log(encontrar);

/* Método findIndex(): devuelve el índice o posición del elemento que cumple la condición implementada por la función dada.
(Sintaxis: arr.findIndex(callback( element[, index[, array]] )[, thisArg]))
*/
const usuarios = ['Monica', 'Dwayne', 'Jessica', 'William', 'Jasmine'];
const encontrarIndice = usuarios.findIndex((usuario) => {
    return usuario == 'Jasmine';
});
console.log(encontrarIndice);

/* Método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
(Sintaxis: arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])) */
const puntuacion = [4.5, 2.9, 1.1, 3.3];
const resultados = puntuacion.reduce((a, b) => {
    return a + b;
});
console.log(resultados);

/* Método reduceRight(): ejecuta una función reductora sobre cada elemento de un array, pero en orden de derecha a izquierda.
(Sintaxis: array.reduceRight(funcion[,valorInicial])) */
const valores = [175, 50, 25];
const miFuncion = valores.reduceRight((a, b) => {
    return a - b;
});
console.log(miFuncion);
