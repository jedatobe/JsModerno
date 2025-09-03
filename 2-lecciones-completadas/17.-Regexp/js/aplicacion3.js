// ESCAPANDO CARACTERES ESPECIALES

const texto = "Capítulo 5.12";
const texto2 = "Capítulo 512";
const comprobar = /\d\.\d\d/;
console.log(comprobar.test(texto));
console.log(comprobar.test(texto2));

const texto3 = "verdadero/falso";
const comprobar2 = /[/]/;
console.log(comprobar2.test(texto3));