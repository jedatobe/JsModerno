// MÉTODOS PARA OBTENER LA POSICIÓN O ÍNDICE DE UN CARACTER O TEXTO

let texto = "Nuestra galaxia, la Vía Lactea, pertenece a un Grupo Local de 46 galaxias que a su vez pertenece a un supercúmulo de 5000 galaxias."

// Método charAt: Devuelve la posición de un caracter en una cadena de texto. Sintaxis: string.charAt(index)
console.log('El caracter que se encuentra en el índice 3 es ' + texto.charAt(3));
console.log(texto.charAt());
console.log(texto.charAt(texto.length-1));
console.log(texto.charAt(350));

// Método indexOf(): Devuelve la posición de la primera vez que aparece una palabra o caracter. Sintaxis: string.indexOf(caracter, posición)
console.log(texto.indexOf("galaxia"));
console.log(texto.indexOf("a", 16));
console.log(texto.indexOf("ñ"));
console.log(texto.indexOf("Galaxia"));

// Método lastIndexOf(): Devuelve la posición de la última vez que aparece una palabra o carácter. Sintaxis: string.lastIndexOf(caracter, posición)
console.log(texto.lastIndexOf("i"));
console.log(texto.lastIndexOf("a", 50));

// Método search(): Devuelve la posición de un caracter en una cadena de texto. Sintaxis: string.search(caracter)
console.log(texto.search("pertenece"));