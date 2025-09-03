// Crea una ventana modal para que el usuario ingrese su nombre
let nombre = prompt("Por favor, escribe tu nombre y luego presiona el botón OK para continuar");

/* 
Se establece una condición:
* Si el usuario escribe el nombre, se muestra un mensaje de bienvenida.
* Si el usuario no escribe su nombre y presiona sobre el botón OK se muestra otra ventana modal
con un mensaje diferente.
*/
if(nombre){
    alert("Hola " + nombre + ", te damos la bienvenida al curso de JavaScript Moderno.");
} else if(nombre == ""){
    alert("Hola desconocido(a), presiona el botón OK para continuar.");
}

// document.querySelector("h2").innerHTML = "Sección 1: Comentarios en JavaScript"; // Este código modifica el texto del elemento <h2>