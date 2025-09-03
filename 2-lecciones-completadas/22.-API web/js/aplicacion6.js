// PICTURE-INPICTURE API

const video = document.querySelector("video");
const btn = document.querySelector("button");

// Verificar si Picture-in-Picture es compatible con el navegador
if("pictureInPictureEnabled" in document){
    btn.addEventListener("click", ()=>{
        if(document.pictureInPictureElement){
            //  Salir del modo Picture-in-Picture
            document.exitPictureInPicture();
            btn.innerHTML = "Activar Picture-in-Picture";
        } else{
            // Activar modo Picture-in-Picture
            video.requestPictureInPicture();
            btn.innerHTML = "Desactivar Picture-in-Picture";
        }
    });
} else{
    //  Ejecutar este código si Picture-In-Picture no es compatible
    btn.style.display = "none";
}