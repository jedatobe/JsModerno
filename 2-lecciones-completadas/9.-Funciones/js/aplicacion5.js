// FUNCIONES ANÓNIMAS AUTOEJECUTABLES

(function(){
    console.log('Esta función se ejecuta a si misma');
})();

// Funciones autoejecutables con parámetros
(function(x){
    console.log('El valor del número Pi es ' + x);
})(Math.PI);

// Funciones autoejecutables como expresión y valor de retorno
const usuario = (function(nombre, apellido){
    return `Hola ${nombre} ${apellido}`;
})("Kate", "De Laurentiis");
console.log(usuario);