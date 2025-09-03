// OBTENER EL VALOR DE LOS CAMPOS DE FORMULARIO: CHECKBOXES

const btn = document.querySelector("#btn");
const casillasVerificacion = document.querySelectorAll("input[type='checkbox']");
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const valores = [];
    for(const casillaVerificacion of casillasVerificacion){
        if(casillaVerificacion.checked){
            valores.push(casillaVerificacion.value);
        }
    }
    document.querySelector("#demo").innerHTML = valores.join("<br>");
});

// Marcar / des-marcar todos los checkboxes
const marcar = document.querySelector("#marcar");
const desmarcar = document.querySelector("#desmarcar");
marcar.addEventListener("click", funcion1);
desmarcar.addEventListener("click", funcion2);

function funcion1(e){
    e.preventDefault();
    const casillas = document.querySelectorAll(".checkbox");
    for(const casilla of casillas){
        casilla.setAttribute("checked", true);
    }
}

function funcion2(e){
    e.preventDefault();
    const casillas = document.querySelectorAll(".checkbox");
    for(const casilla of casillas){
        casilla.removeAttribute("checked");
    }
}