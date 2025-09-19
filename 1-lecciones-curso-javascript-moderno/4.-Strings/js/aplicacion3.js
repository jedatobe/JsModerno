// MÉTODOS PARA OBTENER LA POSICIÓN O ÍNDICE DE UN CARACTER O TEXTO

let texto = `Nuestra galaxia, la Vía Lactea pertenece a un grupo local de 46 galaxias que asu vez pertenece a un supercúmulo de 5000 galaxias.`
// Método charAt: Devuelve la posición de un caracter en una cadena de texto. Sintaxis: string.charAt(index)
console.log(`El indice 3 es: ${texto.charAt(3)}`);
console.log(`El indice 0 es: ${texto.charAt()}`);
console.log(`El indice 0 es: ${texto.charAt(texto.length - 1)}`);
console.log(`El indice 0 es: ${texto.charAt(350)}`);

// Método indexOf(): Devuelve la posición de la primera vez que aparece una palabra o caracter. Sintaxis: string.indexOf(caracter, posición)
console.log(`la posición es: ${texto.indexOf(`galaxia`)}`);
console.log(`la posición es: ${texto.indexOf(`a`, 16)}`);
console.log(`la posición es: ${texto.indexOf(`ñ`)}`);
console.log(`la posición es: ${texto.indexOf(`Galaxia`)}`);

// Método lastIndexOf(): Devuelve la posición de la última vez que aparece una palabra o carácter. Sintaxis: string.lastIndexOf(caracter, posición)
console.log(`la posición es: ${texto.lastIndexOf(`i`)}`);
console.log(`la posición es: ${texto.lastIndexOf(`a`, 50)}`);

// Método search(): Devuelve la posición de un caracter en una cadena de texto. Sintaxis: string.search(caracter)
console.log(`la posición es: ${texto.search(`pertenece`)}`);
