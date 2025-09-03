// OBTENER EL VALOR DE LOS CAMPOS DE FORMULARIO: LISTAS DESPLEGABLES

// const btn = document.querySelector("button");
// const listaDesplegable = document.querySelector("select");
// console.log(listaDesplegable.options);
// console.log(listaDesplegable.selectedIndex);
// btn.addEventListener("click", (e)=>{
//     e.preventDefault();
//     const resultado = document.querySelector("#demo");
//     resultado.innerHTML = `Seleccionaste: ${listaDesplegable.options[listaDesplegable.selectedIndex].text}
//     <br> Su valor es: ${listaDesplegable.value}`;
// });

// Listas desplegables con selección múltiple
const btn = document.querySelector("button");
const listaDesplegable = document.querySelector("select");
const opciones = listaDesplegable.options;
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const opcionesSeleccionadas = [];
    for(const opcion of opciones){
        if(opcion.selected){
            opcionesSeleccionadas.push(opcion.text);
        }
    }
    const resultado = document.querySelector("#demo");
    resultado.innerHTML = opcionesSeleccionadas.join("<br>");
});