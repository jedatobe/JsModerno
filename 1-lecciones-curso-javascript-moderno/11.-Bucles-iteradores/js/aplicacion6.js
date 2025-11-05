// BUCLE FOR…IN

// Sintaxis: for (variable in objeto){ instrucción}
const usuario = {
    nombre: "Natasha",
    edad: 30,
    ["usuario premium"]: true,
}
for(let i in usuario){
    console.log(`${i}: ${usuario[i]}`);
}