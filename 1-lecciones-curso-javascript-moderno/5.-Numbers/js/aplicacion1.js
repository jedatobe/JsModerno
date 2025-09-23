// FORMAS DE CREAR NÚMEROS

// Notación literal
let numeroEntero = 5
console.log(numeroEntero);
let numeroDecimal = 15.86
console.log(numeroDecimal);

// Notación con objetos (No recomendada)
let numeroEnteroObjeto = new Number(5)
console.log(numeroEnteroObjeto);
let numeroDecimalObjeto = new Number(15.86)
console.log(numeroDecimalObjeto);


// NÚMEROS HEXADECIMALES, BINARIOS Y OCTALES
// Números hexadecimales
let hexadecimal = 0xff
console.log(hexadecimal);

//  Números octales
let octal = 0o10
console.log(octal);

//  Números binaros
let binaro = 0b11111111
console.log(binaro);

// FORMAS DE ESCRIBIR NÚMEROS EN JS
// Simplicar valores grandes mediante guiones bajos
let milMillones = 1_000_000_000
console.log(milMillones);

// Simplicar mediante notación científica
let dosMilMillones = 2e9
console.log(dosMilMillones);

let microsegundos = 1e-6
console.log(microsegundos);

// TRABAJAR CON NÚMEROS Y CADENAS DE TEXTO
let a = 5
let b = 10
console.log(a + b);

let c = '10'
let d = '20'
console.log(c + d);

let e = 30
let f = '40'
console.log(e + f);

let g = '10'
let h = '2'
console.log(g / h);
console.log(g * h);
console.log(g - h);
console.log(g ** h);
