// // EVALUAR BOOLEANOS

// Mediante estructuras de control
const iniciarSesion = true;

if(iniciarSesion) {
    console.log("La sesión ha sido iniciada correctamente")
} else {
    console.log(" La sesión no ha podido ser iniciada")
}

// Mediante el operador ternario
const usuarioRegistrado = true;
console.log(usuarioRegistrado ? "Este usuario está registrado" : "Este usuario no existe en nuestra base de datos");