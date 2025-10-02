//  ARREGLOS EN JAVASCRIPT

// Arrays literales, utilizando corchetes [...]
const frutas = [`manzanas`, `peras`, `uvas`, `pomelos`, `duraznos`, `moras` ]
console.log(frutas);

// Por medio de constructor, utilizando la palabra reservada new(No recomendado)
const frutas2 = new Array(`manzanas`, `peras`, `uvas`, `pomelos`, `duraznos`, `moras`)
console.log(frutas2);

// Acceso a elementos del array
console.log(frutas[2]);
console.log(frutas[5]);

// Acceder mediante el método .at()
console.log(frutas.at(1));

// Acceder al último elemento
console.log(frutas.at(-1));

// Modificar un elemento
console.log(frutas[3] = `ciruelas`);

// Agregar un nuevo elemento
console.log(frutas[6] = `limones`);

// Propiedad length: indica el número de elementos que posee el array. (Sintaxis: nombreArray.length)
console.log(frutas.length);

// Acceder al último elemento del array mediante la propiedad length
console.log(frutas[frutas.length-1]);

// COMPROBAR SI UNA VARIABLE ES UN ARRAY
// Método Array.isArray(): determina si el valor pasado es un Array. (Sintaxis: Array.isArray(value))
console.log(Array.isArray(frutas));

// Mediante el operador typeof
console.log(typeof frutas);