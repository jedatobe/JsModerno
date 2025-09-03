// MÉTODOS Y PROPIEDADES DE LOS STRINGS

// Propiedad Length: número de caracteres que contiene un texto (Sintaxis: string.length)
let caracteres = "Bienvenidos al curso de JavaScript Moderno";
console.log(caracteres.length);

// MÉTODOS PARA MODIFICAR EL CONTENIDO DE UN STRING
// Método .concat(): concatena cadenas de texto (Sintaxis: string.concat())
let unir1 = "Hola a todos,";
let unir2 = "vamos a comenzar la lección";
let union = unir1.concat(" ", unir2);
console.log(union);

// Método .repeat(): repite un texto un determinado número de veces (Sintaxis: string.repeat(count))
let repeticion = "Buenos días! ";
console.log(repeticion.repeat(5));

// Método toUpperCase(): Cambia a mayúsculas (Sintaxis: string.toUpperCase())
let convertirMayusculas = "Bienvenidos al curso de JavaScript Moderno";
console.log(convertirMayusculas.toUpperCase());

// Método toLowerCase(): Cambia a minúsculas (Sintaxis: string.toLowerCase())
let convertirMinusculas = "Bienvenidos al curso de JavaScript Moderno";
console.log(convertirMinusculas.toLowerCase());

// Método trimStart(): Elimina los espacios en blanco al principio de la cadena de texto (Sintaxis: string.trimStart())
// Método trimEnd(): Elimina los espacios en blanco al final de la cadena de texto (Sintaxis: string.trimEnd())
// Método trim(): Elimina los espacios en blanco en ambos extremos de la cadena de texto (Sintaxis: string.trimS())
let recortar = "                      info@email.com                            ";
console.log(recortar.trim());

// Método replace(): Reemplaza fragmentos de una cadena de texto (Sintaxis: string.replace(searchValue, newValue))
let reemplazar = "La señora Graham vive en una casa de color azul y tiene un automóvil de color azul";
// console.log(reemplazar.replace("azul", "verde"));

// Método replaceAll()
console.log(reemplazar.replaceAll("azul", "verde"));