// CREAR O MANIPULAR ATRIBUTOS HTML DESDE EL DOM

// Método setAttribute(): añade o cambia un atributo.
const fName = document.querySelector('input[type="text"]');
fName.setAttribute('data-name', 'nombre');

// Método getAttribute(): devuelve el valor del atributo del elemento o null si no existe.
const sendButton = document.querySelector('input[type="submit"]');
console.log(sendButton.getAttribute('value'));

// Método removeAttribute(): elimina el atributo especificado del elemento.
const emailInput = document.querySelector('input[type="email"]');
if (emailInput) {
    emailInput.removeAttribute('data-email');
}

// Método hasAttribute(): indica si el elemento tiene el atributo HTML especificado.
const privacity = document.querySelector('small > a');
console.log(privacity.hasAttribute('target'));

