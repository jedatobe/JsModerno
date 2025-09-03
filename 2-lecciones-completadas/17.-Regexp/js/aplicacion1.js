// COMPROBAR UN TEXTO

// Método test(): comprueba si una determinada cadena de texto está contenida en otra. (Sintaxis: RegExpObject.test(string))
const txt = "Los lunes en la mañana practico TaeKwondo y en la noche estudio poprtugués";
const buscar = /lunes/;
console.log(buscar.test(txt)); // true

// Comprobar en grupos de caracteres
const grupo1 = "Annabelle tiene 31 años";
const grupo2 = "B290";
const comprobar = /[aeiou]/;
console.log(comprobar.test(grupo1)); // true
console.log(comprobar.test(grupo2));

// Comprobar grupos homogéneos 
// /[a-d]/, es lo mismo que escribir /[abcd]/ y  /[1-5]/, es lo mismo que escribir /[12345]/
const num = "La dirección 1489 Fulton Street";
const buscar2 = /[1-5]/;
console.log(buscar2.test(num)); // true

/* Método exec:  busca la expresión en el texto, y devuelve el primer texto que concuerda con la expresión buscada.
Si la cadena de caracteres satisface el patrón, este método devuelve un array. Si no encuentra ninguna coincidencia, entonces devuleve null.
(Sintaxis:RegExpObject.exec(string)) */
const txt2 = "ABCDEFG";
const comprobar2 = /[a-g]/;
const txt3 = "abcdefg";
console.log(comprobar2.exec(txt2)); // null
console.log(comprobar2.exec(txt3)); // Devuelve un arreglo