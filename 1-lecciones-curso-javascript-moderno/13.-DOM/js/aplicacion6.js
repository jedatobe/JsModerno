// CREAR E INSERTAR ELEMENTOS EN EL DOM

// Método createElement(node): Crea un nuevo nodo elemento con la etiqueta HTML dada.
// Método appendChild(node): inserta un nodo elemento como un hijo al final de todos los elementos hijos que existan.
// Método insertBefore(newnode, node): inserta el nuevo nodo elemento antes del primer elemento hijo del padre sobre el que se invoca.

let nuevoParrafo = document.createElement('p');

nuevoParrafo.id = 'parrafoAgregado';
nuevoParrafo.className = 'intro especial';

// nuevoParrafo.textContent = 'Hola este es nuevo parrafo creado mediante Javascript';
nuevoParrafo.innerHTML = '<i class="fas fa-check"></i> Hola este es nuevo parrafo creado mediante Javascript';
// nuevoParrafo.parentElement.append(nuevoParrafo);

let seleccionarElemento = document.querySelector('#descripcion :not(h1)');
// seleccionarElemento.appendChild(nuevoParrafo);
seleccionarElemento.insertBefore(nuevoParrafo, seleccionarElemento.firstChild);