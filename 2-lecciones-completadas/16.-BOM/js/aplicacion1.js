// EL OBJETO WINDOW

// // Propiedad innerWidth: determina la anchura interna de la ventana del navegador.
// const anchura = window.innerWidth;
// alert("La anchura interna de la ventana del navegador es igual a " + anchura + "px");

// // Propiedad innerHeight: determina la altura interna de la ventana del navegador.
// const altura = window.innerHeight;
// alert("La altura interna de la ventana del navegador es igual a " + altura + "px");

// Método window.Open(): abre una nueva ventana en el navegador.
const ventanaEmergente = document.querySelector("h1");
ventanaEmergente.addEventListener("click", ()=>{
    const url = "https://google.com";
    const params = "width = 600, height = 600, left = 600, top = 100";
    const abrirVentana = window.open(url, "/", params);
});