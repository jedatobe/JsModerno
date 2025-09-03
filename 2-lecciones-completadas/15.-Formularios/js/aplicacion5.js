// EVENTOS DE FORMULARIO

// Focus / blur Event
const focusBlur = document.querySelector("#input1");
focusBlur.addEventListener("focus", enfoque);
focusBlur.addEventListener("blur", desenfoque);

function enfoque(){
    focusBlur.style.backgroundColor = "#83b9e7";
    document.querySelector("#demo").innerHTML = "Hiciste foco en este campo de formulario";
}

function desenfoque(){
    focusBlur.style.backgroundColor = "yellow";
    document.querySelector("#demo").innerHTML = "Pulsaste fuera de este campo de formulario";
}

// Input Event
const nombre = document.querySelector("#fname");
nombre.addEventListener("input", ()=>{
    document.querySelector("#demo").innerHTML = `Escribiste el nombre: ${nombre.value}`;
});

// Change event
const seleccionar = document.querySelector("select");
seleccionar.addEventListener("change", ()=>{
    const x = document.querySelector("select").value;
    document.querySelector("#demo").innerHTML = `Seleccionaste: ${x}`;
});

// Submit event
const enviarDatos = document.querySelector("#myForm");
enviarDatos.addEventListener("submit", (e)=>{
    e.preventDefault();
    document.querySelector("#demo").innerHTML = "Los datos han sido enviados";
});