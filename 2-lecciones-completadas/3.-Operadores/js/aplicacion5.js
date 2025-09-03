// OPERADORES LÓGICOS

// // Operador lógico Or (||)
// let valor1 = true;
// let valor2 = false;
// console.log(valor1 || valor1); // true
// console.log(valor1 || valor2); // true
// console.log(valor2 || valor1); // true
// console.log(valor2 || valor2); // false

// // Operador OR con tipos de datos distintos de los booleanos (Lógica clásica)
// let a = 8;
// let b = 6;
// console.log(a == 8 || b == 6); // true
// console.log(a == 8 || b == 12); // true
// console.log(a == 10 || b == 6); // true
// console.log(a == 20 || b == 30); // false

// // Operador OR con tipos de datos distintos de los booleanos (Lógica de JS moderno)
// console.log(8 || 6); // Devuelve el primer valor verdadero: 8
// console.log(8 || undefined); // Devuelve 8
// console.log(null || 6); // Devuelve 6
// console.log(0 || -1); // Devuelve -1, el segundo valor falso

// // Múltiples valores aplicados al operador OR
// let nombre;
// let apellido;
// let nombreUsuario = "admin";
// console.log(nombre || apellido || nombreUsuario); // Devuelve el valor del operando verdadero

// let valor3;
// let valor4 = null;
// let valor5 = 0;
// console.log(valor3 || valor4 || valor5); // Si todos son falsos, devuelve el valor del último operando

// let c = 1;
// let d = 10;
// let e = 20;
// console.log(c || d || e); // Si todos son verdaderos, devuelve el valor del primero

// Operador lógico And (&&)
// let f = true;
// let g = false;
// console.log(f && f); // true
// console.log(f && g); // false
// console.log(g && f); // false
// console.log(g && g); // false

// // Operador AND con tipos de datos distintos de los booleanos
// console.log(0 && undefined); // Si ambos operandos son falsos, devuelve el valor del prtimero: 0
// console.log(null && 55); // Devuelve el primer operando: null
// console.log(12 && -1); // Devuelve el segundo operando: -1
// console.log(20 && 25); // Si ambos operandos son verdaderos, devuelve el valor del segundo operando: 25

// // Múltiples valores aplicados al operador AND
// console.log(1 && 2 && null); // Devuelve el primer valor falso: null
// console.log(0 && -1 && undefined); // Devuelve 0
// console.log(1 && 2 && 3); // Devuelve el último valor verdadero: 3

// Operador Not (!)
// let h = 100;
// let i = 50;
// console.log(!(h == i)); // true

// Operador Ternario
let edad = 21;
let evaluar = (edad >= 18) ? "Eres mayor de edad" : "No eres mayor de edad";
console.log(evaluar);