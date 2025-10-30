// FUNCIONES FLECHA (ARROW FUNCTIONS)

// Sin parámetros (Sintaxis: () => expression)
const saludo = () => console.log('Sesión iniciada correctamente');
saludo();

// Con un sólo parámetro (Sintaxis: param => expression)
const multiplicar = x => console.log(x * x);
multiplicar(12);

// Varios parámetros (Sintaxis: (param1, paramN) => expression)
const sumar = (numero1, numero2) => console.log(numero1 + numero2);
sumar(15, 90);

// Declaraciones de varias líneas (Sintaxis: (param1,param2,...paramN) => {expression return}
const suma = (a, b) => {
    let resultado = a + b;
    return resultado;
}
console.log(suma(111, 222));

// La palabra reservada this no funciona con las funciones flecha
const usuario = {
    nombre : 'Sophie',
    ocupacion: 'Analista de datos',
    mensajeBienevenida: () => console.log(`Iniciaste sesion como: ${usuario.nombre}`),
}
usuario.mensajeBienevenida();