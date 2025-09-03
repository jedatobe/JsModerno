// DESESTRUCTURACIÓN DE OBJETOS (Sintaxis: const { var1, var2 } = { var1: …, var2… }

// Sintaxis de JS clásico
// const tablet = {
//     referencia: 0912345678,
//     dimensiones: "10.2 pulgadas",
//     memoria: "64GB",
//     precio: 300,
// }

// // Extraer datos del objeto
// const referencia = tablet.referencia;
// const dimensiones = tablet.dimensiones;
// const memoria = tablet.memoria;
// const precio = tablet.precio

// console.log(referencia);
// console.log(dimensiones);
// console.log(memoria);
// console.log(precio);

// Sintaxis de JS Moderno
const tablet = {
    referencia: 0912345678,
    dimensiones: "10.2 pulgadas",
    memoria: "64GB",
    precio: 300,
}

// Extraer datos del objeto
const {referencia: r, dimensiones: d, memoria: m, precio: p} = tablet;

console.log(r);
console.log(d);
console.log(m);
console.log(p);