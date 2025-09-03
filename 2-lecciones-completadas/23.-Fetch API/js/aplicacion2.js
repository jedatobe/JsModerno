// PETICIONES FETCH API UTILIZANDO ASYNC/AWAIT

async function obtenerDatos(){
    const url = "data/contacto.json";
    try{
        const respuesta = await fetch(url);
        console.log(respuesta);

        const datos = await respuesta.json();
        console.log(datos);
    } catch(error){
        console.log("La solicitud no ha podido ser procesada");
    }
}

obtenerDatos();