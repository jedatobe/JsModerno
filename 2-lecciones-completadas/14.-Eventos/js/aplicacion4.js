// EVENTOS DE TECLADO

/* Keydown: se produce cuando se presiona cualquier tecla. También se produce de forma continua si se mantiene pulsada una tecla.
Keyup: se produce cuando se suelta una tecla que estaba pulsada. */
const tecla = document.querySelector("input");
tecla.addEventListener("keydown", funcion1);
tecla.addEventListener("keyup", funcion2);

function funcion1(e){
    const valorTecla = e.key;
    console.log(`Presionaste la tecla ${valorTecla}`);
}

function funcion2(e){
    const codigoTecla = e.code;
    console.log(`El código de esta tecla es ${codigoTecla}`);
}

// Detectar tecla Caps Lock
const detectarMayusculas = document.querySelector("input[type = 'password']");
detectarMayusculas.addEventListener("keydown", e=> {
    if(e.getModifierState("CapsLock")){
        document.querySelector("#mensaje").style.color = "red";
        document.querySelector("#mensaje").innerHTML = "La tecla Caps Lock está activada"
    } else {
        document.querySelector("#mensaje").innerHTML = "";
    }
});