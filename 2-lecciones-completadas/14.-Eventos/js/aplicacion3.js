// EVENTOS DE RATÓN

// Click: se produce cuando se pulsa el botón izquierdo del ratón.
const menuDesplegable = document.querySelector("#btn1");
menuDesplegable.addEventListener("click", function(){
    document.querySelector(".contenidoMenu").classList.toggle("mostrarMenu");
});

// dblclick: se produce cuando se pulsa dos veces el botón izquierdo del ratón.
document.querySelector("#dobleClick").addEventListener("dblclick", function(){
    this.style.color = "blue";
    this.style.fontSize = " 2rem";
});

/* mousedown: Se produce cuando se pulsa cualquier botón del ratón.
mouseup:se produce cuando se suelta cualquier botón del ratón que haya sido pulsado.
*/
const eventosDownUp = document.querySelector("#downUp");
eventosDownUp.addEventListener("mousedown", funcion1);
eventosDownUp.addEventListener("mouseup", funcion2);

function funcion1(){
    this.innerHTML = "Estás presionando un botón del ratón";
}

function funcion2(){
    this.innerHTML = "Ya no estás presionando ningún botón del ratón";
}

/* mouseover: se produce cuando el usuario mueve el puntero hacia un lugar en el interior del elemento.
 mouseout: se produce cuando el puntero del ratón se encuentra en el interior de un elemento y el usuario mueve el puntero a un lugar fuera de ese elemento.
 */
const eventosOverOut = document.querySelector(".overOut");
eventosOverOut.addEventListener("mouseover", funcion3);
eventosOverOut.addEventListener("mouseout", funcion4);

function funcion3(){
    this.innerHTML = "El puntero del ratón está sobre este texto";
}

function funcion4(){
    this.innerHTML = "El puntero del ratón ya no está sobre este texto";
}

// contextmenu: se produce cuando el usuario presiona el botón derecho del ratón sobre un elemento.
document.querySelector("#menuContextual").addEventListener("contextmenu", e =>{
    e.preventDefault();
});

// mousemove: se produce (de forma continua) cuando el puntero del ratón se encuentra sobre un elemento.
document.querySelector("#figura").addEventListener("mousemove", e=>{
    const x = document.querySelector("#coordenadas");
    x.innerText = `Coodernas de la ventana X/Y: ${e.clientX}, ${e.clientY}
    Coodernas de la pantalla X/Y: ${e.screenX}, ${e.screenY}
    Coodernas de la página X/Y: ${e.pageX}, ${e.pageY}`;
});

// Detectar botones del ratón.
const detectarBoton = document.querySelector("#btn");
detectarBoton.addEventListener("contextmenu", e=>{
    e.preventDefault();
});
detectarBoton.addEventListener("mouseup", e=>{
    const texto =document.querySelector("#mensaje");
    if(e.button == 0){
        texto.textContent = "Presionaste el botón izquierdo del ratón";
    }

    if(e.button == 1){
        texto.textContent = "Presionaste el botón del centro del ratón";
    }

    if(e.button == 2){
        texto.textContent = "Presionaste el botón derecho del ratón";
    }
});

// Detectar teclas modificadoras
const teclasModificadoras = document.querySelector("#btn2");
teclasModificadoras.addEventListener("click", e=>{
    const teclas = [];

    if(e.shiftKey){
        teclas.push("Shift");
    }

    if(e.ctrlKey){
        teclas.push("Ctrl");
    }

    if(e.altKey){
        teclas.push("Alt");
    }

    const resultado = document.querySelector("#mensaje2");
    resultado.textContent = "Presionaste la(s) tecla(s): " + teclas.join(" ");
});