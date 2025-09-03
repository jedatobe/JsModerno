// PAGE VISIBILITY API

const audio = document.querySelector("audio");
document.addEventListener("visibilitychange", ()=>{
    const ocultar = document.hidden;
    if(ocultar){
        audio.pause();
    } else {
        audio.play();
    }
});

// Detener la reproducción del audio cuando se cierre la pestaña o ventana del navegador
window.addEventListener("beforeunload", ()=>{
    audio.pause();
});