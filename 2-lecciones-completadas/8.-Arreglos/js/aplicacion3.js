// CREAR O MODIFICAR SUBARRAYS

const nombres = ["Alexa", "Bob", "Brianna", "Thomas", "Lia", "Mike", "Linda", "Billie"];
console.log(nombres);

/* Método splice(): cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. 
(Sintaxis: array.splice(start[, deleteCount[, item1[, item2[, ...]]]])) */
console.log(nombres.splice(3));
console.log(nombres.splice(2, 1));
console.log(nombres.splice(3, 2, "Laurelle", "Rick"));

/* Método slice(): devuelve una copia de una parte del array dentro de un nuevo
array empezando por inicio hasta fin (fin no incluido). (Sintaxis:arr.slice([inicio [, fin]])) */
console.log(nombres.slice(1, 4));

/* Método fill(): cambia todos los elementos en un arreglo por un valor estático,
desde el índice start (por defecto 0) hasta el índice end. (Sintaxis: arr.fill(value[, start[, end]]))*/
const colores = ["azul", "rojo", "blanco", "verde", "amarillo"];
console.log(colores);
console.log(colores.fill("naranja", 2));
console.log(colores.fill("naranja", 1, 4));