// MÉTODOS DE LOS NÚMEROS EN JAVASCRIPT

// toExponential(): Convierte el número a notación exponencial. (Sintaxis: number.toExponential(x)
let num = 5.43210;
console.log(num.toExponential());
console.log(num.toExponential(2));
console.log(num.toExponential(3));
console.log(typeof num.toExponential());

// toFixed(): redondea el número a n dígitos después del punto decimal. (Sintaxis: number.toFixed(x))
let redondear = 10.9448659;
console.log(redondear.toFixed());
console.log(redondear.toFixed(3));
console.log(redondear.toFixed(1));
console.log(redondear.toFixed(10));
console.log(typeof +redondear.toFixed());

//  Cálculos imprecisos
let suma = 0.1 + 0.2;
console.log(suma.toFixed(1));

// toPrecision(): Definir la precisión de un número. (Sintaxis: number.toPrecision(x))
let precision = 10.9448659;
console.log(precision.toPrecision());
console.log(precision.toPrecision(5));
console.log(precision.toPrecision(3));
console.log(precision.toPrecision(2));

// toPrecision() con números decimales más pequeños
let precision2 = 0.0015543;
console.log(precision2.toPrecision());
console.log(precision2.toPrecision(3));
console.log(precision2.toPrecision(2));

// toString(): Convierte un número en una cadena de texto. (Sintaxis: number.toString(radix))
let txt = 255;
console.log(txt.toString());
console.log(txt.toString(2));
console.log(txt.toString(8));
console.log(txt.toString(16));

let txt2 = 123456;
console.log(txt2.toString(36));