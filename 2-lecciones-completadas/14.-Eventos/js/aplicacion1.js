// MANEJADORES DE EVENTOS

// Eventos desde propiedades del DOM
const btnDos = document.querySelector('#botonesSeccion14 > input:nth-child(2)');
btnDos.onclick = function(){
    const encabezado = document.querySelector('h1');
    encabezado.style.color = "yellow";
}

// Eventos mediante el método addEventListener. Sintaxis: element.addEventListener(event, function, useCapture);
// const btnTres = document.querySelector('#botonesSeccion14 > input:nth-child(3)');
// btnTres.addEventListener("click", function(){
//     const ocultatTexto = document.querySelector('h1');
//     ocultatTexto.style.display = " none";
// })

// Sintaxis #2
const btnTres = document.querySelector('#botonesSeccion14 > input:nth-child(3)');
const ocultarTexto = ()=> {
    document.querySelector('h1').style.display = 'none';
}
btnTres.addEventListener("click", ocultarTexto);

// Múltiples listeners para un mismo evento
const encabezadoSecundario = document.querySelector('h2');

function funcion1(){
    this.style.color = "aqua"
}

function funcion2(){
    this.innerHTML = "Sección 14: Cómo trabajar con eventos en JS"
}
encabezadoSecundario.addEventListener('click', funcion1);
encabezadoSecundario.addEventListener("dblclick", funcion2);

// Método removeEventListener()
btnTres.removeEventListener("click", ocultarTexto);