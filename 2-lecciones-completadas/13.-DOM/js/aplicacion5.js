// MODIFICAR ELEMENTOS EXISTENTES EN EL DOM

// La propiedad textContent: devuelve el contenido de texto de un elemento.
// const encabezado = document.querySelector("h1");
// encabezado.textContent = "Curso de Marketing Digital avanzado";

// const encabezado = document.querySelector("h1").textContent = "Curso de Marketing Digital avanzado";

const encabezado = "Curso de Marketing Digital avanzado";
document.querySelector("h1").textContent = encabezado;

// La propiedad innerHTML: devuelve el contenido HTML del elemento.
const cambiarTexto = document.querySelector("#seccionDos h3");
cambiarTexto.innerHTML = "<strong>Estudia a tu propio ritmo</strong>";

// Reemplazar una imagen
const imagen = document.querySelectorAll("#seccionCuatro .card img");
imagen[1].src = "images/profile3.jpeg";