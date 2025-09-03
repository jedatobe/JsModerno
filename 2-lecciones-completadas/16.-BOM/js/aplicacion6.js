// EVENTOS DE TIEMPO EN JAVASCRIPT

// setTimeout: ejecuta una función al transcurrir un tiempo especificado. (Sintaxis:setTimeout(cb [,delay], arg1, arg2,...);)
// function funcion1(){
//     document.querySelector("#demo").innerHTML = "Este texto se muestra 5 segundos después de cargar la página";
// }
// setTimeout(funcion1, 5000);

// Sintaxis #2
const timer = setTimeout(function(){
    document.querySelector("#demo").innerHTML = "Este texto se muestra 5 segundos después de cargar la página";
}, 5000);

// clearTimeout(): detiene la ejecución del código pendiente.
clearTimeout(timer);

/* setInterval(): permite establecer la ejecución periódica y repetitiva de una función.
(Sintaxis: setInterval(callback, delay,[arg1, arg2, ...]);) */  
function funcion2(){
    document.querySelector("#demo").innerHTML += "Este texto se repite cada 2 segundos" + "<br>";
}
const repeticion = setInterval(funcion2, 2000);

// clearInterval(): permite eliminar una repetición periódica.
clearInterval(repeticion);