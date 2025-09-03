// ESTILOS Y CLASES

// style de un elemento
const encabezado = document.querySelector("#seccionTres h2");
encabezado.style.color = "green";
encabezado.style.fontSize = "2.5rem";

const botonSeccionTres = document.querySelector("#seccionTres a");
botonSeccionTres.style.backgroundColor = "#41db41";

// EL OBJETO CLASSLIST
const solicitudInformacion = document.querySelector(" #seccionCinco p");
solicitudInformacion.classList.add("info", "visible", "especial");
solicitudInformacion.classList.remove("visible");
solicitudInformacion.classList.replace("info", "importante");
console.log(solicitudInformacion.classList.contains("especial"));
console.log(solicitudInformacion.classList.toggle("especial"));
console.log(solicitudInformacion.classList.toggle("block"));