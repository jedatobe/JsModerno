// MÉTODOS DE LOS NÚMEROS EN JAVASCRIPT (III)

// parseInt(): Convierte una cadena de texto en un número entero. (Sintaxis: parseInt(string,[ radix]))
console.log(parseInt(`10`));
console.log(parseInt(` 10`));
console.log(parseInt(`-20`));
console.log(parseInt(`55.3`));
console.log(parseInt(`5 AÑOS`));
console.log(parseInt(`6,526`));
console.log(parseInt(`120$`));
console.log(parseInt(``));

// Convertir base numérica
console.log(parseInt(`1111`, 2));
console.log(parseInt(`010`, 8));
console.log(parseInt(`0xff`, 16));
console.log(parseInt(`2n9c`, 36));

// parseFloat(): Convierte una cadena de texto en un número decimal. (Sintaxis: parseFloat(string))
console.log(parseFloat(`20.5`));
console.log(parseFloat(` 3.1415 `));
console.log(parseFloat(`543e-5`));
console.log(parseFloat(`num.345`));
console.log(parseFloat(`1.2 3.4`));
console.log(parseFloat(Infinity));
