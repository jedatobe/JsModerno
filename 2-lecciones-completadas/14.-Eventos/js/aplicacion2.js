// EL OBJETO EVENT

// timeStamp: número de milisegundos transcurridos desde que se creó el evento.
const boton3 = document.querySelector("#botonesSeccion14 > input:nth-child(3)");
boton3.addEventListener("click", function(e){
    console.log(`Milisegundos transcurridos: ${e.timeStamp}ms`);
});

// type: permite obtener el tipo de evento.
const boton2 = document.querySelector("#botonesSeccion14 > input:nth-child(2)");
boton2.addEventListener("click", miFuncion);
boton2.addEventListener("dblclick", miFuncion);

function miFuncion(e){
    const x = e.type;
    console.log(x)
}

// preventDefault(): Evita que se realice el comportamiento por defecto del evento.
const enlace = document.querySelector("a");
enlace.addEventListener("click", function(e){
    e.preventDefault();
});

// target: Returns the element that triggered the event
const elemento = document.body;
elemento.addEventListener("click", function(e){
    const nombre = e.target.nodeName;
    console.log(nombre);
});