// CUADROS DE DIÁLOGO / VENTANAS MODALES

// Cuadro de diálogo de alerta
// alert("Bienvenidos a la sección 16 del curso de JS Moderno");

// Cuadro de diálogo de confirmación
// const confirmar = confirm("¿Deseas eliminar este archivo?");
// const resultado = confirmar ? "El archivo ha sido borrado" : "El archivo no ha sido borrado";
// alert(resultado);

// Cuadro de diálogo de petición
const nombre = prompt("Por favor, escribe tu nombre");
if(nombre == null || nombre == ""){
    alert("Debes escribir tu nombre. La acción ha sido cancelada");
} else {
    alert(`Hola ${nombre}, te damos la bienvenida al curso de JS Moderno`);
}