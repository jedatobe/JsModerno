// DESESTRUCTURACIÓN DE OBJETOS ANIDADOS
const caracteristicas = {
    peso : `3.9 libras`,
    color : `Negro`,
    dimensiones : {
        anchura : `10 pulgadas`,
        altura : `200 pulgadas`,
    },
}

const {peso, color, dimensiones: { anchura, altura }} =  caracteristicas

console.log(peso);
console.log(color);
console.log(anchura);
console.log(altura);
