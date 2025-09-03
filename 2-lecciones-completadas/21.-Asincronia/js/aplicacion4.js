// ENCADENAR PROMESAS

const pasosCompletados = ()=> {
    return new Promise((resolve)=>{
        setTimeout(resolve, 3000);
    });
}

pasosCompletados()
.then(()=>{
    console.log("Paso 1...completado");
    return pasosCompletados();
})
.then(()=>{
    console.log("Paso 2...completado");
    return pasosCompletados();
})
.then(()=>{
    console.log("Paso 3...completado");
    return pasosCompletados();
})
.then(()=>{
    console.log("Paso 4...completado");
    return pasosCompletados();
})