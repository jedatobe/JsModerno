// HOISTING O ELEVACIÓN DE FUNCIONES Y VARIABLES

// Flujo normal
// function miNombre(){
//     console.log("Hola mi nombre es Orlando");
// }
// miNombre();

// Hoisting
miNombre(); // Llamamos a la función antes de declararla

function miNombre(){
    console.log("Hola mi nombre es Orlando");
}

// Función por expresión
// saludo(); // Error de referencia
// const saludo = function(){
// console.log("Bienvenidos al curso de JavaScript");
// }

// El hoisting se aplica a las variables, pero solamente si se declaran con la palabra var
console.log(iniciarSesion); // Se obtiene un undefined
var iniciarSesion = "Buenos días, la sesión ha sido iniciada correctamente";

// console.log(iniciarSesion2); Error de referencia, let y const no pueden ser elevadas
// let iniciarSesion2 = "Buenos días, la sesión ha sido iniciada correctamente";