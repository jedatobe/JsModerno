// CONJUNTOS Y RANGOS DE CARACTERES

/*
[]	Rango de carácteres: cualquiera de los caracteres del interior de los corchetes.
[^] Exclusión de rangos: encuentra caracteres que no están dentro del interior de los corchetes. Significa "cualquier caracter excepto los dados".
| Alternancia: establece una alternativa. Significa "O", es decir, lo que está a la izquierda o lo que está a la derecha.
*/

const color = "El color hexadecimal #0b1a03 representa una tonalidad de verde";
const comprobar = /#[0-9A-Fa-f]/;
console.log(comprobar.test(color)); // true

const telefono = "1-555-555-5555";
const comprobar2 = /[\t\r\n]/;
console.log(comprobar2.test(telefono)) // false

const email = "ejemplo10@email.com";
const comprobar3 = /[^\s0-9A-Za-z]/;
console.log(email.match(comprobar3)); // Devuelve @

const calcular = "11+22*(33/1)";
const comprobar4 = /[+|*|/]/;
console.log(calcular.match(comprobar4)); // Devuelve +