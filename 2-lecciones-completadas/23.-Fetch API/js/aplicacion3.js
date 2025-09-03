// CONSULTAR LOS DATOS DE UNA API EXTERNA

async function obtenerDatos(){
    try{
        const respuesta = await fetch("https://api.openbrewerydb.org/v1/breweries");
        console.log(respuesta);

        const datos = await respuesta.json();
        const cervecerias = [];
        datos.forEach((cerveceria)=>{
            const {name, phone, city, state, country} = cerveceria;
            cervecerias.push({
                nombre: name,
                telefono: phone,
                ciudad: city,
                estado: state,
                pais: country,
            })
        })
        console.table(cervecerias);
    } catch(error){
        console.log("La solicitud no ha podido ser procesada, por favor, inténtalo de nuevo");
    }
}
obtenerDatos();