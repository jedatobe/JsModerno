// EL OBJETO EVENT

// timeStamp: número de milisegundos transcurridos desde que se creó el evento.
const button3 = document.querySelector('#botonesSeccion14 > input:nth-child(3)')
button3.addEventListener('click', function(e) {
    console.log(`Milisegundos transcurridos: ${e.timeStamp} ms`);
})

// type: permite obtener el tipo de evento.
const button2 = document.querySelector('#botonesSeccion14 > input:nth-child(2)')
button2.addEventListener('click', f1);
button2.addEventListener('dblclick', f1);

function f1(e) {
    const x = e.type;
    console.log(x);
     
}
// preventDefault(): Evita que se realice el comportamiento por defecto del evento.
const link = document.querySelector('a')
link.addEventListener('click', function (e) {
    e.preventDefault();
});


// target: Returns the element that triggered the event
const elemento = document.body;
elemento.addEventListener('click', function(e) {
    const name = e.target.nodeName;
    console.log(name);
})