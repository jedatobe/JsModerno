// MÚLTIPLES AWAITS

const establecerConexion = ()=>{
    return new Promise((resolve)=>{
        console.log("Iniciar sesión...");
        setTimeout(()=>{
            resolve("Se ha establecido la conexión");
        }, 5000);
    })
}

const obtenerServicios = ()=>{
    return new Promise((resolve)=>{
        console.log("Acceder a los servicios de la API");
        setTimeout(()=>{
            resolve("Descargando servicios...");
        }, 3000);
    })
}

// const comprobar = async ()=>{
//     try{
//         const conectar = await establecerConexion();
//         console.log(conectar);

//         const servicios = await obtenerServicios();
//         console.log(servicios);
//     }
//     catch(error){
//         console.log(error);
//     }
// }


const comprobar = async ()=>{
    try{
        const [conectar, servicios] = await Promise.all([establecerConexion(), obtenerServicios()]);
        console.log(conectar);
        console.log(servicios);
    }
    catch(error){
        console.log(error);
    }
}

comprobar();