// DESESTRUCTURACIÓN DE ARREGLOS EN JAVASCRIPT

// JS clásico
// const producto = ["tablet", "laptop", "desktop", "monitor", "teclado", "mouse"];
// const tablet = producto[0]
// const laptop = producto[1]
// const desktop = producto[2]

// console.log(producto);
// console.log(tablet);
// console.log(laptop);
// console.log(desktop);

// JS Moderno (Destructuración)
const producto = ["tablet", "laptop", "desktop", "monitor", "teclado", "mouse"];
const [primero, segndo, tercero] = producto

console.log(producto);
console.log(primero);
console.log(segndo);
console.log(tercero);

// Asignación separada de la declaración
// JS clásico
// let frutas, frutas2
// frutas = 'kiwi'
// frutas2 = 'mango'

// console.log(frutas);
// console.log(frutas2);

// JS Moderno (Destructuración)
let frutas, frutas2
[frutas, frutas2] = ['kiwi', 'mango']
console.log(frutas);
console.log(frutas2);

// Valores predeterminados
let nombre, apellido
[nombre, apellido = 'smith'] = ['Meghan']
console.log(nombre);
console.log(apellido);

// Intercambio de variables
// JS clásico
// let a = 10
// let b = 30
// let auxiliar = a
// a = b
// b = auxiliar
// console.log(a);
// console.log(b);

// JS Moderno (Destructuración)
let a = 10;
let b = 30;
[a, b] = [b, a];
console.log(a);
console.log(b);

// OPERADOR SPREAD Y SINTAXIS EL RESTO

// Operador Spread en JS

// Expandir listas de argumentos

 // Sintaxis del RESTO

// Saltar el Valor en un arreglo

// DESESTRUCTURAR ARREGLOS ANIDADOS