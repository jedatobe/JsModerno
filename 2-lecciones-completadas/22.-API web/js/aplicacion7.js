// SELECTION API

const parrafos = document.querySelectorAll("p");
parrafos.forEach((parrafo)=>{
    parrafo.addEventListener("mouseup", ()=>{
        const seleccionar = window.getSelection();

        if(seleccionar.toString().length > 0){
            const rango = seleccionar.getRangeAt(0);
            const resaltar = document.createElement("span");
            resaltar.style.backgroundColor = "yellow";
            rango.surroundContents(resaltar);
        }
    });
});