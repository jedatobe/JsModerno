// WEB STORAGE API: LOCALSTORAGE

//  Validar al objeto Storage en el navegador
if(localStorage === undefined){
    console.log("Este navegador no soporta localStorage");
} else{
    console.log("Este navegador soporta localStorage");
    console.log(localStorage);
}

// Almacenar valores en el localStorage
localStorage.setItem("nombre", "Alex");

// Actualizar valores
localStorage.setItem("nombre", "Sophie");

// Almacenare objetos en localStorage
const usuario = {
    nombre: "Stephanie",
    puesto: "VP de Marketing",
    id: 12,
}
localStorage.setItem("usuario", JSON.stringify(usuario));

// Almacenar arreglos en localStorage
const navegadores = ["Chrome", "Firefox", "Opera", "Edge", "Safari",];
localStorage.setItem("navegadores", JSON.stringify(navegadores));