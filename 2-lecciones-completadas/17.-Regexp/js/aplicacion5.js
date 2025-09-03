// ANCLAS

/*
^ Acento circunflejo: representa el inicio de la cadena. Significa "empieza por".
$ Signo de dólar: representa el final de la cadena de caracteres o el final de la línea. Significa "acaba en".
\b Límite de palabra: límite de una palabra separada por espacios, puntuación o inicio/final.
\B Sin límite de palabra: el texto no está delimitado por una palabra, puntuación o string.
*/

const texto = "Buenos días";
const texto2 = "buenos días";
const comprobar = /^B/;
console.log(comprobar.test(texto)); // true
console.log(comprobar.test(texto2)); // false

const texto3 = "ReactJS es una librería de JavaScript";
const texto4 = "Bienvenidos al curso de Java";
const comprobar2 = /JavaScript$/;
console.log(comprobar2.test(texto3)); // true
console.log(comprobar2.test(texto4)); // false

const texto5 = "Un círculo es una forma";
const texto6 = "Esto es un párrafo";
const comprobar3 = /fo\b/;
console.log(comprobar3.test(texto5)); // false
console.log(comprobar3.test(texto6)); // true

const num = "1 23 456 78 9";
const num2 = "123456789";
const comprobar4 = /\b\d{2}\b/;
console.log(comprobar4.test(num)); // true
console.log(comprobar4.test(num2)); // false

const comprobar5 = /\B\d{2}\B/;
console.log(comprobar5.test(num2)); // true