// FUNCIONES ASÍNCRONAS CON ASYNC/AWAIT

const operacionAsincrona = async ()=>{
    return "Tarea completada";
}

const gestionarTarea = async ()=>{
    const respuesta = await operacionAsincrona();
    console.log(respuesta);
}

gestionarTarea();

// Esto es equivalente a:
const operacionAsincrona2 = ()=>{
    return new Promise((resolve)=>{
        resolve("Tarea completada");
    })
}

const gestionarTarea2 = async ()=>{
    const respuesta2 = await operacionAsincrona2();
    console.log(respuesta2);
}

gestionarTarea2();

// Ejemplo con setTimeout()
const obtenerDatos = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("La descarga ha sido completada");
        }, 5000);
    });
}

const gestionarDatos = async ()=>{
    const response = await obtenerDatos();
    console.log(response);
}

gestionarDatos();