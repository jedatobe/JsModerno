//  FUNCIONES EN JAVASCRIPT

// Funciones por declaración (Sintaxis: function nombre([param[,param[, ...param]]]) { instrucciones })
function sumar() {
    console.log(580 + 398);
}
sumar();

// Funciones por expresión (Sintaxis: var varName = function([param[, param[, ...param]]]) { instrucciones })
const sumarValores = function() {
    console.log(580 + 398);
}
sumarValores();

// Funciones mediante el constructor de objetos (Sintaxis: new Function (arg1, arg2, ... argN, functionBody))
const sum = new Function('console.log(580 + 398)');
sum();

// Funciones con variables
function multiplicar() {
    let multiplicando = 18;
    let multiplicando2 = 34;
    let producto = multiplicando * multiplicando2;

    console.log(producto);
    
}
multiplicar()

// Devolución de valores
const saludar = function() {
    let saludo = 'Hola Bienvenidos al curso de Javascript moderno';
    return saludo;
}
console.log(saludar());

// Una función puede ser utilizada como un valor
function miFuncion() {
    return 20 * 50;
}
let x = miFuncion();
console.log(x);
