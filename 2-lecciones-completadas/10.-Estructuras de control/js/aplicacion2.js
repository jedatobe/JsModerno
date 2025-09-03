// OPERADORES DE COMPARACIÓN CON SENTENCIAS IF...ELSE

// Operador de igualdad
const nombreUsuario = "Orlando";
if(nombreUsuario == false){
    console.log('Debes ingresar tu nombre de usuario para poder acceder a este sitio web.');
} else {
    console.log('Tu nombre de usuario está guardado en nuestra base de datos.');
}

// Operador de identidad
const a = 5;
const b = 5;
if(a === b){
    console.log('a y b tienen los mismos valores y el mismo tipo de dato.');
} else {
    console.log('a y b tiene valores diferentes o diferentes tipos de dato.');
}

// Operador mayor o igual que
const edad = 21;
if(edad >= 18){
    console.log('Tu edad ha sido confirmada, puedes comprar entradas para asistir a este concierto.');
} else{
    console.log('No tienes la edad requerida para comprar entradas en este sitio web.');
}