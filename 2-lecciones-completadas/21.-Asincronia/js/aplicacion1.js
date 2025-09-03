// FUNCIONES CALLBACKS

function mensaje(){
    console.log("Este mensaje se muestra después de 5 segundos");
}

function operacionAsincrona(callback){
    setTimeout(callback, 5000);
}

operacionAsincrona(mensaje);
console.log("Este mensaje se muestra primero");