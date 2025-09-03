// CONGELAR OBJETOS EN JAVASCRIPT

const producto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3",
}

const {propiedad1, propiedad2, propiedad3} = producto;

console.log(propiedad1);
console.log(propiedad2);
console.log(propiedad3);

// Método Object.freeze() congela un objeto, previniendo que puedan añadirse nuevas propiedades al mismo (Sintaxis: Object.freeze(obj))
Object.freeze(producto);

// Modificar una propiedad
producto.propiedad1 = 123456789;

// Añadir una nueva propiedad
producto.propiedad4 = "valor4";
console.log(producto.propiedad4);

// Eliminar una propiedad
delete producto.propiedad3;
console.log(producto);

// El método Object.isFrozen() determina si un objeto está congelado
console.log(Object.isFrozen(producto));