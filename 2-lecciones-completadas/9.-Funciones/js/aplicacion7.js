// FUNCIONES ANIDADAS Y CLAUSURAS

function externa(a){
    function interna(b){
        return a + b
    }
    return interna
}

let resultado = externa(3)(5);
console.log(resultado);

// Ejemplo 2
function mensaje(){
    let saludo = 'Hola';
    function saludar(nombre){
        return `${saludo} ${nombre}`
    }
    return saludar
}
console.log(mensaje()("Jessie"));