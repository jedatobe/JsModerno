// CREAR O MANIPULAR ATRIBUTOS HTML DESDE EL DOM

// Método setAttribute(): añade o cambia un atributo.
const fNombre = document.querySelector("input[type='text']");
fNombre.setAttribute("data-name", "nombre");

// Método getAttribute(): devuelve el valor del atributo del elemento o null si no existe.
const btnEnviar = document.querySelector("input[type='submit']");
console.log(btnEnviar.getAttribute("value"));

// Método removeAttribute(): elimina el atributo especificado del elemento.
const email = document.querySelector("input[type='email']");
if(email){
    email.removeAttribute("data-email");
}

// Método hasAttribute(): indica si el elemento tiene el atributo HTML especificado.
const privacidad = document.querySelector("small > a");
console.log(privacidad.hasAttribute("target"));