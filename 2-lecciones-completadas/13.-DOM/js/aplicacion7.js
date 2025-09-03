// ELIMINAR / REEMPLAZAR ELEMENTOS

// Método remove()
const columna = document.querySelector(".col");
columna.remove();

// Método removeChild()
// const navegacion = document.querySelector(".nav");
// navegacion.removeChild(navegacion.firstElementChild);
// navegacion.removeChild(navegacion.lastElementChild);
// navegacion.removeChild(navegacion.children[1]);

// Método replaceChild()
const navegacion = document.querySelector(".nav");
const listaEnlace = document.createElement("li");
listaEnlace.innerHTML = "<a href = '#'>Términos y condiciones</a?";
navegacion.replaceChild(listaEnlace, navegacion.children[2]);