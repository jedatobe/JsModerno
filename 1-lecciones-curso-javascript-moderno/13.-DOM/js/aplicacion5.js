// MODIFICAR ELEMENTOS EXISTENTES EN EL DOM

// La propiedad textContent: devuelve el contenido de texto de un elemento.
// const header = document.querySelector('h1');
// header.textContent = 'Curso de Marketing Digital Avanzado';

// const header = document.querySelector('h1').textContent = 'Corso de Marketing Digital Avanzado';
// const header = 'Curso de Marketing Digital Avanzado';
// document.querySelector('h1').textContent = header;

// La propiedad innerHTML: devuelve el contenido HTML del elemento.
const chageText = document.querySelector('#seccionDos h3');
chageText.innerHTML = '<strong>Estudia a tu propio ritmo</strong>';

// Reemplazar una imagen
const image = document.querySelectorAll('#seccionCuatro .card img');
image[1].src = image[2].src;
