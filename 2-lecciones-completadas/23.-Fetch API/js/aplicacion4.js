// ENVIAR UNA SOLICITUD POST CON FETCH API

async function enviarDatos() {
    const datos = {
        name: "Kazuumi F.",
        job: "Data Analyst",
    }
    try{
        const respuesta = await fetch("https://reqres.in/api/users", {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-type": "application/json; charset = UTF-8",
            },
        });
        console.log(respuesta);
        const data = await respuesta.json();
        console.log(data);
    } catch(error){
        console.log("Los datos no pudieron ser enviados", error);
    }
}
enviarDatos();