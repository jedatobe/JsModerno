// FOREACH PARA ITERAR ARREGLOS

/* Método forEach: Ejecuta la función definida por cada uno de los elementos del array.
(Sintaxis: arr.forEach(function(item, index, array) {...});) */
const oceanos = ["Atlántico", "Pacífico", "Índico", "Ártico", "Antártico",];
oceanos.forEach((oceano, index) => {
    console.log(index + " " + oceano);
});