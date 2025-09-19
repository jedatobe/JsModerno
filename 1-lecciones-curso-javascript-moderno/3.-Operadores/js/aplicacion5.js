// OPERADORES LÓGICOS

// Operador lógico OR
/* let valor1 = true
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

let valor3
let valor4 = null
let valor5 = 0
console.log(valor3 || valor4 || valor5); // Si todos son falsos devuelve el valor del último operando

let c = 1
let d = 10
let e = 20
console.log(c || d || e); // Si todos son verdaderos devuelve el valor del primer operando */

// Operador lógico AND
/* let f = true
let g = false
console.log(f && f); // true
console.log(f && g); // false
console.log(g && f); // false
console.log(g && g); // false

// Operador AND con tipos de datos distintos a boleanos
console.log(0 && undefined);//0 si ambos operando son falsos devuelve el primer operando
console.log(null && 5);     //0 devuelve el primer operando: null
console.log(12 && -1);      //0 devuelve el segundo operando: -1
console.log(20 && 25);      //0 si ambos operando son verdaderos devuelve el segundo operando: 25

//  Multiples valores aplicados al operador AND
console.log(1 && 2 && null);        // retorna el primer valor false: null
console.log(0 && -1 && undefined);  // retorna el primer valor false: 0
console.log(1 && 2 && 3);           // retorna el último valor verdadero: 3 */

/* // Operador NOT
let h = 100
let i = 50
console.log(!(h == i)); // true */

// Operador ternario
let edad = 21
let evaluar = (edad >= 18) ? `Eres mayor de edad` : `No eres mayor de edad`
console.log(evaluar);
