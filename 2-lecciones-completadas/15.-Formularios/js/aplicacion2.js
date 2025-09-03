// OBTENER EL VALOR DE LOS CAMPOS DE FORMULARIO: RADIOBUTTONS

const btn = document.querySelector("button");
const radioButtons = document.querySelectorAll("input[type='radio']");
console.log(radioButtons);
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let opcionSeleccionada;
    for(const radioButton of radioButtons){
        if(radioButton.checked){
            opcionSeleccionada = radioButton.value;
        }
    }
    const resultado = document.querySelector("#demo");
    resultado.innerHTML = `Seleccionaste la opción ${opcionSeleccionada}`;
});