// SELLAR OBJETOS EN JAVASCRIPT

const producto = {
    propiedad1: `valor1`,
    propiedad2: `valor2`,
    propiedad3: `valor3`,
}

const {propiedad1, propiedad2, propiedad3} = producto
console.log(propiedad1);
console.log(propiedad2);
console.log(propiedad3);

// Método Object.seal(): sella un objeto, previniendo que puedan añadirse nuevas propiedades al mismo (Sintaxis: Object.seal(obj))
Object.seal(producto)

// Modificar una propiedada
producto.propiedad1 = `123456789`

// añadir una nueva propiedad
producto.propiedad4 = `valor4`
console.log(producto);

// elminar una propiedad
delete producto.propiedad3
console.log(producto);

// Método Object.isSealed(): comprueba si el objeto está sellado
console.log(Object.isSealed(producto))