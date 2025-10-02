// BUSCAR ELEMENTOS EN UN ARRAY

/* Método includes() determina si un array incluye un determinado elemento, 
devuelve true o false según corresponda. (Sintaxis: arr.includes(searchElement[, fromIndex])) */
const productos = [`lavaplatos`, `lavadoras`, `estufas`, `refrigeradores`, `placas de cocción`]
console.log(productos);
console.log(productos.includes(`horno de pared`));   // false
console.log(productos.includes(`lavadoras`));        // true
console.log(productos.includes(`lavadoras`, 1));     // true
console.log(productos.includes(`refrigeradores`, 5));// false

/* Método indexOf(): retorna el primer índice en el que se encuentra un
elemento dado en el array, ó retorna -1 si el elemento no esta presente. 
 (Sintaxis: arr.indexOf(searchElement[, fromIndex]))
*/
const numeros = [50, 100, 115, 25, 2, 115, 100, 50]
console.log(numeros);
console.log(numeros.indexOf(100));
console.log(numeros.indexOf(20));
console.log(numeros.indexOf(100, 2));
console.log(numeros.indexOf(115, 3));

/* Método lastIndexOf(): devuelve el último índice en el que un elemento
puede encontrarse en el arreglo, ó -1 si el elemento no esta presente. El
arreglo es recorrido en sentido contrario, empezando por el índice fromIndex.
(Sintaxis: arr.lastIndexOf(searchElement) / arr.lastIndexOf(searchElement, fromIndex)) */
const animales = [`elefante`, `leon`, `tigre`, `hipopotamo`, `leon`, `elefante`]
console.log(animales);
console.log(animales.lastIndexOf(`leon`));
console.log(animales.lastIndexOf(`elefante`));
console.log(animales.lastIndexOf(`canguro`));
console.log(animales.lastIndexOf(`hipopotamo`, 3));
