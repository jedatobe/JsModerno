// REALIZAR UNA PETICIÓN HTTP EN JAVASCRIPT UTILIZANDO FETCH API

/* 
Sintaxis: fetch(url).then(response => {handle the response}).catch(error => {handle the error});
*/
fetch('data/datos.json')
.then((respuesta)=>{
    console.log(respuesta);
    return respuesta.json();
})
.then((datos)=>{
    console.log(datos);
})
.catch((error)=>{
    console.log("La solicitud no ha podido ser procesada");
});