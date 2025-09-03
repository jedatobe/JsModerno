// ITERADORES DE OBJETOS

const tablet = {
    referencia: 912345678,
    dimensiones: "10.2 pulgadas",
    memoria: "64GB",
    precio: 300,
}

// Object.keys(): devuelve un array con los nombres de las propiedades de un objeto. (Sintaxis: Object.keys(obj))
console.log(Object.keys(tablet));

// Object.values(): devuelve un array con los valores correspondientes a las propiedades de un objeto. (Sintaxis: Object.values(obj))
console.log(Object.values(tablet));

// Object.entries(): devuelve un array de las claves y valores de un objeto dado. (Sintaxis: Object.entries(obj))
console.log(Object.entries(tablet));