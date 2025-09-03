// GESTIONAR ERRORES CON TRY/CATCH

const cargarDatos = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const gestionarTarea = false;
            if(gestionarTarea){
                resolve("Los datos han sido cargados correctamente");
            } else{
                reject("Se ha producido un error, vuelve a intentarlo");
            }
        }, 5000);
    });
}

const gestionarCargaDatos = async ()=>{
    try{
        const respuesta = await cargarDatos();
        console.log(respuesta)
    }
    catch(error){
        console.log(error);
    }
}

gestionarCargaDatos();