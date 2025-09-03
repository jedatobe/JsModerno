// FUNCIONES FLECHA (ARROW FUNCTIONS)

// Sin parámetros (Sintaxis: () => expression)
const saludo = () => console.log('Sesión iniciada correctamente');
saludo();

// Con un sólo parámetro (Sintaxis: param => expression)
const multiplicar = x => console.log(x * x);
multiplicar(12);

// Varios parámetros (Sintaxis: (param1, paramN) => expression)
const sumar = (num, num2) => console.log(num + num2);
sumar(15, 90);

// Declaraciones de varias líneas (Sintaxis: (param1,param2,...paramN) => {expression return}
const suma = (a, b) => {
    let resultado = a + b;
    return resultado
}
console.log(suma(111, 222));

// La palalabra reservada this no funciona con las funciones flecha
const usuario = {
    nombre: "Sophie",
    ocupacion: "Data analyst",
    mensajeBienvenida: () => console.log(`Iniciaste sesión como: ${usuario.nombre}`)
}
usuario.mensajeBienvenida();