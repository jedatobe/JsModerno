// CADENAS DE TEXTO

// Cómillas simples
let simples = 'Ejemplo de String con comillas simples'

// Cómillas dobre
let dobles = "Ejemplo de String con comillas dobles"

// Asento grave
let backticks = `Ejemplo de String con backticks`

// Plantilla literales
let listadoPaises = `Países:
- Argentina
- Canadá
- Colombia
- España
- Estado Unidos de America
- México`
console.log(listadoPaises);

// Concatenar cadenas de texto (JS clásico)
let frase1 = 'frase'
let frase2 = 'concatenada'
console.log('Esta ' + frase1 +' está '+ frase2);

let texto = 'Mi nombre es: '
texto += "Daniel Torres"
console.log(texto);

// Interpolacion de expresiones
let frase3 = 'frase'
let frase4 = 'concatenada'
console.log(`Esta ${frase3} también está ${frase4}`);

let a = 5
let b = 10
console.log(`La suma de a + b es: ${ a+b }`);
