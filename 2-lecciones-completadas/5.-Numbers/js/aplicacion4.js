// MÉTODOS DE LOS NÚMEROS EN JAVASCRIPT (II)

// isFinite(): Determina si el valor es un número finito. (Sintaxis: Number.isFinite(value))
const num = 123456789;
console.log(Number.isFinite(num));
console.log(Number.isFinite(542310));
console.log(Number.isFinite(5 * 8));
console.log(Number.isFinite(20 / 0));
console.log(Number.isFinite("300"));
console.log(Number.isFinite(+"300"));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));

// isInteger(): Determina si el valor es un número entero. (Sintaxis: Number.isInteger(value))
console.log(Number.isInteger(455));
console.log(Number.isInteger(-99));
console.log(Number.isInteger(5 / 2));

// // isSafeInteger(): Determina si el valor pasado es un número entero. (Sintaxis: Number.isSafeInteger(value))
console.log(Number.isSafeInteger(8));
console.log(Number.isSafeInteger(12345678901234567890));
console.log(Number.isSafeInteger(Math.pow(2,53)-1));

// // isNaN(): Determina si el valor es un NaN. (Sintaxis:Number.isNaN(value))
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(0 / 0));
console.log(Number.isNaN(20));
console.log(Number.isNaN("Hola"));