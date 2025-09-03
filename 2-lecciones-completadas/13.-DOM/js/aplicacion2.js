// SELECCIONAR ELEMENTOS DEL DOM (MÉTODOS TRADICIONALES)

// Método getElementsByClassName(): busca elementos con el atributo class especificado.
let elementos = document.getElementsByClassName("item");
console.log(elementos);
console.log("El tercer elemento es " + elementos[2].innerHTML);

elementos = document.getElementsByClassName("audio");
console.log(elementos); // Devuelve un HTMLCollection vacío

// Método getElementsByTagName(): busca elementos HTML por su etiqueta de elemento HTML.
let elementos2 = document.getElementsByTagName("h2");
console.log(elementos2);
console.log("El número de elementos <h2> es igual a " + elementos2.length);

elementos2 = document.getElementsByTagName("h4");
console.log(elementos2); // Devuelve un HTMLCollection vacío

// Método getElementsByName(): busca elementos con el atributo name.
let elementos3 = document.getElementsByName("calificacion");
console.log(elementos3);

elementos3 = document.getElementsByName("puntuacion");
console.log(elementos3); // Devuelve un NodeList vacío

// Método getElementById(): busca un elemento HTML con el atributo ID especificado.
let elementos4 = document.getElementById("destacado");
console.log(elementos4.innerHTML); 

elementos4 = document.getElementById("principal");
console.log(elementos4); //Devuelve null