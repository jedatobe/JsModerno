// ITERACIÓN DE ARRAYS EN JS

// Bucle for
const animalesMarinos = ["Estrella de mar", "Pulpo", "Delfín", "Manatí"];
for(let i = 0; i < animalesMarinos.length; i++){
  console.log(`El animal marino que se encuentra en el índice ${i} es: ${animalesMarinos[i]}`);
}

// .ForEach
const elementos = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis"];
elementos.forEach(function(elemento, indice){
  console.log(`${indice}: ${elemento}`);
});