// OBTENER EL VALOR DE LOS CAMPOS DE FORMULARIO: CAMPOS ALFANUMÉRICOS

/* Los elementos <input> alfanuméricos y textarea son:
- Campos alfanumérico corto: <input type="text">	
- Texto para búsquedas:	<input type="search">	
- Número de teléfono o móvil:	<input type="tel">
- Dirección URL:	<input type="url">
- Dirección de correo email:	<input type="email">
- Contraseña:	<input type="password">
- Campo oculto (no mostrar al usuario):	<input type="hidden">	
- Campo alfanumérico extenso:	<textarea>
*/

function funcion1(e){
    const nombre = document.querySelector("input").value;
    document.querySelector("#demo").innerHTML = nombre + "<br>";
    e.preventDefault();
}

function funcion2(e){
    const mensaje = document.querySelector("textarea").value;
    document.querySelector("#demo").innerHTML += mensaje;
    e.preventDefault();
}

const boton = document.querySelector("button");
boton.addEventListener("click", funcion1);
boton.addEventListener("click", funcion2);