// PROPAGACIÓN Y CAPTURA DE EVENTOS EN JAVASCRIPT

// Propagación de eventos
const contenedorVerde = document.querySelector(".contenedor1");
contenedorVerde.addEventListener("click", (e)=>{
    e.stopPropagation();
    alert("Pulsaste sobre el contenedor de color verde");
});

const texto = document.querySelector("#texto1");
texto.addEventListener("click", (e)=>{
    e.stopPropagation();
    alert("Pulsaste sobre el elemento con color de fondo blanco");
});

// Captura de eventos
const contenedorAzul = document.querySelector(".contenedor2");
contenedorAzul.addEventListener("click", (e)=>{
    e.stopImmediatePropagation();
    alert("Pulsaste sobre el contenedor de color azul");
});

const texto2 = document.querySelector("#texto2");
texto2.addEventListener("click", (e)=>{
    e.stopImmediatePropagation();
    alert("Pulsaste sobre el elemento con color de fondo blanco");
});