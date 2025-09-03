// VARIABLES EN JAVASCRIPT: PALABRA RESERVADA LET

// Ejemplo básico de variables
a = 5;
b = 15;
resultado = a + b;
console.log(resultado);

// Variables con la palabra reservada let
let sumando1 = 150;
let sumando2 = 350;
console.log(sumando1 + sumando2);

// Con la palabra reservada let no podemos declarar varias veces una misma variable
let descuento = 120;
descuento = 125;
console.log(descuento);

// No es obligatorio inicializar las variables, podemos declararlas y asignarles un valor posteriormente
let nombre = "Cynthia";
let edad;
edad = 35;
console.log(nombre);
console.log(edad);

// Declaración masiva de variables: método 1
let usuario = "Thomas", nacionalidad = "canadiense", puesto = "Analista senior";

// Declaración masiva de variables: método 2
let producto = "Tablet",
marca = "x",
precio = 550;

// Actualizar una variable
let oferta = 49.99;
oferta;
console.log(oferta);

// JavaScript es un lenguaje tipado dinámicamente
let z = "Esto es un texto";
console.log(typeof z);

z = 50;
console.log(typeof z);

z = "50";
console.log(typeof z);

z = 6 > 3;
console.log(typeof z);

z = { nombre: "Anna", edad: 35, usuarioRegistrado: true};
console.log(typeof z);