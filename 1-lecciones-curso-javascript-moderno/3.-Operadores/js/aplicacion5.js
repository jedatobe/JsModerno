// OPERADORES LÓGICOS

// Operador lógico OR
let valor1 = true
let valor2 = false
console.log(valor1 || valor1); // true
console.log(valor1 || valor2); // true
console.log(valor2 || valor1); // true
console.log(valor2 || valor2); // false

// Operador Or con tipos de datos distintos a los booleanos (lógica de JS clásica)
let a = 8
let b = 6
console.log(a == 8 || b == 6);   // true
console.log(a == 8 || b == 12);  // true
console.log(a == 10 || b == 6);  // true
console.log(a == 20 || b == 30); // false

// Operador Or con tipos de datos distintos a los booleanos (lógica de JS moderno)
console.log(8 || 6);         // 8
console.log(8 || undefined); // 8
console.log(null || 6);      // 6
console.log(0 || -1);        // -1

// Multiples valores aplicados al operador OR
let nombre
let apellido
let nombreusuario = `admin`
console.log(nombre || apellido || nombreusuario);
