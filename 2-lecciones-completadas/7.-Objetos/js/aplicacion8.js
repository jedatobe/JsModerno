// DESESTRUCTURACIÓN DE OBJETOS ANIDADOS

const caracteristicas = {
    peso: "3.9 libras",
    color: "negro",
      dimensiones: {
        anchura: "10 pulgadas",
        altura: "200 pulgadas", 
      }
}

const {peso, color, dimensiones: {anchura, altura}} = caracteristicas;

console.log(peso);
console.log(color);
console.log(anchura);
console.log(altura);
console.log(caracteristicas);
console.log(caracteristicas.dimensiones);