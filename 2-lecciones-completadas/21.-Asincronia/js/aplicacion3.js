// PROMESAS

//  Cómo crear una promesa
const promesa = new Promise((resolve, reject)=> {
    const completarTarea = true;

    setTimeout(()=>{
        if(completarTarea){
            resolve("La tarea ha sido completada con éxito");
        } else {
            reject("La tarea no ha podido ser completada con éxito, por favor, inténtalo de nuevo");
        }  
    }, 5000);
       
});
// Cómo consumir una promesa
promesa.then((exito)=>{
    console.log(exito);
});

promesa.catch((error)=>{
    console.log(error);
});