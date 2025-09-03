// CREAR E INSERTAR ELEMENTOS EN EL DOM

// Método createElement(node): Crea un nuevo nodo elemento con la etiqueta HTML dada.
// Método appendChild(node): inserta un nodo elemento como un hijo al final de todos los elementos hijos que existan.
// Método insertBefore(newnode, node): inserta el nuevo nodo elemento antes del primer elemento hijo del padre sobre el que se invoca.

// Crear nuevo párrafo
let nuevoParrafo = document.createElement("p");

// De forma opcional, podemos agregar atributos en el elemento
nuevoParrafo.id = "parrafoAgregado";
nuevoParrafo.className = "intro especial";

// Agregar texto
// nuevoParrafo.textContent = "Hola, este es un nuevo párrafo creado mediante JS.";

nuevoParrafo.innerHTML = "<i class='fas fa-check'></i> Hola, este es un nuevo párrafo creado mediante JS.";

// Seleccionar elemento
let seleccionarElemento =document.querySelector("#descripcion :not(h1)");

// Insertar nuevo párrafo

// Insertar al final
// seleccionarElemento.appendChild(nuevoParrafo);

// Insertar al inicio
seleccionarElemento.insertBefore(nuevoParrafo,seleccionarElemento.firstChild);