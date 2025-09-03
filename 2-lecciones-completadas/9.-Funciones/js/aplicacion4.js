// PARÁMETROS Y ARGUMENTOS

let total = 0;
function shoppingCart(precio){
    let impuestos = 1.22;
    let gastosEnvio = 12;
    return (precio * impuestos) + gastosEnvio
}
total = shoppingCart(99.95);
console.log(total.toFixed(2));

// Parámetros múltiples
function sumar(num, num2){
    return num + num2
}
let resultado = sumar(890, 283);
console.log(resultado);

// Parámetros por defecto
function saludo(nombre, apellido = ""){
    return `Hola ${nombre} ${apellido}`;
}
console.log(saludo("Natasha"));