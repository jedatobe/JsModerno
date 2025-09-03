// LOOKAHEAD Y LOOKBEHIND

// Lookahead,significa "buscar X, pero consideralo una coincidencia solamente si es seguida por Y". (Sintaxis: X(?=Y))
const texto = "SmartTV de 42 pulgadas, con un precio de 442€";
const comprobar = /\d+(?=€)/g;
console.log(texto.match(comprobar));

// Lookahead negativo, que significa "busca X, pero solo si no es seguido por Y". (Sintaxis: X(?!Y))
const texto2 = "SmartTV de 42 pulgadas, con un precio de 442€";
const comprobar2 = /\d+\b(?!€)/g;
console.log(texto2.match(comprobar2));

// Lookbehind, significa "coincide X, pero solo si hay Y antes de él".(Sintaxis: (?<=Y)X)
const texto3 = "Un pavo cuesta $40";
const comprobar3 = /(?<=\$)\d+/g;
console.log(texto3.match(comprobar3));

// Lookbehind negativo, "coincide X, pero solo si no hay Y antes de él". (Sintaxis: (?<!Y)X)
const texto4 = "2 pavos cuesta $80";
const comprobar4 = /(?<!\$)\b\d+/g;
console.log(texto4.match(comprobar4));