//  MODIFICADORES O BANDERAS(FLAGS)

/*
g (Global): hace coincidir el patrón todas las veces posibles, aunque puede variar según el método.
i (IgnoreCase): ignora las mayúsculas y minúsculas.
m (Multiline): los caracteres ^ y $ pueden coincidir con caracteres multilínea.
s (Dotall): habilita el modo “dotall”, que permite que un punto coincida con el caracter de línea nueva \n
*/

const email = "ejemplo10@email.com";
const comprobar3 = /[^\s0-9A-Za-z]/g;
console.log(email.match(comprobar3)); // Devuelve @

const calcular = "11+22*(33/1)";
const comprobar4 = /[+|*|/]/g;
console.log(calcular.match(comprobar4)); // Devuelve +

const texto = "Para más información, consulta el Capítulo 3.4";
const verificar = /capítulo/i;
console.log(verificar.test(texto)); // true

const texto2 = "Para más información, consulta el Capítulo 3.4 y también el capítulo 9";
const verificar2 = /capítulo/gi;
console.log(texto2.match(verificar2));

const texto3 = `1er lugar: Bolton
2do lugar: Anderson
3er lugar: Smith`;
const verificar3 = /^\d/gm;
console.log(texto3.match(verificar3));

const texto4 = `Bienvenidos
al curso de ReactJS`;
const verificar4 = /Bienvenidos./s;
console.log(verificar4.test(texto4)); // true