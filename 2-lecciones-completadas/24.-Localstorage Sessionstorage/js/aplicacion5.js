// EJERCICIO BÁSICO CON LOCALSTORAGE Y SESSIONSTORAGE

// const body = document.querySelector("body");
// const listaDesplegable = document.querySelector("select");
// listaDesplegable.addEventListener("change", ()=>{
//     localStorage.setItem("color", listaDesplegable.value);
//     body.style.backgroundColor = listaDesplegable.value;
// });

// // Recuperar el color almacenado en el localStorage al cargar la página
// const colorAlmacenado = localStorage.getItem("color");
// if(colorAlmacenado){
//     body.style.backgroundColor = colorAlmacenado;
//     listaDesplegable.value;
// }

// // Borrar los datos almacenados en el localStorage
// const btn = document.querySelector("button");
// btn.addEventListener("click", ()=>{
//     localStorage.removeItem("color");
//     body.style.backgroundColor = "";
//     listaDesplegable.value = "";
// });


const body = document.querySelector("body");
const listaDesplegable = document.querySelector("select");
listaDesplegable.addEventListener("change", ()=>{
    sessionStorage.setItem("color", listaDesplegable.value);
    body.style.backgroundColor = listaDesplegable.value;
});

// Recuperar el color almacenado en el sessionStorage al cargar la página
const colorAlmacenado = sessionStorage.getItem("color");
if(colorAlmacenado){
    body.style.backgroundColor = colorAlmacenado;
    listaDesplegable.value;
}

// Borrar los datos almacenados en el sessionStorage
const btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    sessionStorage.removeItem("color");
    body.style.backgroundColor = "";
    listaDesplegable.value = "";
});