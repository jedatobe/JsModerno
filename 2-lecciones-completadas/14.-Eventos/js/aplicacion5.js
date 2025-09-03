// EVENTOS UI

// Evento load: se produce en el objeto window cuando se termina de cargar la página web.
// window.addEventListener("load", function(){
//     alert("La página web se ha cargado completamente");
// });

// Evento scroll: se produce en cualquier elemento que tenga una barra de scroll o de desplazamiento.
window.addEventListener("scroll", function(){
    console.log("Scrolling...");
});

// Evento resize: e produce en el objeto window cuando se redimensiona la ventana del navegador.
window.addEventListener("resize", function(){
    console.log("La ventana del navegador ha cambiado su tamaño");
});

// Evento DOMContentLoaded: se ejecuta cuando se carga la página pero no espera a que se carguen las imágenes o los recursos externos.
window.addEventListener("DOMContentLoaded", ()=>{
    alert("La página web se ha cargado completamente");
});