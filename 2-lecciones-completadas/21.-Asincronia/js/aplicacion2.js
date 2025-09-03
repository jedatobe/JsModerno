// CALLBACK HELL

setTimeout(function(){
    console.log("Paso 1...completado");
    setTimeout(function(){
        console.log("Paso 2...completado");
        setTimeout(function(){
            console.log("Paso 3...completado");
            setTimeout(function(){
                console.log("Paso 4...completado");
            }, 3000);
        }, 3000);
    },3000);
}, 3000);