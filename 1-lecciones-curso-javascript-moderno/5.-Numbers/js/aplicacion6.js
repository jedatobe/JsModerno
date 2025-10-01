// PROPIEDADES DEL OBJETO MATH

// // Math.E: Número e o constante de Euler, base de los logaritmos neperianos.
// console.log(Math.E);

// // Math.PI: Numero pi, que relaciona la circunferencia con su diámetro.
// console.log(Math.PI);

// //Math.SQRT2: Raíz cuadrada de 2.
// console.log(Math.SQRT2);

//  // Math.SQRT1_2: Raíz cuadrada de un medio.
// console.log(Math.SQRT1_2);

// // Math.LN2: Logaritmo neperiano de 2.
// console.log(Math.LN2);

// // Math.LN10: Logaritmo neperiano de 10.
// console.log(Math.LN10);

// // Math.LOG2E: Logaritmo en base 2 de e.
// console.log(Math.LOG2E);

// // Math.LOG10E: Logaritmo en base 10 de e.
// console.log(Math.LOG10E);

// MÉTODOS DEL OBJETO MATH
// Math.pow(): Devuelve n elevado a la potencia power dada. (Sintaxis: Math.pow(n, power))
console.log(Math.pow(8, 4));

// Math.sqrt(): Obtiene la raíz cuadrada del numero pasado como argumento (Sintaxis: Math.sqrt(num))
console.log(Math.sqrt(144));
console.log(Math.sqrt(200));

// Math.abs(): Valor absoluto, ignorando el signo del número y transformándolo siempre en positivo. (Sintaxis: Math.abs(num))
console.log(Math.abs(-349));

// Math.round(): Devuelve el valor del número dado redondeado al entero más cercano. (Sintaxis: Math.round(x))
console.log(Math.round(49.34));
console.log(Math.round(49.56));

// Math.ceil(): Devuelve el entero mayor o igual más próximo a un número dado. (Sintaxis: Math.ceil(x)) Redondeo por exceso.
console.log(Math.ceil(1.4));
console.log(Math.ceil(1.6));
console.log(Math.ceil(5.1));

//  Math.floor(): Devuelve el entero entero inmediatamente inferior a un número dado. (Sintaxis: Math.floor(x)) Redondeo por defecto
console.log(Math.floor(1.4));
console.log(Math.floor(1.6));
console.log(Math.floor(5.1));
console.log(Math.floor(-5.9));

// Math.max(): Devuelve el número mayor de entre una cantidad arbitraria de argumentos. (Sintaxis:  Math.max(a, b, c...))
console.log(Math.max(3, 8, 12, -9, 0.5, 0));

// Math.min(): Devuelve el número menor de entre una cantidad arbitraria de argumentos. (Sintaxis:  Math.min(a, b, c...))
console.log(Math.min(3, 8, 12, -9, 0.5, 0));

// Math.random(): Devuelve un número aleatorio entre 0 y 1, no incluyendo 1.  (Sintaxis: Math.random())
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10) + 1);

// Math.log(x): Devuelve el logaritmo natural en base e de x. (Sintaxis:  Math.log(x))
console.log(Math.log(4));
console.log(Math.log(-2));
console.log(Math.log(0));