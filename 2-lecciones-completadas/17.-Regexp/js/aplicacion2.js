// CLASES DE CARACTERES

/*
.: es una clase de caracteres especial que coincide con “cualquier carácter excepto una nueva línea”.
/\t/: representa un tabulador.
/\r/: representa el "retorno de carro".
/\n/: representa una "nueva línea".
/\e/: representa la tecla "Esc" o "Escape".
/\d/: representa un dígito del 0 al 9.
/\D/: representa cualquier caracter que no sea un dígito del 0 al 9, por ejemplo, una letra..
/\w/: representa cualquier carácter alfanumérico (incluidos los guiones bajos).
/\W/: representa cualquier carácter no alfanumérico, por ejemplo, una letra no latina o un espacio.
/\s/: contiene algunos de los caracteres que definen espacios en blanco, como espacios, tabulaciones \t, líneas nuevas \n y algunos otros caracteres raros.
/\S/: representa cualquier caracter que no sea un espacio en blanco, por ejemplo, una letra.
*/
const caracteres = "Lenguaje HTML5";
const verificar = /H...5/;
const verificar2 = /H...5./;
console.log(verificar.test(caracteres)); // true
console.log(verificar2.test(caracteres)); // false

const nuevaLinea = `Lenguaje
CSS3`;
const verificar3 = /.CSS3/;
console.log(verificar3.test(nuevaLinea)); // false

const num = 32;
const num2 = "treinta y dos";
const comprobar = /\d/;
const comprobar2 = /\D/;
console.log(comprobar.test(num)); // true
console.log(comprobar.test(num2)); // false

console.log(comprobar2.test(num)); // false
console.log(comprobar2.test(num2)); // true

const texto = "El día está soleado";
const buscar = /\w/;
console.log(buscar.test(texto)); // true

const texto2 = " ";
const buscar2 = /\W/;
console.log(buscar2.test(texto2)); // true

const espacio = "\n";
const espacio2 = "";
const patronExpresion = /\s/;
console.log(patronExpresion.test(espacio)); // true
console.log(patronExpresion.test(espacio2)); // false

const espacio3 = "a";
const patronExpresion2 = /\S/;
console.log(patronExpresion2.test(espacio3)); // true