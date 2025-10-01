// // EVALUAR BOOLEANOS

// Mediante estructuras de control
const iniciarSession = true
if (iniciarSession) {
    console.log(`La sessión ha sido iniciada correctamente`);
} else {
    console.log(`La sessión NO ha podido ser iniciada correctamente`);
}

// Mediante el operador ternario
const usuarioRegistrado = true
console.log((usuarioRegistrado) ? `Este usuario está registrado` : `Este usuario no existe en nuestra base de datos` );
