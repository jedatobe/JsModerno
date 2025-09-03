// PROPIEDADES DE LOS NÚMEROS EN JAVASCRIPT

// .MAX_VALUE: El valor máximo que es posible representar en Javascript (Sintaxis:  Number.MAX_VALUE)
const valorMaximo = Number.MAX_VALUE;
console.log(valorMaximo);

const valorMaximo2 = 500;
console.log(valorMaximo2.MAX_VALUE); // Devuelve undefined

// .MIN_VALUE: El valor mínimo que es posible representar en Javascript (Sintaxis : Number.MIN_VALUE)
const valorMinimo = Number.MIN_VALUE;
console.log(valorMinimo);

// .EPSILON: un número que se suele utilizar para representar cantidades matemáticas muy pequeñas (Sintaxis: Number.EPSILON)
const a = Number.EPSILON;
console.log(a);

// .MAX_SAFE_INTEGER: es el valor máximo para realizar cálculos con seguridad en Javascript (Sintaxis: Number.MAX_SAFE_INTEGER)
const b = Number.MAX_SAFE_INTEGER;
console.log(b);

// .MIN_SAFE_INTEGER: es el valor mínimo para realizar cálculos con seguridad en Javascript (Sintaxis: Number.MIN_SAFE_INTEGER)
const c = Number.MIN_SAFE_INTEGER;
console.log(c);

// .POSITIVE_INFINITY: Representa el infinito positivo (Sintaxis: Number.POSITIVE_INFINITY)
const positivoInfinito = Number.POSITIVE_INFINITY
console.log(positivoInfinito);

// .NEGATIVE_INFINITY: Representa el infinito negativo (Sintaxis: Number.NEGATIVE_INFINITY)
const negativoInfinito = Number.NEGATIVE_INFINITY;
console.log(negativoInfinito);

// .NaN: Representar valores numéricos que son imposibles de representar como número (Sintaxis: Number.NaN)
const noEsUnNumero = Number.NaN;
console.log(noEsUnNumero);

console.log(typeof NaN);