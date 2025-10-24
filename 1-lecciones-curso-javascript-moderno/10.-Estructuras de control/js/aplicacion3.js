// OPERADORES LÓGICOS CON SENTENCIAS IF...ELSE

// Operador OR ||
const a = 5;
const b = 12;
if(a == 5 || b == 2){
    console.log('Los valores han sido comprobados, puedes ingresar a este sitio web.');
} else {
    console.log('Los valores no han podido ser confirmados, no puedes ingresar a este sitio web.');
}

// Operador AND &&
const edad = 16;
const pais = "USA";
if(edad >= 16 && pais == "USA") {
    console.log('Puedes obtener un permiso para conducir.');
} else {
    console.log('No tienes la edad legal requerida para obtener un permiso para conducir.');
}
// Operador NOT
const soleado = false;
const temperatura = 60;
if(!(soleado == true || temperatura >= 80)) {
    console.log('El día de hoy está agradable y soleado.');
} else {
    console.log('El cielo está gris y nublado, podría llover en cualquier momento.');
}