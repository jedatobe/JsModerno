// COMPROBAR SI EXISTE UNA PROPIEDAD EN UN OBJETO

// Operador In (Sintaxis: propertyName in objectName)
const empleado = {
    nombre: "Rachel",
    edad: 29,
    numeroEmpleado: 12,
    profesion: "Digital Marketer",
}

// Comprobación
console.log("ssn" in empleado); // false
console.log("edad" in empleado); // true
console.log(profesion in empleado); // Error de referencia