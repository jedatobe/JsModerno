// ELIMINAR / REEMPLAZAR ELEMENTOS

// Método remove()
const column = document.querySelector('.col');
column.remove();

// Método removeChild()
// const nav = document.querySelector('.nav');
// nav.removeChild(nav.firstElementChild);
// nav.removeChild(nav.lastElementChild);
// nav.removeChild(nav.children[1]);

// Método replaceChild()
const nav = document.querySelector('.nav');
const linkList = document.createElement('li');
linkList.innerHTML = '<a href="#">Términos y condiciones</a>';
nav.replaceChild(linkList, nav.firstElementChild);
nav.replaceChild(linkList, nav.lastElementChild);
nav.replaceChild(linkList, nav.children[2]);