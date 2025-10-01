// CONGELAR OBJETOS EN JAVASCRIPT

const producto = {
    propiedad1: `valor1`,
    propiedad2: `valor2`,
    propiedad3: `valor3`,
}

// Método Object.freeze() congela un objeto, previniendo que puedan añadirse nuevas propiedades al mismo (Sintaxis: Object.freeze(obj))
Object.freeze(producto)

// Modificar una propiedada
producto.propiedad1 = `123456789`

// añadir una nueva propiedad
producto.propiedad4 = `valor4`
console.log(producto);

// elminar una propiedad
delete producto.propiedad3
console.log(producto);

// El método Object.isFrozen() determina si un objeto está congelado
console.log(Object.isFrozen(producto))