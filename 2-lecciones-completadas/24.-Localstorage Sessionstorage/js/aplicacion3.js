// ELIMINAR DATOS DEL LOCALSTORAGE

localStorage.setItem("color", "verde");

const productos = ["computadores", "monitores", "impresoras", "tablets",];
localStorage.setItem("productos", JSON.stringify(productos));

const empleado = {
    nombre: "Hikari",
    puesto: "Gerente de producto",
    id: 18,
}
localStorage.setItem("empleado", JSON.stringify(empleado));

// Eliminar datos
localStorage.removeItem("productos");
localStorage.removeItem("usuario");

// Limpiar el localStorage
localStorage.clear();