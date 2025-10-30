// OPERADOR CONDICIONAL (TERNARIO)

// Sintaxis: (condición) ? expr1 : expr2
const edad = 21;
const persona = (edad >= 18) ? "Tienes edad para votar." : "No tienes la edad legal requerida para votar.";
console.log(persona);

// Evaluaciones ternarias múltiples
const primeraComprobacion = true;
const segundaComprobacion = true;
const acceso = (primeraComprobacion) ? "Acceso permitido" : segundaComprobacion ? "Hubo un problema, inténtalo de nuevo" : "Usuario no registrado, acceso denegado";
console.log(acceso);