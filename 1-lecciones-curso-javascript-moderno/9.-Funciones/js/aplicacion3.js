// HOISTING O ELEVACIÓN DE FUNCIONES Y VARIABLES

// Flujo normal
/* function miNombre(params) {
    console.log('Hola mi nombre es Daniel');
    
}
miNombre(); */

// Hoisting
// miNombre();

// function miNombre(params) {
//     console.log('Hola mi nombre es Daniel');    
// }

// // Función por expresión
// saludo(); // Error de referencia.
// const saludo = function (params) {
//     console.log('Bienvenidos al curso de Javascript');
    
// }

// El hoisting se aplica a las variables, pero solamente si se declaran con la palabra var
console.log(iniciarSesion); // Se obtiene un undefined
var iniciarSesion = 'Buenos días, la sesión ha sido iniciada correctamente'

// console.log(iniciarSesion2); Error de referencia, let y const no puede ser elevadas
// let iniciarSesion2 = 'Buenos días, la sesión ha sido iniciada correctamente'