// WEBXR API

const cambiarColor = document.querySelector("a-box");
const esDispositivoVR = navigator.xr != null;
if(esDispositivoVR){
    cambiarColor.addEventListener("pointerclick", (e)=>{
        e.target.setAttribute("color", "#4cc3d9");
    });
} else{
    cambiarColor.addEventListener("click", (e)=>{
        e.target.setAttribute("color", "#4cc3d9");
    });
}