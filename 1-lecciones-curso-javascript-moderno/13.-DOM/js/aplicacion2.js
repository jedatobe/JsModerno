// SELECCIONAR ELEMENTOS DEL DOM (MÉTODOS TRADICIONALES)

// Método getElementsByClassName(): busca elementos con el atributo class especificado.
let elementos = document.getElementsByClassName("item")
console.log(elementos);
console.log(`El tercer elemento es: ` + elementos[2].innerHTML);

elementos = document.getElementsByClassName("audio")
console.log(elementos);

// Método getElementsByTagName(): busca elementos HTML por su etiqueta de elemento HTML.
let elementos2 = document.getElementsByTagName("h2")
console.log(elementos2);
console.log(`El número de elementos <h2> es igual a: `+elementos2.length);

// Método getElementsByName(): busca elementos con el atributo name.
let elementos3 = document.getElementsByName("calificacion")
console.log(elementos3);

let elementos4 = document.getElementById("destacado")
console.log(elementos4);
console.log(elementos4.innerHTML);



// Método getElementById(): busca un elemento HTML con el atributo ID especificado.