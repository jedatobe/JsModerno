// COMPARAR OBJETOS

// Dos variables, dos objetos distintos con las mismas propiedades
const frutas = {
    nombre: "manzana",
}

const frutas2 = {
    nombre: "manzana",
}

console.log(frutas == frutas2);
console.log(frutas === frutas2);

// Dos variables, un sólo objeto
const hortalizas = {
    nombre: "zanahoria",
}

const hortalizas2 = hortalizas;

console.log(hortalizas == hortalizas2);
console.log(hortalizas === hortalizas2);