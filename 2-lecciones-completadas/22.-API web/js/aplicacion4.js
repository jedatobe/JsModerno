// FULLSCREEN API

const btn = document.querySelector("button");
btn.addEventListener("click", pantallaCompleta);

function pantallaCompleta(){
    const abrirPantallaCompleta = document.fullscreenElement;
    if(!abrirPantallaCompleta){
        document.documentElement.requestFullscreen();
        btn.innerHTML = "Cerrar";
    } else {
        document.exitFullscreen();
        btn.innerHTML = "Ver en pantalla completa";
    }
}