// PARÁMETROS Y ARGUMENTOS

let total = 0
function shoppingCart(precio) {
    let impuestos = 1.19
    let gastosEnvio = 0

    return (precio * impuestos) + gastosEnvio;
}
total = shoppingCart(24)
console.log(total.toFixed(2));

// Parámetros múltiples
function sumar(numero, numero2) {
    return numero + numero2
}
let resultado = sumar(890, 283)
console.log(resultado);

// Parámetros por defecto
function saludo(nombre, apellido = '') {
    return `Hola ${nombre} ${apellido}`
}
console.log(saludo('Daniel'));
