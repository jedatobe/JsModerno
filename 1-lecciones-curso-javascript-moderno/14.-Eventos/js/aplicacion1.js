// MANEJADORES DE EVENTOS

// Eventos desde propiedades del DOM
const button2 = document.querySelector('#botonesSeccion14 > input:nth-child(2)');
button2.onclick = function() {
    const header = document.querySelector('h1');
    header.style.color = 'yellow';
}

// Eventos mediante el método addEventListener. Sintaxis: element.addEventListener(event, function, useCapture);
// const button3 = document.querySelector('#botonesSeccion14 > input:nth-child(3)');
// button3.addEventListener('click', function () {
//     const hideText = document.querySelector('h1');
//     hideText.style.display = 'none';
// });

// Sintaxis número 2
const button3 = document.querySelector('#botonesSeccion14 > input:nth-child(3)');
const hideText = () => {
    document.querySelector('h1').style.display = 'none';
}
button3.addEventListener('click', hideText);

// Múltiples listeners para un mismo evento
const header2 = document.querySelector('h2');

function f1()
{
    this.style.color = 'aqua'
}

function f2()
{
    this.innerHTML = 'Sección 14: Cómo trabajar con eventos'
}

header2.addEventListener('click', f1);
header2.addEventListener('dblclick', f2);

// Método removeEventListener()

button3.removeEventListener('click', hideText);