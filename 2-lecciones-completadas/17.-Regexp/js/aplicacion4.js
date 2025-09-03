// CUANTIFICADORES

/*
* El caracter puede no aparecer o aparecer muchas veces, es decir, el caracter puede repetirse muchas veces o estar ausente.
+ El caracter puede aparecer 1 o más veces.
? El caracter puede aparecer una vez o no aparecer. Significa “cero o uno”. (En otras palabras, es opcional).
{n} Recuento exacto: el caracter aparece n veces.
{n,m} Rango: el caracter aparece de n a m veces, es decir, establece un rango.
{n,} Rango sin límite superior: el caracter aparece n o más veces.
*/

const texto = "JavaScript";
const comprobar = /a*/;
console.log(comprobar.test(texto)); // true

const telefono = "1-555-555-0105";
const comprobar2 = /4+/;
console.log(comprobar2.test(telefono)); // false

const num = "1 100 1000";
const comprobar3 = /9?000/;
console.log(comprobar3.test(num)); // true

const texto2 = "ESCMASCRIPT 2021";
const comprobar4 = /\d{4}/;
console.log(comprobar4.test(texto2)); // true

const texto3 = "1429 Fulton street";
const comprobar5 = /\d{2,4}/;
console.log(comprobar5.test(texto3)); // true

const texto4 = "Lenguaje HTML5";
const comprobar6 = /e{1,}/;
console.log(comprobar6.test(texto4)); // true