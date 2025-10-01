// AÑADIR, MODIFICAR O ELIMINAR PROPIEDADES
const directorio = {
    nombre: 'Stevie',
    apellido: 'McMiller',
    'numero Empleado': 0980,
    profesion: 'Científico de datos'
}



// Modificar el valor de una propiedad
directorio[`numero Empleado`] = 10908

// Eliminar una propiedad de un objeto
delete directorio.profesion

// Añadir una nueva propiedad
directorio.pais = `Estado Unidos de América`

// Añadir propiedades al objeto después de haberlo creado
const producto = {}
producto.nombre = `Laptop`
producto.dimensiones = `17 pulgadas`
producto.color = `Negro`
producto['disco duro'] = `1TB`
producto.precio = 860

console.log(producto.nombre);
console.log(producto.dimensiones);
console.log(producto.color);
console.log(producto['disco duro']);
console.log(producto.precio);


console.log(directorio.nombre);
console.log(directorio.apellido);
console.log(directorio[`numero Empleado`]);
console.log(directorio.profesion);
console.log(directorio.pais);

// Remover propiedades del objeto
delete producto.dimensiones
console.log(directorio);