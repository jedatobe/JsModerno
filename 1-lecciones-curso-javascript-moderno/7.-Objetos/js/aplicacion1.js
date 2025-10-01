// OBJETOS EN JAVASCRIPT

// Objeto literal, usando pares de llaves {...}
const objeto = {}

// Constructor de objeto utilizando la palabra reservada new (No recomendada)
const objeto2 = new Object()

// Objeto con propiedades
const usuario = {
    nombre: 'Daniel Torres',
    edad: 36,
    usuarioDestacado: true,
    'usuario registrado': true,
}

// Objeto con propiedades utilizando la palabra reservada new
/* const usuario2 = new Object()
usuario2.nombre = "Daniel Torres"
usuario2.edad = 36
usuario2.usuarioDestacado = true */

// ACCEDER A LAS PROPIEDADES

// Notación con puntos (recomendada)
console.log(usuario.nombre)
console.log(usuario.edad)
console.log(usuario.usuarioDestacado)

// Notacion con corchetes
console.log(usuario[`nombre`])
console.log(usuario[`edad`])
console.log(usuario[`usuarioDestacado`])
console.log(usuario[`usuario registrado`])

// El nombre de un objeto y el de sus propiedades son sensibles a mayúsculas y minúsculas
const persona = {
    nombre: 'Daniel',
}

const PERSONA = {
    NOMBRE: 'DANIEL',
}

console.log(persona.nombre);
console.log(PERSONA.NOMBRE);

// Se pueden utilizar palabras reservadas como nombres de las propiedades
const objeto3 = {
    let: 1,
    NaN: 2,
    Infinity: 'Hola',
}

console.log(objeto3.let)
console.log(objeto3.NaN)
console.log(objeto3.Infinity)