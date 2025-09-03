// OPERACIONES BÁSICAS CON EL OBJETO SET

// Transformar un array en un Set
const arreglo = ["valor1", "valor2", "valor3"];
const conjunto = new Set(arreglo);
console.log(conjunto);

// Transformar un Set en un arreglo
const frutas = new Set();
frutas.add("Kiwi");
frutas.add("Mango");
frutas.add("Durazno");
frutas.add("Ciruela");
frutas.add("Manzana");
console.log([...frutas]);

// Eliminar elementos duplicados de un Array
const num = [34, 14, 9, 43, 34, 31, 9, 90, 9, 23];
console.log([...new Set(num)]);

// Relación con Strings
const texto = new Set("Animal");
console.log(texto);

const texto2 = new Set("animal");
console.log(texto2);