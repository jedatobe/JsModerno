// CADENAS DE TEXTO

// Comillas siumples
let simples = 'Ejemplo de strings con comillas simples';

// Comillas dobles
let dobles = "Ejemplo de strings con comillas dobles";

// Acento grave o Backticks
let backticks = `Ejemplo de strings con backticks`;

// let dobles2 = 'Ejemplo de strings con comillas dobles";
// console.log(dobles2); // No podemos comenzar un texto con comillas simples y cerrar con comillas dobles

// Si el texto tiene en su interior comillas simples, en los extremos debemos utilizar comillas dobles
let simplesDoble = "Por favor presiona el botón 'Continuar' ";
console.log(simplesDoble);

// Caracteres de escape
let listaInvitados = 'Invitados: \n Sophie \n Thomas \n Millie \n Rick';
console.log(listaInvitados);

// Plantillas literales
let listadoPaises = `Países:
- Argentina
- Canadá
- Colombia
- España
-Estados Unidos de América
- México
- Perú
-República Domnicana`;
console.log(listadoPaises);

// Concatenar cadenas texto (JS clásico)
let frase1 = "frase";
let frase2 = "concatenada";
console.log("Esta" + " " + frase1 + " " + "está" + " " + frase2);

let texto = "Mi nombre es ";
texto+= "Orlando";
console.log(texto);

// Interpolación de expresiones
let frase3 = "frase";
let frase4 = "concatenada";
console.log(`Esta ${frase3} también está ${frase4}`);

let a = 5;
let b = 10;
console.log(`La suma de a+b es igual a ${a+b}`);