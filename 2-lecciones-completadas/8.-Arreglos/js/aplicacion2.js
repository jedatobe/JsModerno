// AÑADIR O ELIMINAR ELEMENTOS

const animalesMarinos = ["Estrella de mar", "Pulpo", "Delfín", "Manatí",];
console.log(animalesMarinos);

// Método push(): añade uno o más elementos al final del arreglo. (Sintaxis: arr.push(element1[, ...[, elementN]]))
console.log(animalesMarinos.push("Cangrejo ermitaño"));
console.log(animalesMarinos.push("Calamar", "Ballena azul"));

// Método unshift(): agrega uno o más elementos al inicio del array. (Sintaxis: arr.unshift(elemento1[, ...[, elementoN]]))
console.log(animalesMarinos.unshift("Tiburón blanco"));
console.log(animalesMarinos.unshift("Lenguado común", "Cangrejo guisante"));

// Método pop(): elimina el último elemento de un array. (Sintaxis: arr.pop())
console.log(animalesMarinos.pop());

// Método shift(): elimina el primer elemento de un array. (Sintaxis: arr.shift())
console.log(animalesMarinos.shift());