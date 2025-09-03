// OBTENER VALORES DEL LOCALSTORAGE

const obtenerNombre = localStorage.getItem("nombre");
console.log(obtenerNombre);

const obtenerApellido = localStorage.getItem("apellido");
console.log(obtenerApellido); // Devuelve null debido a que este valor no existe

const obtenerUUsuario = localStorage.getItem("usuario");
console.log(JSON.parse(obtenerUUsuario));

const obtenerNavegadores = localStorage.getItem("navegadores");
console.log(JSON.parse(obtenerNavegadores));