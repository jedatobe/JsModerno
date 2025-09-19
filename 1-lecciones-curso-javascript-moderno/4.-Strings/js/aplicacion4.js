// COMPROBACIÓN EN TEXTOS

let comprobar = `Ser o no ser, esa es la cuestión`
// Método startsWith(): Comprueba si el texto comienza con una palabra o caracter. Sintaxis: str.startsWith(stringBuscada[, posicion])
console.log(comprobar.startsWith(`Ser`));    // true
console.log(comprobar.startsWith(`ser`));    // false
console.log(comprobar.startsWith(`es`, 18)); // true

// Método endsWith(): Comprueba si el texto termina con una palabra o caracter. Sintaxis: str.endsWith(StringBuscada[, longitud])
console.log(comprobar.endsWith(`cuestión`)); // true
console.log(comprobar.endsWith(`s`, 20));    // true
console.log(comprobar.endsWith(`Cuestión`)); // false

// Método includes(): Comprueba si el texto contiene otro texto. Sintaxis: str.includes(stringBuscada[, posicion])
console.log(comprobar.includes(`esa es`));     // true
console.log(comprobar.includes(`Esa es`, 14)); // false